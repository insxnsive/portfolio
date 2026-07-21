export function bindEvents({ dom, motionQuery, dialogue, gaze, terminal, boot }) {
  const { bootSkip, guestButton, manualButton, promptForm, input, shortcutButtons } = dom;

  bootSkip.addEventListener('click', () => boot.finishBoot(true));
  window.addEventListener('pointermove', event => gaze.updateGazeTarget(event.clientX, event.clientY), { passive: true });
  window.addEventListener('resize', () => gaze.updateGazeTarget(gaze.gaze.pointerX, gaze.gaze.pointerY), { passive: true });

  function handleMotionPreference() {
    gaze.scheduleGaze();
    gaze.startIdleGaze();
    dialogue.scheduleDialogue();
  }

  if (typeof motionQuery.addEventListener === 'function') motionQuery.addEventListener('change', handleMotionPreference);
  else motionQuery.addListener(handleMotionPreference);

  guestButton.addEventListener('pointerenter', dialogue.showGuestInvitation);
  guestButton.addEventListener('pointerleave', dialogue.resumeDialogueCycle);
  guestButton.addEventListener('focus', dialogue.showGuestInvitation);
  guestButton.addEventListener('blur', dialogue.resumeDialogueCycle);
  guestButton.addEventListener('click', () => terminal.enterConsole('guest'));
  manualButton.addEventListener('click', () => terminal.enterConsole('manual'));
  shortcutButtons.forEach(button => button.addEventListener('click', () => terminal.runShortcut(button.dataset.command)));
  promptForm.addEventListener('submit', event => {
    event.preventDefault();
    const command = input.value;
    input.value = '';
    terminal.runCommand(command);
  });
}