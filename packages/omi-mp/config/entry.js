let fs = require('fs'),
    fileList = [];


if (typeof String.prototype.endsWith != 'function') {
    String.prototype.endsWith = function (suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}

function walk(path) {
    let dirList = fs.readdirSync(path);
    dirList.forEach(function (item) {
        if (!fs.statSync(path + '/' + item).isDirectory()) {
            if (item.endsWith('\.js')) {
                fileList.push(item.substr(0, item.length - 3));
            }
        } else {
            //walk(path + '/' + item);
        }
    });
}

walk('./src');



module.exports = fileList;