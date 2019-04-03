"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Adapters;
(function (Adapters) {
    Adapters["weapp"] = "weapp";
    Adapters["swan"] = "swan";
    Adapters["alipay"] = "alipay";
    Adapters["quickapp"] = "quickapp";
    Adapters["tt"] = "tt";
})(Adapters = exports.Adapters || (exports.Adapters = {}));
const weixinAdapter = {
    if: 'wx:if',
    else: 'wx:else',
    elseif: 'wx:elif',
    for: 'wx:for',
    forItem: 'wx:for-item',
    forIndex: 'wx:for-index',
    key: 'wx:key',
    type: "weapp" /* weapp */
};
const swanAdapter = {
    if: 's-if',
    else: 's-else',
    elseif: 's-elif',
    for: 's-for',
    forItem: 's-for-item',
    forIndex: 's-for-index',
    key: 's-key',
    type: "swan" /* swan */
};
const alipayAdapter = {
    if: 'a:if',
    else: 'a:else',
    elseif: 'a:elif',
    for: 'a:for',
    forItem: 'a:for-item',
    forIndex: 'a:for-index',
    key: 'a:key',
    type: "alipay" /* alipay */
};
const ttAdapter = {
    if: 'tt:if',
    else: 'tt:else',
    elseif: 'tt:elif',
    for: 'tt:for',
    forItem: 'tt:for-item',
    forIndex: 'tt:for-index',
    key: 'tt:key',
    type: "tt" /* tt */
};
exports.Adapter = weixinAdapter;
function setAdapter(adapter) {
    switch (adapter.toLowerCase()) {
        case "swan" /* swan */:
            exports.Adapter = swanAdapter;
            break;
        case "alipay" /* alipay */:
            exports.Adapter = alipayAdapter;
            break;
        case "tt" /* tt */:
            exports.Adapter = ttAdapter;
            break;
        default:
            exports.Adapter = weixinAdapter;
            break;
    }
}
exports.setAdapter = setAdapter;
//# sourceMappingURL=adapter.js.map