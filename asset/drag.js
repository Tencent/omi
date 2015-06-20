
var Drag = Nuclear.createAction({
    install: function () {
        var option = this.option;
        this.currentPosition = { x: 0, y: 0 };
        this.moveElement = typeof option.moveElement === "string" ? document.querySelector(option.moveElement) : option.moveElement;
        this.dragElement = typeof option.dragElement === "string" ? document.querySelector(option.dragElement) : option.dragElement;
        Nuclear.css(this.moveElement, "position", "absolute");
        Nuclear.css(this.dragElement, "cursor", option.cursor || "move");

        Nuclear.addEvent(this.dragElement, "mousedown", this._mousedown.bind(this));

        if (Nuclear.css(this.moveElement, "top") === "auto") Nuclear.css(this.moveElement, "top", "0px");
        if (Nuclear.css(this.moveElement, "left") === "auto") Nuclear.css(this.moveElement, "left", "0px");

        this._docMove = this._mousemove.bind(this);
        this._docUp = this._mouseup.bind(this);
        this.stopped = false;
    },
    _mousedown: function (evt) {
        this.currentPosition.x = evt.pageX;
        this.currentPosition.y = evt.pageY;
        Nuclear.addEvent(document, "mousemove", this._docMove);
        Nuclear.addEvent(document, "mouseup", this._docUp);
        evt.stopDrag = function () {

            this.stopped = true;
        }.bind(this);
        if (this.option.start) {
            this.option.start(evt);
        }
    },
    _mousemove: function (evt) {
        if (this.stopped) return;
        var dx = evt.pageX - this.currentPosition.x;
        var dy = evt.pageY - this.currentPosition.y;
        if (this.option.direction) {
            if (this.option.direction.toUpperCase() == "X") dy = 0;
            if (this.option.direction.toUpperCase() == "Y") dx = 0;
        }
        Nuclear.css(this.moveElement, "left", (parseInt(Nuclear.css(this.moveElement, "left")) + dx) + "px");
        Nuclear.css(this.moveElement, "top", (parseInt(Nuclear.css(this.moveElement, "top")) + dy) + "px");
        if (this.option.move) {
            this.option.move(evt);
        }
        this.currentPosition.x = evt.pageX;
        this.currentPosition.y = evt.pageY;
        evt.preventDefault();

    },
    _mouseup: function (evt) {
        Nuclear.removeEvent(document, "mousemove", this._docMove);
        Nuclear.removeEvent(document, "mouseup", this._docUp);
        if (this.option.end) {
            this.option.end(evt);
        }
        this.stopped = false;

    }
})