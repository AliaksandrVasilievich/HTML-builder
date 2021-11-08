const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'secret-folder');

fs.readdir(dir, { withFileTypes: true}, (err, files) => {
  files.forEach(file => {
    fs.stat(`${dir}/${file.name}`, (err, stats) => {
      if (stats.isFile()) {
        console.log(file.name + ' - ' + Math.round(stats.size/1024) + 'kb');
      }
    });
  });
});