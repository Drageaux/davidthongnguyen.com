var imagemin = require('imagemin'), // The imagemin module.
  webp = require('imagemin-webp'), // imagemin's WebP plugin.
  jpg = require('imagemin-jpegtran'),
  png = require('imagemin-pngquant'),
  assetsFolder = './src/assets', // Output folder
  PNGImages = './src/assets/*.png', // PNG images
  JPEGImages = './src/assets/*.jpg'; // JPEG images

var outputFolders = ['./src/assets', './src/assets/project-thumbs'];
var breakpoints = [576, 768, 992, 1200];

const generateResponsiveImages = async (folder, subFolder, width) => {
  const images = await imagemin([`${folder}/*.{jpg,png}`], {
    destination: `${folder}/${subFolder}`,
    plugins: [
      webp({
        quality: 65, // Quality setting from 0 to 100,
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
  console.log(images);
  images.forEach(({ sourcePath, destinationPath }) => {
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
  generateResponsiveImages(
    `${assetsFolder}/project-thumbs`,
    res.subFolder,
    res.width
  );
});
