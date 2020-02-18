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
    .toFile(`${outputFolder}/${fileName}-${width}.webp`)
    .catch(err =>
      console.error(
        '--------\nERROR CREATING WEBP FILE',
        `${inputFolder}/${fileName}${fileExt}\n`,
        err
      )
    );
  if (fileExt === '.jpg' || fileExt === '.jpeg') {
    file
      .jpeg({ quality })
      .toFile(`${outputFolder}/${fileName}-${width}.jpg`)
      .catch(err =>
        console.error(
          '--------\nERROR CREATING JPG FILE',
          `${inputFolder}/${fileName}${fileExt}\n`,
          err
        )
      );
  } else if (fileExt === '.png') {
    file
      .png({ quality })
      .toFile(`${outputFolder}/${fileName}-${width}.png`)
      .catch(err =>
        console.error(
          '--------\nERROR CREATING PNG FILE',
          `${inputFolder}/${fileName}${fileExt}\n`,
          err
        )
      );
  }
};

const coverImgSpecs = [
  { srcPath: 'cover-photo.jpg', widthList: [400, 600, 800], isFile: true }
];
const meImgSpecs = [{ srcPath: 'me.jpg', widthList: [200], isFile: true }];
const techStackImgSpecs = [
  { srcPath: 'tech-stack.png', widthList: [200, 400, 600], isFile: true }
];
const projectThumbSpecs = [
  { srcPath: 'project-thumbs', widthList: [200, 300, 450] }
];

const generateResponsiveImages = ({ srcPath, widthList, isFile }) => {
  if (isFile) {
    const filePath = path.parse(srcPath);
    widthList.forEach(width => {
      console.log(
        `${imgSrcFolder}/${srcPath}`,
        filePath.name,
        filePath.ext,
        `${assetsFolder}/${srcPath}`,
        width
      );
      runSharp(imgSrcFolder, filePath.name, filePath.ext, assetsFolder, width);
    });
  } else {
    fs.readdir(`${imgSrcFolder}/${srcPath}`, {
      withFileTypes: true
    })
      .then(data => {
        const files = data.filter(x => x.isFile());
        files.forEach(f => {
          const filePath = path.parse(f.name);
          widthList.forEach(width => {
            // console.log(
            //   `${imgSrcFolder}/${srcPath}`,
            //   filePath.name,
            //   filePath.ext,
            //   `${assetsFolder}/${srcPath}`,
            //   width
            // );
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
      .catch(err =>
        console.error('FAILED READING FOLDER:', srcPath, '\n', err)
      );
  }
};

projectThumbSpecs.forEach(generateResponsiveImages);
meImgSpecs.forEach(generateResponsiveImages);
techStackImgSpecs.forEach(generateResponsiveImages);
coverImgSpecs.forEach(generateResponsiveImages);
