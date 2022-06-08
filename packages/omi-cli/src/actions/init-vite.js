const switchCommand = require("../../utils/switchCommand");
const { options } = require('../../utils/defaultOptions');
function initVite(projectName, option) {
    const cmd = 'init-vite';
    if (option.parent.mirror && typeof option.parent.mirror === 'string') {
        options.mirror = option.parent.mirror;
    }
    switchCommand(cmd, { project: projectName, mirror: options.mirror, language: options.language });
}
module.exports = initVite;