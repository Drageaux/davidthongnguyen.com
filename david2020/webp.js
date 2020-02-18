const fs = require('fs').promises,
  path = require('path'),
  sharp = require('sharp'),
  imgSrcFolder = './src/img_src', // Output folder
  assetsFolder = './src/assets', // Output folder
  quality = 80;

const runSharp = (inputFolder, fileName, fileExt, outputFolder, width) => {
  // read and resize
  const file = sharp(`${inputFolder}/${fileName}${fileExt}`).resize({ width });
  // generate
  file
    .webp({ quality })
    .toFile(`${outputFolder}/${fileName}-${width}.webp`, console.err);
  if (fileExt === '.jpg' || fileExt === '.jpeg') {
    file
      .jpeg({ quality })
      .toFile(`${outputFolder}/${fileName}-${width}.jpg`, console.err);
  } else if (fileExt === '.png') {
    file
      .png({ quality })
      .toFile(`${outputFolder}/${fileName}-${width}.png`, console.err);
  }
};

const coverImgSpecs = [
  { srcPath: 'cover-photo.jpg', widthList: [400, 600, 800], isFile: true }
];
const projectThumbSpecs = [
  { srcPath: 'project-thumbs', widthList: [200, 300, 450] }
];

const generateResponsiveImages = ({ srcPath, widthList, isFile }) => {
  if (isFile) {
    fs.readFile(`${imgSrcFolder}/${srcPath}`)
      .then(file => {
        const filePath = path.parse(file);
        widthList.forEach(width => {
          console.log(
            `${imgSrcFolder}/${srcPath}`,
            filePath.name,
            filePath.ext,
            `${assetsFolder}/${srcPath}`,
            width
          );
          // runSharp(
          //   `${imgSrcFolder}/${srcPath}`,
          //   filePath.name,
          //   filePath.ext,
          //   `${assetsFolder}/${srcPath}`,
          //   width
          // );
        });
      })
      .catch(console.error);
  } else {
    fs.readdir(`${imgSrcFolder}/${srcPath}`, {
      withFileTypes: true
    })
      .then(data => {
        const files = data.filter(x => x.isFile());
        files.forEach(f => {
          const filePath = path.parse(f.name);
          widthList.forEach(width => {
            console.log(
              `${imgSrcFolder}/${srcPath}`,
              filePath.name,
              filePath.ext,
              `${assetsFolder}/${srcPath}`,
              width
            );
            runSharp(
              `${imgSrcFolder}/${srcPath}`,
              filePath.name,
              filePath.ext,
              `${assetsFolder}/${srcPath}`,
              width
            );
          });
        });
      })
      .catch(console.error);
  }
};

projectThumbSpecs.forEach(generateResponsiveImages);
coverImgSpecs.forEach(generateResponsiveImages);
