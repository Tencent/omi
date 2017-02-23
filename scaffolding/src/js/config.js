import config from '../../project.js';

window.Root = window.Root||{ };

Root.CDN = config.cdn;

if(!Root.hasOwnProperty('isDev')) {
    Root.isDev = true;
}