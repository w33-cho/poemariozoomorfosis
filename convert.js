const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = 'public/images';

fs.readdirSync(imagesDir).forEach(file => {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    const input = path.join(imagesDir, file);
    const output = path.join(imagesDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    sharp(input).webp().toFile(output).then(() => {
      console.log(`Converted ${file} to ${path.basename(output)}`);
    }).catch(err => {
      console.error(`Error converting ${file}:`, err);
    });
  }
});