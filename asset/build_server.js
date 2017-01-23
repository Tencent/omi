var fs = require("fs");

var data = fs.readFileSync("./dist/omi.js","utf-8");

var head = "\
/*!\r\n\
*  Omi v0.1.0 By dntzhang\r\n\
*  Github: https://github.com/AlloyTeam/omi\r\n\
    *  MIT Licensed.\r\n\
*/\r\n\
(function webpackUniversalModuleDefinition(root, factory) {\r\n\
    if(typeof exports === 'object' && typeof module === 'object')\r\n\
        module.exports = global.document ?\r\n\
            factory( global, true ) :\r\n\
            function( w ) {\r\n\
                if ( !w.document ) {\r\n\
                    throw new Error( 'Omi requires a window with a document' );\r\n\
                }\r\n\
                return factory( w );\r\n\
            };\r\n\
    else if(typeof define === 'function' && define.amd)\r\n\
        define('Omi', [], factory);\r\n\
    else if(typeof exports === 'object')\r\n\
        exports['Omi'] = factory();\r\n\
    else\r\n\
        root['Omi'] = factory();\r\n\
})(typeof window !== 'undefined' ? window : this, function( window, noGlobal ) {\r\n\
    var document = window.document;\r\n\
    ";

fs.writeFileSync("./dist/omi.server.js",head+data.replace( data.split("return")[0],""));