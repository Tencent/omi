define(function(require, exports, module) {

    var key = require('./key');
    var FOCUS_CLASS = 'hotbox-focus';
    var RECEIVER_CLASS = 'hotbox-key-receiver';

    function KeyControl(hotbox) {
        var _this = this;
        var _receiver;
        var _actived = true;
        var _receiverIsSelfCreated = false;
        var $container = hotbox.$container;

        _createReceiver();
        _bindReceiver();
        _bindContainer();
        _active();

        function _createReceiver() {
            _receiver = document.createElement('input');
            _receiver.classList.add(RECEIVER_CLASS);
            $container.appendChild(_receiver);
            _receiverIsSelfCreated = true;
        }

        function _bindReceiver() {
            _receiver.onkeyup = _handle;
            _receiver.onkeypress = _handle;
            _receiver.onkeydown = _handle;
            _receiver.onfocus = _active;
            _receiver.onblur = _deactive;
            if (_receiverIsSelfCreated) {
                _receiver.oninput = function(e) { _receiver.value = null; };
            }
        }

        function _bindContainer() {
            $container.onmousedown = function(e) {
                _active();
                e.preventDefault();
            };
        }

        function _handle(keyEvent) {
            if (!_actived) return;
            hotbox.dispatch(keyEvent);
        }

        function _active() {
            _receiver.select();
            _receiver.focus();
            _actived = true;
            $container.classList.add(FOCUS_CLASS);
        }

        function _deactive() {
            _receiver.blur();
            _actived = false;
            $container.classList.remove(FOCUS_CLASS);
        }

        this.handle = _handle;
        this.active = _active;
        this.deactive = _deactive;
    }

    module.exports = KeyControl;
});