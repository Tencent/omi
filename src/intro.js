/* Nuclear
 * By AlloyTeam http://www.alloyteam.com/
 * Github: https://github.com/AlloyTeam/Nuclear
 * MIT Licensed.
 */
;(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.Nuclear  = factory();
    }
}(this, function () {
