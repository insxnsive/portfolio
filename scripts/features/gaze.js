export function createGazeController({ eyeSocket, iris, motionQuery }) {
  const gaze = {
    currentX: 0,
    currentY: 0,
    targetX: 0,
    targetY: 0,
    pointerX: window.innerWidth / 2,
    pointerY: window.innerHeight / 2,
    frame: null
  };

  function clamp(value, minimum, maximum) { return Math.min(maximum, Math.max(minimum, value)); }
  function applyGaze() {
    iris.style.setProperty('--eye-x', `${gaze.currentX.toFixed(2)}px`);
    iris.style.setProperty('--eye-y', `${gaze.currentY.toFixed(2)}px`);
  }

  function animateGaze() {
    const deltaX = gaze.targetX - gaze.currentX;
    const deltaY = gaze.targetY - gaze.currentY;
    const reducedMotion = motionQuery.matches;
    if (reducedMotion) {
      gaze.currentX = gaze.targetX;
      gaze.currentY = gaze.targetY;
    } else {
      gaze.currentX += deltaX * .16;
      gaze.currentY += deltaY * .16;
    }
    applyGaze();
    if (!reducedMotion && (Math.abs(deltaX) > .04 || Math.abs(deltaY) > .04)) {
      gaze.frame = requestAnimationFrame(animateGaze);
      return;
    }
    gaze.currentX = gaze.targetX;
    gaze.currentY = gaze.targetY;
    applyGaze();
    gaze.frame = null;
  }

  function scheduleGaze() {
    if (gaze.frame === null) gaze.frame = requestAnimationFrame(animateGaze);
  }

  function updateGazeTarget(clientX, clientY) {
    gaze.pointerX = clientX;
    gaze.pointerY = clientY;
    const rect = eyeSocket.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;
    const horizontalRange = Math.max(window.innerWidth * .46, rect.width);
    const verticalRange = Math.max(window.innerHeight * .46, rect.height);
    const normalizedX = clamp((clientX - eyeCenterX) / horizontalRange, -1, 1);
    const normalizedY = clamp((clientY - eyeCenterY) / verticalRange, -1, 1);
    const maximumX = rect.width * .16;
    const maximumY = rect.height * .07;
    let nextX = normalizedX * maximumX;
    let nextY = normalizedY * maximumY;
    const ellipseDistance = Math.hypot(nextX / maximumX, nextY / maximumY);
    if (ellipseDistance > 1) {
      nextX /= ellipseDistance;
      nextY /= ellipseDistance;
    }
    gaze.targetX = nextX;
    gaze.targetY = nextY;
    scheduleGaze();
  }

  function stopGaze() {
    if (gaze.frame !== null) {
      cancelAnimationFrame(gaze.frame);
      gaze.frame = null;
    }
  }

  return { applyGaze, scheduleGaze, stopGaze, updateGazeTarget, gaze };
}