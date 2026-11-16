const portfolioRepositoryUrl = 'https://github.com/insxnsive/portfolio';
const portfolioRepositoryLine = portfolioRepositoryUrl
  ? { text: 'repository  github.com/insxnsive/portfolio', href: portfolioRepositoryUrl }
  : { text: 'The repository URL is pending.', tone: 'muted' };

const rsvpProjectResponse = [
  { text: 'RSVP PT-BR / 01', tone: 'accent' },
  '',
  'Purpose: Manage event attendance from invitation to entry check.',
  'The admin screen creates events and imports guest lists.',
  'The public page lets a guest find an invitation and confirm attendance.',
  'The server signs a QR code for each confirmed guest.',
  'The check-in screen accepts manual entry and browser camera scans.',
  'Preact renders the client. Fastify serves the API.',
  'MongoDB stores events, guests, confirmations, and check-in data.',
  'TypeScript shares data types. Vitest checks API and UI behavior.',
  { text: 'source      github.com/insxnsive/rsvp-ptbr', href: 'https://github.com/insxnsive/rsvp-ptbr' }
];

const typingTimeProjectResponse = [
  { text: 'TypingTime / 02', tone: 'accent' },
  '',
  'Purpose: Provide a free competitive typing game.',
  'React renders the game interface.',
  'Tailwind CSS supplies the theme system and UI styles.',
  'Express serves the application API.',
  'TypeScript checks the application code. CommonJS loads server modules.',
  'MongoDB stores player records, scores, and leaderboard data.',
  'The game includes a leaderboard, score system, anti-cheat checks, and themes.',
  { text: 'website     typingtime.app', href: 'https://typingtime.app' }
];

const portfolioProjectResponse = [
  { text: 'Terminal Portfolio / 03', tone: 'accent' },
  '',
  'Purpose: Present selected work through an interactive terminal.',
  'The page uses HTML, CSS, and JavaScript.',
  'A glyph eye follows the pointer with CSS transforms.',
  'A boot screen starts the local guest session.',
  'The console accepts typed commands and shortcut commands.',
  "This portfolio was inspired in mathdroid's personal site.",
  {
    segments: [
      { text: 'All image rights reserved of the eye figure goes for the ' },
      { text: 'Lasik Vision Institute', href: 'https://www.lasikvisioninstitute.com/anatomy-of-the-human-eye/' },
      { text: '.' }
    ]
  },
  portfolioRepositoryLine
];

const aerochatProjectResponse = [
  { text: 'Aerochat / 04', tone: 'accent' },
  '',
  'Purpose: Rebuild a Windows chat client in the Windows Live Messenger 2009 style.',
  'The desktop client is WPF on .NET 8, and runs offline on demo data.',
  'A separate connectivity layer handles auth, realtime events, conversations, and calls.',
  'The server is ASP.NET Core: REST history, a WebSocket gateway, OAuth login, call signaling, and a GIF proxy.',
  'One-to-one voice calls are in progress. The project is early, not a release.',
  'It started from an older archived Discord client, and the backend is being replaced.',
  { text: 'source      github.com/insxnsive/aerochat', href: 'https://github.com/insxnsive/aerochat' }
];

const torrentIndexerProjectResponse = [
  { text: 'CLI Torrent Indexer / 05', tone: 'accent' },
  '',
  'Purpose: Find a game repack from the command line and download it.',
  'TypeScript on Node 20. Two batch files install and run it.',
  'It scrubs FitGirl Repacks for the game name, pulls the magnet link, and hands it to WebTorrent.',
  'It also ships eight JSON source lists for other indexers.',
  'Built as a study project, inspired by Hydra Launcher.',
  { text: 'source      github.com/insxnsive/cli-torrent-indexer', href: 'https://github.com/insxnsive/cli-torrent-indexer' }
];

const lavenzaProjectResponse = [
  { text: 'Lavenza / 06', tone: 'accent' },
  '',
  'Purpose: A Discord chatbot that can act, not only talk.',
  'Node talks to the Discord API and answers when it is mentioned.',
  'Replies come from Google Gemini through the @google/genai SDK.',
  'The shell runner lets the model execute local commands, which is where the privileges come from.',
  'A second module generates images.',
  { text: 'source      github.com/insxnsive/lavenza', href: 'https://github.com/insxnsive/lavenza' }
];

const badAppleProjectResponse = [
  { text: 'Bad Apple Favicon / 07', tone: 'accent' },
  '',
  'Purpose: Play Bad Apple inside the browser tab icon.',
  'A hidden muted video feeds a 32x32 canvas.',
  'Each frame is converted to pure black and white and swapped in as the favicon.',
  'The icon is a data URL rewritten on every frame, so the tab animates.',
  'The video itself is left out of the repository for copyright reasons.',
  { text: 'source      github.com/insxnsive/bad-apple-favicon', href: 'https://github.com/insxnsive/bad-apple-favicon' }
];

const backupManagerProjectResponse = [
  { text: 'FS Backup Manager / 08', tone: 'accent' },
  '',
  'Purpose: Copy chosen folders to a backup drive and skip what did not change.',
  'Node with a JSON config that lists the folders to watch.',
  'Copying walks each directory recursively and rebuilds the structure at the target.',
  'A cache file records what was already copied, so repeat runs only touch new and modified files.',
  'Batch files start and stop the manager.',
  { text: 'source      github.com/insxnsive/fs-backup-manager', href: 'https://github.com/insxnsive/fs-backup-manager' }
];

const fpsUnlockerProjectResponse = [
  { text: 'Wuthering Waves FPS Unlocker / 09', tone: 'accent' },
  '',
  'Purpose: Raise the PC frame cap from 60 to 120.',
  'Python and batch, packaged as a Windows executable with a frame limit picker.',
  'It edits the game LocalStorage.db instead of patching memory.',
  'Tested on game version 1.0.2. Changing graphics settings resets the cap.',
  { text: 'source      github.com/insxnsive/Wuthering-Waves-FPS-Unlocker', href: 'https://github.com/insxnsive/Wuthering-Waves-FPS-Unlocker' }
];

const ibmrProjectResponse = [
  { text: 'IBMR C Exercises / 10', tone: 'accent' },
  '',
  'Purpose: Teaching material for students learning C.',
  'The exercises are sorted by topic, from hello world and types up to pointers and structs.',
  'Written for the Information Systems course at IBMR, open to students from other schools.',
  'The companion docs site runs on Astro with Starlight.',
  { text: 'source      github.com/insxnsive/ibmr-c-exercises', href: 'https://github.com/insxnsive/ibmr-c-exercises' },
  { text: 'docs        github.com/insxnsive/ibmrc-docs', href: 'https://github.com/insxnsive/ibmrc-docs' }
];

const youtubeReplicaProjectResponse = [
  { text: 'YouTube Replica / 11', tone: 'accent' },
  '',
  'Purpose: Recreate the YouTube interface as a front-end exercise.',
  'HTML, CSS, and JavaScript, with React for the components.',
  'It follows the layout rather than copying it exactly.',
  { text: 'source      github.com/insxnsive/youtube-replica', href: 'https://github.com/insxnsive/youtube-replica' }
];

const archiveProjectResponse = [
  { text: 'Archive / 12', tone: 'accent' },
  '',
  'Smaller tools from earlier years. Every line opens its repository.',
  '',
  { text: 'twitter-tweeter       Node bot that posts a set tweet at chosen hours', href: 'https://github.com/insxnsive/twitter-tweeter' },
  { text: 'gray-bd-discord-theme CSS theme for BetterDiscord, in Firefox gray', href: 'https://github.com/insxnsive/gray-bd-discord-theme' },
  { text: 'calculadora-python    calculator in Python 3.10, shipped with a start.bat', href: 'https://github.com/insxnsive/calculadora-python' },
  { text: 'cpp-basics            C++ examples written for VoidStore colleagues', href: 'https://github.com/insxnsive/cpp-basics' }
];

const projectResponse = [
  { text: 'projects', tone: 'accent' },
  '',
  '01 / RSVP PT-BR           event RSVP and check-in application',
  '02 / TypingTime            free competitive typing game',
  '03 / Terminal Portfolio    interactive ASCII portfolio',
  '04 / Aerochat              Windows Live Messenger style chat client',
  '05 / Torrent Indexer       CLI game search and download tool',
  '06 / Lavenza               Discord chatbot with shell access',
  '07 / Bad Apple Favicon     video rendered into the tab icon',
  '08 / FS Backup Manager     incremental folder backups in Node',
  '09 / WW FPS Unlocker       frame cap tool for Wuthering Waves',
  '10 / IBMR C Exercises      C course material and docs site',
  '11 / YouTube Replica       YouTube interface rebuild',
  '12 / Archive               smaller tools from earlier years',
  '',
  'Use "projects 01" through "projects 12" for details.'
];

export const responses = {
  help: [
    { text: 'available commands', tone: 'accent' },
    '',
    'projects       list all projects',
    'projects 04    open one project, from 01 to 12',
    'work           alias for projects',
    'about          read a short introduction',
    'contact        view contact links',
    'clear          clear the terminal',
    'exit           return to the portrait'
  ],
  projects: projectResponse,
  'projects 01': rsvpProjectResponse,
  'projects 1': rsvpProjectResponse,
  'projects 02': typingTimeProjectResponse,
  'projects 2': typingTimeProjectResponse,
  'projects 03': portfolioProjectResponse,
  'projects 3': portfolioProjectResponse,
  'projects 04': aerochatProjectResponse,
  'projects 4': aerochatProjectResponse,
  'projects 05': torrentIndexerProjectResponse,
  'projects 5': torrentIndexerProjectResponse,
  'projects 06': lavenzaProjectResponse,
  'projects 6': lavenzaProjectResponse,
  'projects 07': badAppleProjectResponse,
  'projects 7': badAppleProjectResponse,
  'projects 08': backupManagerProjectResponse,
  'projects 8': backupManagerProjectResponse,
  'projects 09': fpsUnlockerProjectResponse,
  'projects 9': fpsUnlockerProjectResponse,
  'projects 10': ibmrProjectResponse,
  'projects 11': youtubeReplicaProjectResponse,
  'projects 12': archiveProjectResponse,
  work: projectResponse,
  about: [
    { text: 'about', tone: 'accent' },
    '',
    "Hey, I'm Nate.",
    'Fullstack Developer focused on building reliable, scalable web applications.',
    'Currently studying Information Systems at IBMR.',
    'Expertise: Node.js backends.',
    '',
    { text: 'github      github.com/insxnsive', href: 'https://github.com/insxnsive' },
    { text: 'linkedin    linkedin.com/in/insxnsive', href: 'https://www.linkedin.com/in/insxnsive/' }
  ],
  contact: [
    { text: 'contact', tone: 'accent' },
    '',
    { text: 'email       insxnsive@proton.me', href: 'mailto:insxnsive@proton.me' },
    { text: 'github      github.com/insxnsive', href: 'https://github.com/insxnsive' },
    { text: 'linkedin    linkedin.com/in/insxnsive', href: 'https://www.linkedin.com/in/insxnsive/' }
  ]
};
