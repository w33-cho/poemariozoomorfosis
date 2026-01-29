const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'public/images';
const outputDir = 'public/images';

async function compressImage(inputPath, outputPath, options = {}) {
  try {
    const metadata = await sharp(inputPath).metadata();
    let pipeline = sharp(inputPath);
    if (options.resize) {
      const width = Math.round(metadata.width * 0.5);
      const height = Math.round(metadata.height * 0.5);
      pipeline = pipeline.resize(width, height, { withoutEnlargement: true });
    }
    pipeline = pipeline.webp({ quality: options.quality || 80 });
    await pipeline.toFile(outputPath);
    console.log(`Processed ${inputPath} to ${outputPath}`);
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error);
  }
}

async function processImages() {
  const files = fs.readdirSync(inputDir);
  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {
      const inputPath = path.join(inputDir, file);
      const baseName = file.replace(/\.(jpg|jpeg|png)$/, '');
      // Full size WebP
      const fullOutput = path.join(outputDir, `${baseName}.webp`);
      await compressImage(inputPath, fullOutput, { quality: 80 });
      // Mobile size WebP (50% size)
      const mobileOutput = path.join(outputDir, `${baseName}-mobile.webp`);
      await compressImage(inputPath, mobileOutput, { quality: 70, resize: true });
    }
  }
}

processImages();