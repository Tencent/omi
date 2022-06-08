const switchCommand = require("../../utils/switchCommand");
const { options } = require('../../utils/defaultOptions');
function initComponent(projectName, option) {
    const cmd = 'init-component';
    if (option.parent.mirror && typeof option.parent.mirror === 'string') {
        options.mirror = option.parent.mirror;
    }
    switchCommand(cmd, { project: projectName, mirror: options.mirror, language: options.language });
}
module.exports = initComponent;