const fs = require('fs').promises,
  path = require('path'),
  sharp = require('sharp'),
  imgSrcFolder = './src/img_src', // Output folder
  assetsFolder = './src/assets', // Output folder
  quality = 80;

const runSharp = (inputFolder, fileName, fileExt, outputFolder, width) => {
  const file = sharp(`${inputFolder}/${fileName}${fileExt}`).resize({ width });
  file
    .webp({ quality })
    .toFile(`${inputFolder}/${fileName}-${width}w.webp`, console.err);
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
  widthList.forEach(width => {
    fs.readdir(`${imgSrcFolder}/${dir}`, { withFileTypes: true }).then(data => {
      const files = data.filter(x => x.isFile());
      files.forEach(f => {
        const filePath = path.parse(f.name);
        console.log(
          `${imgSrcFolder}/${dir}`,
          filePath.name,
          filePath.ext,
          `${assetsFolder}/${dir}`,
          width
        );
        runSharp(
          `${assetsFolder}/${dir}`,
          filePath.name,
          filePath.ext,
          `${assetsFolder}/${dir}`,
          width
        );
      });
    });
  });
};

imageSpecs.forEach(generateResponsiveImages);
