angular.module('ui.colorpicker')
    .provider('localize', function () {

        this.map = {
            'zh-cn': {
                'default_color': '默认颜色',
                'latest_used': '最近使用',
                'theme_color': '主题颜色',
                'standard_color': '标准颜色',
                'more_color': '更多颜色..'
            },
            'en-us': {
                'default_color': 'default',
                'latest_used': 'latest used',
                'theme_color': 'theme color',
                'standard_color': 'standard color',
                'more_color': 'more..'
            }
        };

        this.defaultLang = 'zh-cn';

        this.setDefaultLang = function (lang) {
            var supported = Object.keys(this.map);
            if (supported.indexOf(lang) === -1) {
                console.error('Unsupported language: ', lang, ', please choose in :', supported.join(', '));
                return;
            }

            this.defaultLang = lang;
        };


        this.$get = function () {
            var me = this;

            return {
                get: function (key) {
                    if (me.map[me.defaultLang].hasOwnProperty(key)) {
                        return me.map[me.defaultLang][key];
                    }

                    console.warn('Missing lang pair for : ', key);
                    return '';
                }

            };
        }

    });