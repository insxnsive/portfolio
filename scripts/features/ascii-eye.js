import { sourceEyeFallback, movingAsciiEye } from '../data/eye.js';

function glyphTone(character) {
  if (character === ' ') return 'glyph--void';
  if (character === '@') return 'glyph--pupil';
  if (character === '.' || character === ':') return 'glyph--shadow';
  if (character === '-' || character === '=') return 'glyph--low';
  if (character === '+') return 'glyph--mid';
  if (character === '*' || character === '#') return 'glyph--bright';
  return 'glyph--white';
}

function renderGlyphGrid(container, lines) {
  const columns = Math.max(...lines.map(line => line.length));
  const fragment = document.createDocumentFragment();
  container.replaceChildren();
  container.style.setProperty('--columns', columns);
  container.style.setProperty('--rows', lines.length);
  lines.forEach(line => {
    line.padEnd(columns).split('').forEach(character => {
      const glyph = document.createElement('span');
      glyph.className = `ascii-glyph ${glyphTone(character)}`;
      glyph.textContent = character === ' ' ? '\u00a0' : character;
      fragment.append(glyph);
    });
  });
  container.append(fragment);
}

function appendIrisGlints(iris) {
  const largeGlint = document.createElement('span');
  const smallGlint = document.createElement('span');
  largeGlint.className = 'ascii-glint ascii-glint--large';
  largeGlint.textContent = '#';
  smallGlint.className = 'ascii-glint ascii-glint--small';
  smallGlint.textContent = '.';
  iris.append(largeGlint, smallGlint);
}

function filterMovingEye(sourceLines) {
  return sourceLines.map((line, row) => line.split('').map((character, column) => {
    const insideIris = Math.pow((column - 12) / 7.1, 2) + Math.pow((row - 3.5) / 3.25, 2) < 1;
    return insideIris ? ' ' : character;
  }).join(''));
}

function extractSourceEye(source) {
  const lines = source.replace(/\r/g, '').split('\n');
  if (lines.length < 18) return sourceEyeFallback;
  return lines.slice(10, 18).map(line => line.padEnd(47).slice(22, 47));
}

export function initializeAsciiEye(iris, asciiSource) {
  renderGlyphGrid(iris, movingAsciiEye);
  appendIrisGlints(iris);
  renderGlyphGrid(asciiSource, filterMovingEye(sourceEyeFallback));
  fetch('assets/ascii-art.txt')
    .then(response => {
      if (!response.ok) throw new Error(`ASCII source returned ${response.status}`);
      return response.text();
    })
    .then(source => renderGlyphGrid(asciiSource, filterMovingEye(extractSourceEye(source))))
    .catch(() => {
      // The embedded crop keeps the eye usable when the page is opened without a local server.
    });
}