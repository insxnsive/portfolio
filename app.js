import { dom, motionQuery } from './scripts/dom.js';
import { initializeAsciiEye } from './scripts/features/ascii-eye.js';
import { createBootController } from './scripts/features/boot.js';
import { createDialogueController } from './scripts/features/dialogue.js';
import { createGazeController } from './scripts/features/gaze.js';
import { createTerminalController } from './scripts/features/terminal.js';
import { bindEvents } from './scripts/events.js';

const dialogue = createDialogueController({ eyeDialogue: dom.eyeDialogue, motionQuery });
const gaze = createGazeController({ eyeSocket: dom.eyeSocket, iris: dom.iris, motionQuery });
const terminal = createTerminalController({ dom, gaze, motionQuery });
const boot = createBootController({ dom, motionQuery, startDialogueCycle: dialogue.startDialogueCycle });

initializeAsciiEye(dom.iris, dom.asciiSource);
bindEvents({ dom, motionQuery, dialogue, gaze, terminal, boot });
gaze.applyGaze();
boot.startBoot();