export const dom = {
  bootScreen: document.querySelector('#boot-screen'),
  bootOutput: document.querySelector('#boot-output'),
  bootStatus: document.querySelector('#boot-status'),
  bootProgressBar: document.querySelector('#boot-progress-bar'),
  bootProgressValue: document.querySelector('#boot-progress-value'),
  bootSkip: document.querySelector('#boot-skip'),
  terminalRoot: document.querySelector('#terminal'),
  eyeSocket: document.querySelector('#eye-socket'),
  iris: document.querySelector('#iris'),
  eyeDialogue: document.querySelector('#eye-dialogue'),
  asciiSource: document.querySelector('#ascii-source'),
  welcome: document.querySelector('#welcome'),
  consolePanel: document.querySelector('#console'),
  output: document.querySelector('#console-output'),
  input: document.querySelector('#prompt-input'),
  guestButton: document.querySelector('#guest-button'),
  manualButton: document.querySelector('#manual-button'),
  promptForm: document.querySelector('#prompt-form'),
  shortcutButtons: [...document.querySelectorAll('.shortcut[data-command]')]
};

export const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');