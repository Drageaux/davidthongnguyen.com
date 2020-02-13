var imagemin = require('imagemin'), // The imagemin module.
  webp = require('imagemin-webp'), // imagemin's WebP plugin.
  outputFolder = './src/assets/project-thumbs/', // Output folder
  PNGImages = './src/assets/project-thumbs/*.png', // PNG images
  JPEGImages = './src/assets/project-thumbs/*.jpg'; // JPEG images

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

imagemin([JPEGImages], {
  destination: outputFolder,
  plugins: [
    webp({
      quality: 65 // Quality setting from 0 to 100
    })
  ]
});
