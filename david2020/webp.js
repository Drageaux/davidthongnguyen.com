var imagemin = require('imagemin'), // The imagemin module.
  webp = require('imagemin-webp'), // imagemin's WebP plugin.
  jpg = require('imagemin-jpegtran'),
  png = require('imagemin-pngquant'),
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

const generateWebp = async (folder, subFolder, width) => {
  const webpImages = await imagemin([`${folder}/*.{jpg,png}`], {
    destination: `${folder}/${subFolder}`,
    plugins: [
      webp({
        quality: 100, // Quality setting from 0 to 100,
        resize: {
          width,
          height: 0
        }
      }),
      png({
        quality: 0.65
      }),
      jpg({
        quality: 0.65
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

var projectThumbResolutions = [
  { subFolder: 'sm', width: 200 },
  { subFolder: 'md', width: 300 },
  { subFolder: 'lg', width: 450 }
];
projectThumbResolutions.forEach(res => {
  generateWebp(`${assetsFolder}/project-thumbs`, res.subFolder, res.width);
});
// default/pure-mobile < 350px = 200px
// xs/big-mobile 350-576px = 450px
// sm 576+ = 250px
// md 768+ = 325px
// lg 992+ = 410px
// xl 1200+ = 260px

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
