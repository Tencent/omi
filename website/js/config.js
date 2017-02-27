let config = {
    isMobile: false,
    mds: {
        cn: ['installation', 'hello_world', 'components', 'communication', 'lifecycle', 'events', 'condition', 'loop', 'form', 'inherit', 'template', 'get_dom', 'plugin', 'thinking_in_omi', 'pr_env', 'pr_hello'],
        en: ['installation', 'hello_world', 'components', 'communication', 'lifecycle', 'events', 'condition', 'loop', 'form', 'inherit', 'template', 'get_dom', 'plugin']
    },
    menus: {
        cn: [
            {
                active: true,
                title: '快速开始',
                currentIndex:0,
                list: [
                {'name': '安装', md: 'installation'},
                {
                    'name': 'Hello World',
                    md: 'hello_world',
                    //1,5-6,8
                    highlight: {
                        2: '6',
                        5: '4,6'
                    }
                },
                {
                    'name': '组件',
                    md: 'components',
                    highlight: {
                        2: '3,9,34'
                    }
                },
                {
                    'name': '组件通讯', md: 'communication',
                    highlight: {
                        0: '34',
                        1: '5,11'
                    }
                },
                {'name': '生命周期', md: 'lifecycle'},
                {'name': '事件处理', md: 'events'},
                {'name': '条件判断', md: 'condition'},
                {
                    'name': '循环遍历', md: 'loop',
                    highlight: {
                        1: '9-11'
                    }
                },
                {'name': '表单', md: 'form'},
                {'name': '继承', md: 'inherit'},
                //{'name': '容器系统'},
                {'name': '模板切换', md: 'template'},
                {'name': '获取DOM节点', md: 'get_dom'},
                {'name': '插件体系', md: 'plugin'},
                //{'name': '服务器端渲染'},
                {'name': 'Omi的理念', md: 'thinking_in_omi'}
            ]
            }
        ],
        en: [
            {
                title: 'QUICK START',
                currentIndex:0,
                list: [
                {'name': 'Installation', md: 'installation'},
                {'name': 'Hello World', md: 'hello_world'},
                {'name': 'Components', md: 'components'},
                {'name': 'Communication', md: 'communication'},
                {'name': 'Lifecycle', md: 'lifecycle'},
                {'name': 'Handling Events', md: 'events'},
                {'name': 'Conditional Rendering', md: 'condition'},
                {'name': 'Loop', md: 'loop'},
                //{'name': 'Lists and Keys'},
                {'name': 'Forms', md: 'form'},
                {'name': 'Inheritance', md: 'inherit'},
                {'name': 'Templates', md: 'template'},
                {'name': 'Get DOM', md: 'get_dom'},
                {'name': 'Plugin', md: 'plugin'}
                //{'name': 'Sever-side Rendering'},
                //{'name': 'Thinking In Omi'}
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