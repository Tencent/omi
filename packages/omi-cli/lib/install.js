var spawn = require('cross-spawn');
var ora = require('ora');
var which = require('which');

module.exports = function (mirror, done){
    var registry, resolved, pkgtool = 'npm';
    mirror = mirror.toLowerCase();
    if (mirror === 'yarn' || mirror === 'cnpm') {
        try {
            resolved = which.sync(mirror);
            if(resolved) pkgtool = mirror;
        } catch (e) {
            console.log(e);
            return secede(spawn(pkgtool, ['install'], { stdio: 'inherit'}));
        }
    } else if(mirror !== 'default'){
        registry = ['--registry', require('./mirror')[mirror]];
    }
    return secede(spawn(pkgtool, registry ? [].concat(['install'], registry) : ['install'], { stdio: 'inherit'}));
};

function secede(line){
    line.on('close', function(code){
        process.exit(code)
    });

    line.on('error', function (reason) {
        console.log('An error occured while executing the NPM command.', reason);
    });
}