/**
 * 调色板
 */

define(function(require, exports, module) {

    //标准color
    var StandardColor = require('./standardcolor'),

        Color = require('./color'),

        Utils = require('../core/utils');

    var Palette = require('../core/class').createClass('Palette', {

        constructor: function() {
            this.color = {};
        },

        /*
         * 获取颜色名称所对应的颜色值的Color对象
         * @param name 需要获取的颜色名称
         * @return 对应颜色名称的color对象， 如果未找到对应的名称， 则返回null
         */
        get: function(name) {

            var colorValue = this.color[name] ||
                StandardColor.EXTEND_STANDARD[name] ||
                StandardColor.COLOR_STANDARD[name] || '';

            if (colorValue) {
                return new Color(colorValue);
            }

            return null;

        },

        /*
         * 获取给定名称的颜色的hex值表示
         * @param name 需要获取的颜色名称
         * @return 如果找到对应的名称， 则返回该名称所对应的hex格式的值， 否则， 返回一个空字符串
         */
        getColorValue: function(name) {

            return this.color[name] || StandardColor.EXTEND_STANDARD[name] || StandardColor.COLOR_STANDARD[name] || '';

        },

        /*
         * 向调色板实例添加自己独有的颜色名称，对已存在的颜色名称， 将会覆盖掉
         * @param name 新添加的颜色名称
         * @param value 新添加的颜色名称所对应的值， 可以是一个合法的颜色字符串或者是一个color对象
         * @return 新添加的颜色的值
         */
        add: function(name, value) {

            if (typeof value === 'string') {
                this.color[name] = new Color(value).toRGBA();
            } else {
                this.color[name] = value.toRGBA();
            }

            return value;

        },

        /*
         * 删除调色板实例上用户自己添加的颜色， 该方法不能删除内置的颜色
         * @param name 需要删除的颜色名称
         * @return 删除是否成功的bool值
         */
        remove: function(name) {

            if (this.color.hasOwnProperty(name)) {
                delete this.color[name];
                return true;
            }

            return false;

        }

    });

    Utils.extend(Palette, {

        getColor: function(name) {

            var colorValue = StandardColor.EXTEND_STANDARD[name] || StandardColor.COLOR_STANDARD[name];

            if (colorValue) {
                return new Color(colorValue);
            }

            return null;

        },
        /*
         * 通过给定的名字获取标准的颜色值表示， 返回的值以hex的方式提供
         * @param name 需要获取的标准颜色名称
         * @return 名字所对应的颜色值的hex表示， 如果未找到对应名称的值， 则返回一个空字符串
         */
        getColorValue: function(name) {

            return StandardColor.EXTEND_STANDARD[name] || StandardColor.COLOR_STANDARD[name] || '';

        },

        /*
         * 向调色板添加颜色名称，新添加的颜色对所有的调色板对象都可见
         * 对已存在的颜色名称， 将会覆盖掉
         * @param name 新添加的颜色名称
         * @param value 新添加的颜色名称所对于的值， 应该是一个hex格式的颜色字符串， 如： ”#ff0000“
         * @return 新添加的颜色的值
         */
        addColor: function(name, value) {

            if (typeof value === 'string') {
                StandardColor.EXTEND_STANDARD[name] = new Color(value).toRGBA();
            } else {
                StandardColor.EXTEND_STANDARD[name] = value.toRGBA();
            }

            return value;

        },

        /*
         * 删除用户自己添加的颜色， 该方法不能删除内置的颜色， 该方法不会影响调色板实例自由的颜色
         * @param name 需要删除的颜色名称
         * @return 删除是否成功的bool值
         */
        removeColor: function(name) {

            if (StandardColor.EXTEND_STANDARD.hasOwnProperty(name)) {
                delete StandardColor.EXTEND_STANDARD[name];
                return true;
            }

            return false;

        }

    });

    return Palette;

});