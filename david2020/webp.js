var imagemin = require('imagemin'), // The imagemin module.
  webp = require('imagemin-webp'), // imagemin's WebP plugin.
  jpg = require('imagemin-jpegtran'),
  png = require('imagemin-pngquant'),
  fs = require('fs').promises,
  path = require('path'),
  sharp = require('sharp'),
  imgSrcFolder = './src/img_src', // Output folder
  assetsFolder = './src/assets', // Output folder
  PNGImages = './src/assets/*.png', // PNG images
  JPEGImages = './src/assets/*.jpg'; // JPEG images

var outputFolders = ['./src/assets', './src/assets/project-thumbs'];
var breakpoints = [576, 768, 992, 1200];

const generateResponsiveImages = async (folder, subFolder, width) => {
  const webpImages = await imagemin([`${folder}/*.{jpg,png}`], {
    destination: `${folder}/${subFolder}`,
    plugins: [
      webp({
        quality: 65, // Quality setting from 0 to 100,
        resize: {
          width,
          height: 0
        }
      })
    ]
  }).catch(console.error);

  const jpgImages = await imagemin([`${folder}/*.jpg`], {
    destination: `${folder}/${subFolder}`,
    plugins: [
      jpg({
        quality: [0.55, 0.7]
      })
    ]
  }).catch(console.error);

  const pngImages = await imagemin([`${folder}/*.png`], {
    destination: `${folder}/${subFolder}`,
    plugins: [
      png({
        quality: [0.55, 0.7]
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
  console.log(pngImages);
};

// sharp(`${folder}.png`)
//   .resize({ width })
//   .toBuffer()
//   .then(data => {
//     // 100 pixels wide, auto-scaled height
//   });

const runSharp = (inputFolder, fileName, fileExt, outputFolder, width) => {
  const file = sharp(`${inputFolder}/${fileName}${fileExt}`).resize({ width });
  file.toFile(`${inputFolder}/${fileName}-${width}w.webp`, console.err);
  if (fileExt === '.jpg' || fileExt === '.jpeg') {
    file
      .jpeg({ quality: 65 })
      .toFile(`${outputFolder}/${fileName}-${width}w.jpg`, console.err);
  } else if (fileExt === '.png') {
    file
      .png({ quality: 65 })
      .toFile(`${outputFolder}/${fileName}-${width}w.png`, console.err);
  }
};

var projectThumbResolutions = [
  { subFolder: 'sm', width: 200 },
  { subFolder: 'md', width: 300 },
  { subFolder: 'lg', width: 450 }
];
projectThumbResolutions.forEach(res => {
  fs.readdir(`${imgSrcFolder}/project-thumbs`, { withFileTypes: true }).then(
    data => {
      const files = data.filter(x => x.isFile());
      console.log(files);
      files.forEach(f => {
        const filePath = path.parse(f.name);
        console.log(
          `${imgSrcFolder}/project-thumbs`,
          filePath.name,
          filePath.ext,
          `${assetsFolder}/project-thumbs`,
          res.width
        );
        runSharp(
          `${assetsFolder}/project-thumbs`,
          filePath.name,
          filePath.ext,
          `${assetsFolder}/project-thumbs`,
          res.width
        );
      });
    }
  );
  // generateResponsiveImages(
  //   `${assetsFolder}/project-thumbs`,
  //   res.subFolder,
  //   res.width
  // );
});
