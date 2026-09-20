// Generates the default Open Graph image (PNG) from an inline SVG, using the
// `sharp` dependency Astro already ships. Run: node scripts/make-assets.mjs
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

mkdirSync('public', { recursive: true });

const W = 1200;
const H = 630;

// damped scope trace across the card
let d = 'M 0 400';
for (let x = 0; x <= W; x += 6) {
  const t = x / W;
  const env = Math.min(1, t * 6) * Math.exp(-Math.max(0, t - 0.12) * 2.4);
  const y = 400 - 150 * Math.sin(t * Math.PI * 9) * env;
  d += ` L ${x.toFixed(0)} ${y.toFixed(0)}`;
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="#120F0C"/>
  <g stroke="#2A2118" stroke-width="1">
    ${Array.from({ length: Math.floor(W / 23) }, (_, i) => `<line x1="${i * 23}" y1="0" x2="${i * 23}" y2="${H}"/>`).join('')}
    ${Array.from({ length: Math.floor(H / 23) }, (_, i) => `<line x1="0" y1="${i * 23}" x2="${W}" y2="${i * 23}"/>`).join('')}
  </g>
  <path d="${d}" fill="none" stroke="#FAC775" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>
  <text x="80" y="250" font-family="Inter, sans-serif" font-size="34" fill="#B97A20" letter-spacing="4">CH1 · 5V/div · 1ms/div</text>
  <text x="80" y="320" font-family="Inter, sans-serif" font-size="72" font-weight="700" fill="#F1EFE8">Aniruddha Deshmukh</text>
  <text x="80" y="370" font-family="Inter, sans-serif" font-size="30" fill="#B4B2A9">Embedded systems &amp; hardware engineer</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og-default.png');
console.log('wrote public/og-default.png');
