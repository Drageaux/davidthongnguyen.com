var imagemin = require('imagemin'), // The imagemin module.
  webp = require('imagemin-webp'), // imagemin's WebP plugin.
  outputFolder = './src/assets/', // Output folder
  PNGImages = './src/assets/*.png', // PNG images
  JPEGImages = './src/assets/*.jpg'; // JPEG images

(async () => {
  const pngfiles = await imagemin([PNGImages], {
    destination: outputFolder,
    plugins: [
      webp({
        quality: 65 // Quality setting from 0 to 100
      })
    ]
  });
  console.log(pngfiles);
})();

async () => {
  const jpgFiles = imagemin([JPEGImages], {
    destination: outputFolder,
    plugins: [
      webp({
        quality: 65 // Quality setting from 0 to 100
      })
    ]
  });
  console.log(jpgFiles);
};
