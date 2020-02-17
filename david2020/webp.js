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
    .toFile(`${outputFolder}/${fileName}-${width}w.webp`, console.err);
  if (fileExt === '.jpg' || fileExt === '.jpeg') {
    file
      .jpeg({ quality })
      .toFile(`${outputFolder}/${fileName}-${width}w.jpg`, console.err);
  } else if (fileExt === '.png') {
    file
      .png({ quality })
      .toFile(`${outputFolder}/${fileName}-${width}w.png`, console.err);
  }
};

const imageSpecs = [{ dir: 'project-thumbs', widthList: [200, 300, 450] }];

const generateResponsiveImages = ({ dir, widthList }) => {
  fs.readdir(`${imgSrcFolder}/${dir}`, { withFileTypes: true })
    .then(data => {
      const files = data.filter(x => x.isFile());
      files.forEach(f => {
        const filePath = path.parse(f.name);
        widthList.forEach(width => {
          console.log(
            `${imgSrcFolder}/${dir}`,
            filePath.name,
            filePath.ext,
            `${assetsFolder}/${dir}`,
            width
          );
          runSharp(
            `${imgSrcFolder}/${dir}`,
            filePath.name,
            filePath.ext,
            `${assetsFolder}/${dir}`,
            width
          );
        });
      });
    })
    .catch(console.error);
};

imageSpecs.forEach(generateResponsiveImages);
