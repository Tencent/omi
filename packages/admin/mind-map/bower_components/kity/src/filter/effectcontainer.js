/*
 * Effect所用的container
 */

define(function(require) {

    return require('../core/class').createClass('EffectContainer', {

        base: require('../graphic/container'),

        addEffect: function(point, pos) {

            return this.addItem.apply(this, arguments);

        },

        prependEffect: function() {

            return this.prependItem.apply(this, arguments);

        },

        appendEffect: function() {

            return this.appendItem.apply(this, arguments);

        },

        removeEffect: function(pos) {

            return this.removeItem.apply(this, arguments);

        },

        addEffects: function() {

            return this.addItems.apply(this, arguments);

        },

        setEffects: function() {

            return this.setItems.apply(this, arguments);

        },

        getEffect: function() {

            return this.getItem.apply(this, arguments);

        },

        getEffects: function() {

            return this.getItems.apply(this, arguments);

        },

        getFirstEffect: function() {

            return this.getFirstItem.apply(this, arguments);

        },

        getLastEffect: function() {

            return this.getLastItem.apply(this, arguments);

        },

        handleAdd: function(effectItem, pos) {

            var count = this.getEffects().length,
                nextEffectItem = this.getItem(pos + 1);

            // 最后一个节点， 直接追加
            if (count === pos + 1) {
                this.node.appendChild(effectItem.getNode());
                return;
            }

            this.node.insertBefore(effectItem.getNode(), nextEffectItem.getNode());

        }

    });

});