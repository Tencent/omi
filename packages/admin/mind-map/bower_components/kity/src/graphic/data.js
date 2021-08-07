define(function(require, exports, module) {
    return require('../core/class').createClass('Data', {
        constructor: function() {
            this._data = {};
        },
        setData: function(name, value) {
            this._data[name] = value;
            return this;
        },
        getData: function(name) {
            return this._data[name];
        },
        removeData: function(name) {
            delete this._data[name];
            return this;
        }
    });
});