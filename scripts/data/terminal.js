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

const projectResponse = [
  { text: 'projects', tone: 'accent' },
  '',
  '01 / RSVP PT-BR          event RSVP and check-in application',
  '02 / TypingTime           free competitive typing game',
  '03 / Terminal Portfolio   interactive ASCII portfolio',
  '',
  'Use "projects 01", "projects 02", or "projects 03" for details.'
];

export const responses = {
  help: [
    { text: 'available commands', tone: 'accent' },
    '',
    'projects       view selected projects',
    'projects 01    view RSVP PT-BR details',
    'projects 02    view TypingTime details',
    'projects 03    view terminal portfolio details',
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
