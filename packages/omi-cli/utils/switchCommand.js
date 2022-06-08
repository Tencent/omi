const { resolve } = require('path');
function switchCommand(cmd, args) {
    if (cmd) {
        require(resolve(__dirname, ('../lib/' + cmd)))(args);
    } else {
        setTimeout(program.help, 0);
    }
}
module.exports = switchCommand;