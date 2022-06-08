const switchCommand = require("../../utils/switchCommand");
const { options } = require('../../utils/defaultOptions');
function initWeui(projectName, option) {
    const cmd = 'init-weui';
    if (option.parent.mirror && typeof option.parent.mirror === 'string') {
        options.mirror = option.parent.mirror;
    }
    switchCommand(cmd, { project: projectName, mirror: options.mirror, language: options.language });
}
module.exports = initWeui;