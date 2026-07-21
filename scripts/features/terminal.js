import { responses } from '../data/terminal.js';

export function createTerminalController({ dom, gaze, motionQuery, touchQuery }) {
  const { consolePanel, guestButton, input, output, promptForm, shortcutButtons, welcome } = dom;
  let shortcutTimer = null;
  let shortcutToken = 0;
  const defaultShortcuts = shortcutButtons.map(button => ({ command: button.dataset.command, text: button.textContent }));

  function setProjectShortcuts(active) {
    if (active) {
      const projectCommands = ['projects 01', 'projects 02', 'projects 03'];
      shortcutButtons.forEach((button, index) => {
        if (index < projectCommands.length) {
          button.hidden = false;
          button.dataset.command = projectCommands[index];
          button.textContent = '[ ' + String(index + 1).padStart(2, '0') + ' ]';
        } else {
          button.hidden = true;
        }
      });
      return;
    }

    shortcutButtons.forEach((button, index) => {
      button.hidden = false;
      button.dataset.command = defaultShortcuts[index].command;
      button.textContent = defaultShortcuts[index].text;
    });
  }

  function createTerminalLink(entry) {
    const link = document.createElement('a');
    link.className = 'terminal-link';
    link.href = entry.href;
    link.textContent = entry.text;
    if (/^https?:/i.test(entry.href)) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', `${entry.text} (opens in a new tab)`);
    }
    return link;
  }

  function appendLine(content = '', fallbackTone = '') {
    const entry = typeof content === 'string' ? { text: content, tone: fallbackTone } : content;
    const line = document.createElement('div');
    const tone = entry.tone || fallbackTone;
    line.className = tone ? `terminal-line terminal-line--${tone}` : 'terminal-line';
    if (entry.segments) entry.segments.forEach(segment => line.append(segment.href ? createTerminalLink(segment) : document.createTextNode(segment.text)));
    else if (entry.href) line.append(createTerminalLink(entry));
    else line.textContent = entry.text;
    output.append(line);
  }

  function appendResponse(lines) {
    lines.forEach(line => appendLine(line));
    output.scrollTop = output.scrollHeight;
  }

  function setShortcutsDisabled(disabled) { shortcutButtons.forEach(button => { button.disabled = disabled; }); }
  function cancelShortcutTyping() {
    shortcutToken += 1;
    clearTimeout(shortcutTimer);
    shortcutTimer = null;
    input.readOnly = false;
    setShortcutsDisabled(false);
  }

  function runShortcut(command) {
    cancelShortcutTyping();
    const token = shortcutToken;
    const characters = [...command];
    let index = 0;
    input.value = '';
    input.readOnly = true;
    setShortcutsDisabled(true);
    if (!touchQuery.matches) input.focus();
    const submit = () => {
      if (token !== shortcutToken) return;
      output.replaceChildren();
      input.readOnly = false;
      setShortcutsDisabled(false);
      promptForm.requestSubmit();
    };
    if (motionQuery.matches) {
      input.value = command;
      submit();
      return;
    }
    const typeNextCharacter = () => {
      if (token !== shortcutToken) return;
      input.value += characters[index];
      index += 1;
      if (index >= characters.length) {
        shortcutTimer = window.setTimeout(submit, 90);
        return;
      }
      shortcutTimer = window.setTimeout(typeNextCharacter, 38);
    };
    typeNextCharacter();
  }

  function enterConsole(mode) {
    cancelShortcutTyping();
    output.replaceChildren();
    welcome.classList.add('shell--hidden');
    consolePanel.classList.remove('shell--hidden');
    gaze.stopGaze();
    if (mode === 'manual') appendResponse(responses.help);
    else appendLine("session opened. use a shortcut or type 'help'.", 'muted');
    if (!touchQuery.matches) requestAnimationFrame(() => input.focus());
  }

  function leaveConsole() {
    cancelShortcutTyping();
    input.value = '';
    consolePanel.classList.add('shell--hidden');
    welcome.classList.remove('shell--hidden');
    requestAnimationFrame(() => {
      gaze.updateGazeTarget(gaze.gaze.pointerX, gaze.gaze.pointerY);
      guestButton.focus();
    });
  }

  function runCommand(rawCommand) {
    const command = rawCommand.trim().toLowerCase();
    if (!command) return;
    appendLine(`guest@portfolio:~$ ${rawCommand.trim()}`, 'prompt');
    if (command === 'clear') {
      output.replaceChildren();
      return;
    }
    if (command === 'exit') {
      leaveConsole();
      return;
    }
    if (command === 'projects') setProjectShortcuts(true);
    else setProjectShortcuts(false);

    if (responses[command]) appendResponse(responses[command]);
    else {
      appendLine(`command not found: ${command}`);
      appendLine("type 'help' for available commands.", 'muted');
    }
    output.scrollTop = output.scrollHeight;
  }

  return { enterConsole, runCommand, runShortcut };
}