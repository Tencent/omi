const switchCommand = require("../../utils/switchCommand");
const { options } = require('../../utils/defaultOptions');
function initMp(projectName, option) {
    const cmd = 'init-mp';
    if (option.parent.mirror && typeof option.parent.mirror === 'string') {
        options.mirror = option.parent.mirror;
    }
    switchCommand(cmd, { project: projectName, mirror: options.mirror, language: options.language });
}
module.exports = initMp;