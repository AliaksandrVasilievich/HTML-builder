const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'styles');
const res = path.join(__dirname, 'project-dist/bundle.css');
fs.unlink(res, err => {});
fs.readdir(dir, (err, styles) => {
    styles.forEach(file => {
        if (path.extname(file) === '.css') {
            fs.readFile(path.join(dir, file), 'utf-8', (err, data) =>{
            fs.appendFile(res, data, () => {});
        });
        }
    });
});
