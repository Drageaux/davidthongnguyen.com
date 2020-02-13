var imagemin = require('imagemin'), // The imagemin module.
  webp = require('imagemin-webp'), // imagemin's WebP plugin.
  outputFolder = './src/assets', // Output folder
  PNGImages = './src/assets/*.png', // PNG images
  JPEGImages = './src/assets/*.jpg'; // JPEG images

imagemin([PNGImages], outputFolder, {
  plugins: [
    webp({
      lossless: true // Losslessly encode images
    })
  ]
});

imagemin([JPEGImages], outputFolder, {
  plugins: [
    webp({
      quality: 65 // Quality setting from 0 to 100
    })
  ]
});
