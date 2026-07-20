import { bootSequence } from '../data/boot.js';

export function createBootController({ dom, motionQuery, startDialogueCycle }) {
  const { bootScreen, bootOutput, bootStatus, bootProgressBar, bootProgressValue, terminalRoot } = dom;
  let bootIndex = 0;
  let bootTimer = null;
  let bootFinished = false;

  function updateBootMeter(completed) {
    const width = 28;
    const ratio = completed / bootSequence.length;
    const filled = Math.round(width * ratio);
    const percentage = Math.round(ratio * 100);
    bootProgressBar.textContent = `[${'#'.repeat(filled)}${'-'.repeat(width - filled)}]`;
    bootProgressValue.textContent = `${percentage}%`;
  }

  function appendBootLine(item) {
    const line = document.createElement('div');
    const state = document.createElement('span');
    const message = document.createElement('span');

    line.className = 'boot-line';
    state.className = item.state === '[    ]' ? 'boot-state' : 'boot-state boot-state--ready';
    state.textContent = item.state;
    message.textContent = item.text;
    line.append(state, message);
    bootOutput.append(line);
  }

  function finishBoot(skipped = false) {
    if (bootFinished) return;

    bootFinished = true;
    clearTimeout(bootTimer);

    if (skipped) appendBootLine({ state: '[ SKIP ]', text: 'Boot sequence skipped by user.' });

    updateBootMeter(bootSequence.length);
    bootStatus.textContent = 'The portfolio is ready.';
    terminalRoot.classList.remove('terminal--locked');
    terminalRoot.setAttribute('aria-hidden', 'false');
    startDialogueCycle();
    bootScreen.setAttribute('aria-hidden', 'true');
    bootScreen.classList.add('boot-screen--complete');

    window.setTimeout(() => { bootScreen.hidden = true; }, motionQuery.matches ? 0 : 200);
  }

  function advanceBoot() {
    if (bootFinished) return;
    if (bootIndex >= bootSequence.length) {
      bootTimer = window.setTimeout(() => finishBoot(), 180);
      return;
    }

    const item = bootSequence[bootIndex];
    appendBootLine(item);
    bootIndex += 1;
    updateBootMeter(bootIndex);
    bootStatus.textContent = item.text;
    bootTimer = window.setTimeout(advanceBoot, 145);
  }

  function startBoot() {
    if (motionQuery.matches) {
      bootSequence.forEach(appendBootLine);
      bootIndex = bootSequence.length;
      updateBootMeter(bootIndex);
      bootTimer = window.setTimeout(() => finishBoot(), 80);
      return;
    }
    bootTimer = window.setTimeout(advanceBoot, 160);
  }

  return { finishBoot, startBoot };
}