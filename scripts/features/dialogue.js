import { eyeDialogues } from '../data/dialogue.js';

export function createDialogueController({ eyeDialogue, motionQuery }) {
  let dialogueTimer = null;
  let dialogueStarted = false;
  let dialogueOverridden = false;
  let lastDialogueIndex = -1;

  function pickDialogue() {
    let nextIndex = Math.floor(Math.random() * eyeDialogues.length);
    if (eyeDialogues.length > 1 && nextIndex === lastDialogueIndex) nextIndex = (nextIndex + 1) % eyeDialogues.length;
    lastDialogueIndex = nextIndex;
    return eyeDialogues[nextIndex];
  }

  function setDialogue(message) { eyeDialogue.textContent = `> ${message}`; }

  function scheduleDialogue() {
    clearTimeout(dialogueTimer);
    if (!dialogueStarted || dialogueOverridden || motionQuery.matches) return;
    const delay = Math.round(4000 + Math.random() * 4000);
    dialogueTimer = window.setTimeout(() => {
      setDialogue(pickDialogue());
      scheduleDialogue();
    }, delay);
  }

  function startDialogueCycle() {
    if (dialogueStarted) return;
    dialogueStarted = true;
    setDialogue(pickDialogue());
    scheduleDialogue();
  }

  function showGuestInvitation() {
    if (!dialogueStarted) return;
    dialogueOverridden = true;
    clearTimeout(dialogueTimer);
    setDialogue('will you partake?');
  }

  function resumeDialogueCycle() {
    if (!dialogueStarted) return;
    dialogueOverridden = false;
    setDialogue(pickDialogue());
    scheduleDialogue();
  }

  return { resumeDialogueCycle, scheduleDialogue, showGuestInvitation, startDialogueCycle };
}