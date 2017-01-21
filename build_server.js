var fs = require("fs");

var data = fs.readFileSync("./dist/omi.js","utf-8");
console.log(data);

fs.writeFileSync("./dist/data.js","Ã¿Ìì±»³ó¿Þ");