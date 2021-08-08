/**
 * @fileOverview
 *
 * 提供浏览器判断的一些字段
 */

define(function() {

    /**
     * @class kity.Browser
     * @catalog core
     * @static
     * @description 提供浏览器信息
     */
    var browser = function() {
        var agent = navigator.userAgent.toLowerCase(), 
            opera = window.opera,
            browser;

        // 浏览器对象
        browser = {
            /**
             * @property platform
             * @description 获取浏览器所在系统,"Win"->Windows;"Mac"->Mac;"Lux"->Linux
             * @type {String}
             */
            platform: (function(navigator) {
                var _p = {
                    "win32": "Win",
                    "macintel": "Mac"
                };
                return _p[navigator.platform.toLowerCase()] || "Lux";
            })(navigator),

            /**
             * 猎豹,区分两种不同内核
             */
            lb: (function(agent) {
                if (~agent.indexOf("lbbrowser")) {
                    return ~agent.indexOf("msie") ? "ie" : "chrome";
                }
                return false;
            })(agent),

            /**
             * 搜狗
             */
            sg: /se[\s\S]+metasr/.test(agent),

            /**
             * 百度
             */
            bd: !!(~agent.indexOf("bidubrowser")),

            /**
             * edge浏览器
             */
            edge: !!(~agent.indexOf("edge")),
            
            /**
             * chrome初始化为false
             * @type {Boolean}
             */
            chrome: false,

            /**
             * @property opera
             * @for kity.Browser
             * @description 判断是否为 Opera 浏览器
             * @type {boolean}
             */
            opera: (!!opera && opera.version),


            /**
             * @property webkit
             * @for kity.Browser
             * @description 判断是否为 Webkit 内核的浏览器
             * @type {boolean}
             */
            webkit: (agent.indexOf(' applewebkit/') > -1),


            /**
             * @property mac
             * @for kity.Browser
             * @description 判断是否为 Mac 下的浏览器
             * @type {boolean}
             */
            mac: (agent.indexOf('macintosh') > -1)
        };
        /**
         * @property ie
         * @for kity.Browser
         * @description 判断是否为 IE 浏览器
         * @type {boolean}
         */
        browser.ie = !browser.lb && /(msie\s|trident.*rv:)([\w.]+)/.test(agent);
        browser.gecko = (navigator.product == 'Gecko' && !browser.webkit && !browser.opera && !browser.ie);

        var version = 0;

        // Internet Explorer 6.0+
        if (browser.ie) {

            version = (agent.match(/(msie\s|trident.*rv:)([\w.]+)/)[2] || 0) * 1;

            browser.ie11Compat = document.documentMode == 11;

            browser.ie9Compat = document.documentMode == 9;

        }

        // Gecko.
        if (browser.gecko) {
            var geckoRelease = agent.match(/rv:([\d\.]+)/);
            if (geckoRelease) {
                geckoRelease = geckoRelease[1].split('.');
                version = geckoRelease[0] * 10000 + (geckoRelease[1] || 0) * 100 + (geckoRelease[2] || 0) * 1;
            }
        }

        // 排除其他chrome内核的浏览器的干扰
        if (/chrome\/(\d+\.\d)/i.test(agent) && !browser.bd && !browser.opera && !browser.lb && !browser.sg && !browser.edge) {
            /**
             * @property chrome
             * @for kity.Browser
             * @description 判断是否为 Chrome 浏览器
             * @type {boolean}
             */
            browser.chrome = +RegExp['\x241'];
        }


        if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)) {
            browser.safari = +(RegExp['\x241'] || RegExp['\x242']);
        }


        // Opera 9.50+
        if (browser.opera)
            version = parseFloat(opera.version());

        // WebKit 522+ (Safari 3+)
        if (browser.webkit)
            version = parseFloat(agent.match(/ applewebkit\/(\d+)/)[1]);

        // 搜狗版本号无从得知
        // 猎豹版本号无从得知

        // 百度
        if (browser.bd) 
            version = parseFloat(agent.match(/bidubrowser\/(\d+)/)[1]);
        
        // Opera 9.50+
        if (browser.opera) 
            version = parseFloat(agent.match(/opr\/(\d+)/)[1]);
        
        // edge
        if (browser.edge) 
            version = parseFloat(agent.match(/edge\/(\d+)/)[1]);
        /**
         * @property version
         * @for kity.Browser
         * @description 获取当前浏览器的版本
         * @type {Number}
         */
        browser.version = version;


        browser.isCompatible = !browser.mobile && (
            (browser.ie && version >= 6) ||
            (browser.gecko && version >= 10801) ||
            (browser.opera && version >= 9.5) ||
            (browser.air && version >= 1) ||
            (browser.webkit && version >= 522) ||
            false);
        return browser;
    }();

    return browser;
});