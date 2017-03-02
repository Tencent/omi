let config = {
    isMobile: false,
    mds: {
        cn: ['components', 'communication'],
        en: ['communication']
    },
    menus: {
        cn: [
            {
                active: true,
                title: '快速开始',
                currentIndex:0,
                list: [
                    {
                        'name': '组件',
                        md: 'components',
                        highlight: {
                            2: '3,9,34'
                        }
                    },
                    {
                        'name': '组件通讯',
                        md: 'communication',
                        highlight: {
                            0: '34',
                            1: '5,11'
                        }
                    }
                ]
            }
        ],
        en: [
            {
                title: 'QUICK START',
                currentIndex:0,
                list: [
                    {'name': 'Communication', md: 'communication'}

                ]
            }
        ]
    }

}

const browser={
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return {//移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
}

if(browser.versions.mobile || browser.versions.ios || browser.versions.android ||
    browser.versions.iPhone || browser.versions.iPad){
    config.isMobile = true;
}
export default config;