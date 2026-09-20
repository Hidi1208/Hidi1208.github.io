// Writes a minimal, valid single-page placeholder CV PDF to public/cv.pdf.
// Replace this file with the real CV export — the path stays /cv.pdf.
import { writeFileSync } from 'node:fs';

const lines = [
  '(Aniruddha Deshmukh CV) Tj',
  'T* (Placeholder - replace public/cv.pdf with the real export.) Tj',
];

const content = `BT /F1 24 Tf 72 720 Td 28 TL (Aniruddha Deshmukh) Tj T* /F1 12 Tf (CV placeholder - replace public/cv.pdf with the real export.) Tj ET`;

const objects = [];
objects[1] = '<< /Type /Catalog /Pages 2 0 R >>';
objects[2] = '<< /Type /Pages /Kids [3 0 R] /Count 1 >>';
objects[3] =
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>';
objects[4] = `<< /Length ${content.length} >>\nstream\n${content}\nendstream`;
objects[5] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>';

let pdf = '%PDF-1.4\n';
const offsets = [];
for (let i = 1; i < objects.length; i++) {
  offsets[i] = pdf.length;
  pdf += `${i} 0 obj\n${objects[i]}\nendobj\n`;
}
const xrefStart = pdf.length;
pdf += `xref\n0 ${objects.length}\n`;
pdf += '0000000000 65535 f \n';
for (let i = 1; i < objects.length; i++) {
  pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

writeFileSync('public/cv.pdf', pdf, 'latin1');
console.log('wrote public/cv.pdf');
