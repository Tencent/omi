var spawn = require('cross-spawn');
var ora = require('ora');

module.exports = function (args, done){
    var common = spawn('npm', args, { stdio: 'inherit' });
    common.on('close', function () {
        done();
        process.exit(0);
    });
    common.on('error', function (reason) {
        console.log('An error occured while executing the NPM command.', reason);
    });
};