var imagemin = require('imagemin'), // The imagemin module.
  webp = require('imagemin-webp'), // imagemin's WebP plugin.
  assetsFolder = './src/assets', // Output folder
  PNGImages = './src/assets/*.png', // PNG images
  JPEGImages = './src/assets/*.jpg'; // JPEG images

var outputFolders = ['./src/assets', './src/assets/project-thumbs'];
var breakpoints = [576, 768, 992, 1200];

// imagemin([`${folder}/*.{jpg,png}`], folder, {
//   use: [
//     webp({
//       quality: 65 // Quality setting from 0 to 100
//     })
//   ]
// }).then(img => {
//   console.log(`image: ${img.sourcePath} output to ${img.destinationPath}`);
// });

const generateWebp = async folder => {
  const webpImages = await imagemin([`${folder}/*.{jpg,png}`], {
    destination: folder,
    plugins: [
      webp({
        quality: 65 // Quality setting from 0 to 100
      })
    ]
  }).catch(console.error);
  // console.log(`image: ${img.sourcePath} output to ${img.destinationPath}`);
  webpImages.forEach(({ sourcePath, destinationPath }) => {
    console.log(
      `sourcePath: ${sourcePath}\ndestinationPath: ${destinationPath}\n-------`
    );
  });
  console.log('DONE!');
};

generateWebp(`${assetsFolder}/project-thumbs`);

// (async () => {
//   const pngfiles = await imagemin([PNGImages], {
//     destination: outputFolder,
//     plugins: [
//       webp({
//         quality: 65 // Quality setting from 0 to 100
//       })
//     ]
//   });
// console.log(pngfiles);
// // })();

// async () => {
//   const jpgFiles = imagemin([JPEGImages], {
//     destination: outputFolder,
//     plugins: [
//       webp({
//         quality: 65 // Quality setting from 0 to 100
//       })
//     ]
//   });
//   console.log(jpgFiles);
// };
