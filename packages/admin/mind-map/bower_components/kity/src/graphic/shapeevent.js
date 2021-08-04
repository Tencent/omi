/*
 * 图形事件包装类
 * */

define(function(require, exprots, module) {

    var Matrix = require('./matrix'),
        Utils = require('../core/utils'),
        Point = require('./point');

    return require('../core/class').createClass('ShapeEvent', {

        constructor: function(event) {

            var target = null;

            // dom 事件封装对象
            if (!Utils.isObject(event.target)) {

                this.type = event.type;

                target = event.target;

                // use标签有特殊属性， 需要区别对待
                if (target.correspondingUseElement) {

                    target = target.correspondingUseElement;

                }

                this.originEvent = event;
                this.targetShape =
                    target.shape ||
                    target.paper ||
                    event.currentTarget &&
                    (event.currentTarget.shape || event.currentTarget.paper);

                if (event._kityParam) {

                    Utils.extend(this, event._kityParam);

                }


                // 普通事件封装对象
            } else {

                Utils.extend(this, event);

            }

        },

        preventDefault: function() {

            var evt = this.originEvent;

            if (!evt) {
                return true;
            }

            if (evt.preventDefault) {

                evt.preventDefault();

                return evt.cancelable;

            } else {

                evt.returnValue = false;

                return true;

            }

        },

        //当前鼠标事件在用户坐标系中点击的点的坐标位置
        getPosition: function(refer, touchIndex) {

            if (!this.originEvent) {
                return null;
            }

            var eventClient = this.originEvent.touches ?
                this.originEvent.touches[touchIndex || 0] :
                this.originEvent;

            var target = this.targetShape;
            var targetNode = target.shapeNode || target.node;

            var pScreen = new Point(
                    eventClient && eventClient.clientX || 0,
                    eventClient && eventClient.clientY || 0
                );

            var pTarget = Matrix.transformPoint(pScreen, targetNode.getScreenCTM().inverse());
            var pRefer = Matrix.getCTM(target, refer || 'view').transformPoint(pTarget);

            return pRefer;
        },

        stopPropagation: function() {

            var evt = this.originEvent;

            if (!evt) {
                return true;
            }

            if (evt.stopPropagation) {

                evt.stopPropagation();

            } else {

                evt.cancelBubble = false;

            }

        }

    });

});