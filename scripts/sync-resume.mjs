import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const sourcePath = path.join(rootDir, 'docs', 'Shripad_Balang_Resume.pdf');
const publicDir = path.join(rootDir, 'public');
const targetPath = path.join(publicDir, 'resume.pdf');

console.log('🔄 Checking resume sync...');

if (!fs.existsSync(sourcePath)) {
  console.error(`❌ Source resume not found at: ${sourcePath}`);
  process.exit(1);
}

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.copyFileSync(sourcePath, targetPath);

const sourceStat = fs.statSync(sourcePath);
const targetStat = fs.statSync(targetPath);

if (sourceStat.size === targetStat.size) {
  console.log(`✅ Resume synced successfully: docs/Shripad_Balang_Resume.pdf -> public/resume.pdf (${targetStat.size} bytes)`);
} else {
  console.error('❌ Resume file size mismatch after copy!');
  process.exit(1);
}
