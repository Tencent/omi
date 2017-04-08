var spawn = require('cross-spawn');
var ora = require('ora');

module.exports = function (mirror, done){
    var registry;
    if(mirror !== 'default'){
        registry = ['--registry', require('./mirror')[mirror]];
    }
    secede(spawn('npm', registry ? [].concat(['install'], registry) : ['install'], { stdio: 'inherit'}));
};

function secede(line){
    line.on('close', function(code){
        process.exit(code)
    })

    line.on('error', function (reason) {
        console.log('An error occured while executing the NPM command.', reason);
    });
}