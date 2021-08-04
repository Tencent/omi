/*
 * kity event 实现
 */
define(function(require, exports, module) {
    // polyfill
    (function() {

        function CustomEvent(event, params) {
            params = params || {
                bubbles: false,
                cancelable: false,
                detail: undefined
            };
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        }

        CustomEvent.prototype = window.Event.prototype;

        window.CustomEvent = CustomEvent;
    })();

    var Utils = require('../core/utils'),
        ShapeEvent = require('./shapeevent');

    // 内部处理器缓存
    var INNER_HANDLER_CACHE = {},
        // 用户处理器缓存
        USER_HANDLER_CACHE = {},
        guid = 0;


    // 添加事件统一入口
    function _addEvent(type, handler, isOnce) {

        isOnce = !!isOnce;

        if (Utils.isString(type)) {
            type = type.match(/\S+/g);
        }

        Utils.each(type, function(currentType) {
            listen.call(this, this.node, currentType, handler, isOnce);

        }, this);

        return this;

    }

    // 移除事件统一入口
    function _removeEvent(type, handler) {

        var userHandlerList = null,
            eventId = this._EVNET_UID,
            isRemoveAll = handler === undefined;

        userHandlerList = USER_HANDLER_CACHE[eventId][type];

        //移除指定的监听器
        if (!isRemoveAll) {

            isRemoveAll = true;

            Utils.each(userHandlerList, function removeKityEvent(fn, index) {

                if (fn === handler) {

                    // 不能结束， 需要查找完整个list， 避免丢失移除多次绑定同一个处理器的情况
                    delete userHandlerList[index];

                } else {

                    isRemoveAll = false;

                }

            });

        }


        //删除所有监听器
        if (isRemoveAll) {

            deleteDomEvent(this.node, type, INNER_HANDLER_CACHE[eventId][type]);

            delete USER_HANDLER_CACHE[eventId][type];
            delete INNER_HANDLER_CACHE[eventId][type];

        }

        return this;

    }

    // 执行绑定, 该方法context为shape或者mixin了eventhandler的对象
    function listen(node, type, handler, isOnce) {

        var eid = this._EVNET_UID,
            targetObject = this;

        // 初始化内部监听器
        if (!INNER_HANDLER_CACHE[eid]) {

            INNER_HANDLER_CACHE[eid] = {};

        }

        if (!INNER_HANDLER_CACHE[eid][type]) {

            // 内部监听器
            INNER_HANDLER_CACHE[eid][type] = function kityEventHandler(e) {

                e = new ShapeEvent(e || window.event);

                Utils.each(USER_HANDLER_CACHE[eid][type], function executeKityEvent(fn) {
                    var result;
                    if (fn) {

                        result = fn.call(targetObject, e);

                        //once 绑定， 执行完后删除
                        if (isOnce) {

                            targetObject.off(type, fn);

                        }

                    }

                    // 如果用户handler里return了false， 则该节点上的此后的同类型事件将不再执行
                    return result;

                }, targetObject);

            };

        }

        // 初始化用户监听器列表
        if (!USER_HANDLER_CACHE[eid]) {

            USER_HANDLER_CACHE[eid] = {};

        }

        if (!USER_HANDLER_CACHE[eid][type]) {

            USER_HANDLER_CACHE[eid][type] = [handler];

            // 绑定对应类型的事件
            // dom对象利用dom event进行处理， 非dom对象， 由消息分发机制处理
            if (!!node && ('on' + type) in node) {
                bindDomEvent(node, type, INNER_HANDLER_CACHE[eid][type]);

            }

        } else {

            USER_HANDLER_CACHE[eid][type].push(handler);

        }

    }

    // 绑定dom事件
    function bindDomEvent(node, type, handler) {

        if (node.addEventListener) {
            node.addEventListener(type, handler, false);

        } else {

            node.attachEvent('on' + type, handler);

        }

    }

    // 删除dom事件
    function deleteDomEvent(node, type, handler) {

        if (node.removeEventListener) {

            node.removeEventListener(type, handler, false);

        } else {

            node.detachEvent(type, handler);

        }

    }

    // 触发dom事件
    function triggerDomEvent(node, type, params) {

        var event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true
        });

        event._kityParam = params;

        node.dispatchEvent(event);

    }

    // 发送消息
    function sendMessage(messageObj, type, msg) {

        var event = null,
            handler = null;

        var handlers = INNER_HANDLER_CACHE[messageObj._EVNET_UID];
        if (!handlers) return;

        handler = handlers[type];

        if (!handler) {
            return;
        }

        event = Utils.extend({
            type: type,
            target: messageObj
        }, msg || {});


        handler.call(messageObj, event);

    }

    // 对外接口
    return require('../core/class').createClass('EventHandler', {

        constructor: function() {

            this._EVNET_UID = ++guid;

        },

        addEventListener: function(type, handler) {

            return _addEvent.call(this, type, handler, false);

        },

        addOnceEventListener: function(type, handler) {

            return _addEvent.call(this, type, handler, true);

        },

        removeEventListener: function(type, handler) {

            return _removeEvent.call(this, type, handler);

        },

        on: function(type, handler) {

            return this.addEventListener.apply(this, arguments);

        },

        once: function(type, handler) {

            return this.addOnceEventListener.apply(this, arguments);

        },

        off: function() {

            return this.removeEventListener.apply(this, arguments);

        },

        fire: function(type, params) {

            return this.trigger.apply(this, arguments);

        },

        trigger: function(type, params) {

            sendMessage(this, type, params);

            return this;

        }

    });

});