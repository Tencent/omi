var fs = require('fs');
var existsSync = fs.existsSync;
var readdirSync = fs.readdirSync;
var rmdirSync = fs.rmdirSync;
var unlinkSync = fs.unlinkSync;
var statSync = fs.statSync;


function isCnFuc(language){
    return language === "cn" ? true : false
}

function emptyFs(path) {
    var files = [];
    var dir = [];
    if(existsSync(path)){
        files = readdirSync(path);
        files.forEach(function (file, index) {
            var curPath = path + "/" + file;
            if(statSync(curPath).isDirectory()){
                emptyFs(curPath)
            } else {
                unlinkSync(curPath);
            }
        });
        dir = readdirSync(path);
        dir.forEach(function (dirName, index) {
            rmdirSync(path + "/" + dirName)
        })
    }
}

module.exports = {
    isCnFuc: isCnFuc,
    emptyFs: emptyFs
};