const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname,'files');
const res = path.join(__dirname, 'files-copy');

fs.mkdir(res, { recursive: true }, () => {
fs.readdir(dir, (err, data) => {
    data.forEach(file => {
        fs.copyFile(path.join(__dirname, `files/${file}`), path.join(__dirname, `files-copy/${file}`), () => {});
        fs.readdir(res, (err, arr) => {
            arr.forEach(cloneFile => {
                if (!data.includes(cloneFile)) {
                    fs.unlink(`${res}/${cloneFile}`, () => {})
                }
            })
        })
    });
});
});