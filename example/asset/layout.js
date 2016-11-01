/// <reference path="../src/nuclear.js" />
var Layout =Nuclear.createAction({
    install:function(){
        var option = Nuclear.merge({
            topHeight: 50,
            topResize: true,
            leftWidth: 180,
            leftResize: true,
            rightWidth: 80,
            rightResize: true,
            bottomHeight: 50,
            bottomResize: true,
            intervalSize: 10,
            minDistance: 40,
            togglerSize: 20,
            container: "body"
        }, this.option);
        this.option = option;
        this.parent = document.querySelector(option.container);
        if (option.container === "body") {
            this.viewport = Nuclear.getViewport();
            this.parent.style.height = this.viewport.height + "px";
        } else {
            this.viewport = {};
            this.viewport.width = parseInt(Nuclear.css(this.parent, "width"))
            this.viewport.height = parseInt(Nuclear.css(this.parent, "height"))
        }
        Nuclear.css(this.parent, "margin", "0");
        Nuclear.css(this.parent, "padding", "0");
        Nuclear.css(this.parent, "overflow", "hidden");
        if (Nuclear.css(this.parent, "position") === "static") {
            Nuclear.css(this.parent, "position", "relative");
        }
        this.top = this.parent.querySelector(".nuclear-layout-top");
        this.bottom = this.parent.querySelector(".nuclear-layout-bottom");
        this.left = this.parent.querySelector(".nuclear-layout-left");
        this.right = this.parent.querySelector(".nuclear-layout-right");
        this.center = this.parent.querySelector(".nuclear-layout-center");

        this.topInterval = document.createElement("div");
        Nuclear.addClass(this.topInterval, "nuclear-layout-topInterval");
        this.bottomInterval = document.createElement("div");
        Nuclear.addClass(this.bottomInterval, "nuclear-layout-bottomInterval");
        this.leftInterval = document.createElement("div");
        Nuclear.addClass(this.leftInterval, "nuclear-layout-leftInterval");
        this.rightInterval = document.createElement("div");
        Nuclear.addClass(this.rightInterval, "nuclear-layout-rightInterval");
        this.parent.appendChild(this.topInterval);
        this.parent.appendChild(this.leftInterval);
        this.parent.appendChild(this.rightInterval);
        this.parent.appendChild(this.bottomInterval);

        Nuclear.css(this.rightInterval, "overflow", "hidden");
        Nuclear.css(this.leftInterval, "overflow", "hidden");
        Nuclear.css(this.bottomInterval, "overflow", "hidden");
        Nuclear.css(this.topInterval, "overflow", "hidden");

        this.topToggler = document.createElement("div");
        Nuclear.addClass(this.topToggler, "nuclear-layout-topToggler");
        this.topInterval.appendChild(this.topToggler);
        this.bottomToggler = document.createElement("div");
        Nuclear.addClass(this.bottomToggler, "nuclear-layout-bottomToggler");
        this.bottomInterval.appendChild(this.bottomToggler);
        this.leftToggler = document.createElement("div");
        this.leftInterval.appendChild(this.leftToggler);
        Nuclear.addClass(this.leftToggler, "nuclear-layout-leftToggler");
        this.rightToggler = document.createElement("div");
        this.rightInterval.appendChild(this.rightToggler);
        Nuclear.addClass(this.rightToggler, "nuclear-layout-rightToggler");

        this.absolute(this.top, this.bottom, this.left, this.right, this.center, this.topInterval, this.bottomInterval, this.leftInterval, this.rightInterval, this.topToggler, this.bottomToggler, this.leftToggler, this.rightToggler);





        Nuclear.css(this.topToggler, "cursor", "pointer");
        Nuclear.css(this.bottomToggler, "cursor", "pointer");
        Nuclear.css(this.leftToggler, "cursor", "pointer");
        Nuclear.css(this.rightToggler, "cursor", "pointer");
        Nuclear.css(this.topToggler, "width", option.togglerSize + "px");
        Nuclear.css(this.bottomToggler, "width", option.togglerSize + "px");
        Nuclear.css(this.leftToggler, "height", option.togglerSize + "px");
        Nuclear.css(this.rightToggler, "height", option.togglerSize + "px");
        Nuclear.css(this.topToggler, "height", option.intervalSize + "px");
        Nuclear.css(this.bottomToggler, "height", option.intervalSize + "px");
        Nuclear.css(this.leftToggler, "width", option.intervalSize + "px");
        Nuclear.css(this.rightToggler, "width", option.intervalSize + "px");
        //Nuclear.addEvent(this.topToggler, "click", this.topToggle.bind(this));
        //Nuclear.addEvent(this.bottomToggler, "click", this.bottomToggle.bind(this));
        //Nuclear.addEvent(this.leftToggler, "click", this.leftToggle.bind(this));
        //Nuclear.addEvent(this.rightToggler, "click", this.rightToggle.bind(this));

        this.bakOption = [option.topHeight, option.rightWidth, option.bottomHeight, option.leftWidth, option.intervalSize];




        var self = this;
        self.toggleFlag = true;
        if (option.topHeight > 0) {
            if (option.topResize) {
                new Drag({
                    dragElement: this.topInterval,
                    moveElement: this.topInterval,
                    direction: "y",
                    cursor: "n-resize",
                    start: function (evt) {
                        if (self.top.style.display == "none") {
                            self.topToggle();
                            evt.stopDrag();
                            return;
                        }
                        var obj = obj = evt.srcElement ? evt.srcElement : evt.target;
                        if (Nuclear.hasClass(obj, "nuclear-layout-topToggler")) {
                            self.toggleFlag = true;

                        }
                        Nuclear.css(self.topInterval, "backgroundColor", "rgba(222,222,222,.5)");
                    },
                    move: function () {
                        self.toggleFlag = false;
                    },
                    end: function (evt) {
                        var top = parseInt(Nuclear.css(self.topInterval, "top"));
                        if (top < option.minDistance) {
                            Nuclear.css(self.topInterval, "top",  option.minDistance + "px");
                        }
                        if (top > self.viewport.height - option.minDistance) {
                            Nuclear.css(self.topInterval, "top", (self.viewport.height - option.minDistance) + "px");
                        }
                        var maxTop = parseInt(Nuclear.css(self.bottomInterval, "top")) - option.minDistance;
                        if (top > maxTop) {
                            Nuclear.css(self.topInterval, "top", maxTop + "px");
                        }

                        var obj = obj = evt.srcElement ? evt.srcElement : evt.target;
                        if (Nuclear.hasClass(obj, "nuclear-layout-topToggler") && self.toggleFlag) {
                            self.topToggle();
                        } else {

                            self.option.topHeight = parseInt(Nuclear.css(self.topInterval, "top"));

                            self.bakOption[0] = self.option.topHeight;
                            Nuclear.css(self.topInterval, "backgroundColor", "rgba(0,0,0,0)");
                            self.reFlow();
                        }
                    }
                })
            } else {
                Nuclear.addEvent(this.topToggler, "click", this.topToggle.bind(this));
            }
        } else {
            this.topInterval.style.display = "none";
            this.hideTop = true;
            Nuclear.css(this.top, "display", "none")
            Nuclear.css(this.topToggler, "display", "none")
        }

        if (option.bottomHeight > 0) {
            if (option.bottomResize) {
                new Drag({
                    dragElement: this.bottomInterval,
                    moveElement: this.bottomInterval,
                    direction: "y",
                    cursor: "n-resize",
                    start: function (evt) {
                        if (self.bottom.style.display == "none") {
                            self.bottomToggle();
                            evt.stopDrag();
                            return;
                        }
                        var obj = obj = evt.srcElement ? evt.srcElement : evt.target;
                        if (Nuclear.hasClass(obj, "nuclear-layout-bottomToggler")) {
                            self.toggleFlag = true;
                        }
                        Nuclear.css(self.bottomInterval, "backgroundColor", "rgba(222,222,222,.5)");
                    },
                    move: function () {
                        self.toggleFlag = false;
                    },
                    end: function (evt) {
                        var top = parseInt(Nuclear.css(self.bottomInterval, "top"));
                        if (top < option.minDistance) {
                            Nuclear.css(self.bottomInterval, "top", option.minDistance + "px");
                        }
                        if (top > self.viewport.height - option.minDistance ) {
                          
                            Nuclear.css(self.bottomInterval, "top", (self.viewport.height-option.minDistance) + "px");
                        }
                        var minTop = parseInt(Nuclear.css(self.topInterval, "top")) + option.minDistance;
                        if (top < minTop) {

                            Nuclear.css(self.bottomInterval, "top", minTop + "px");
                        }

                        var obj = obj = evt.srcElement ? evt.srcElement : evt.target;
                        if (Nuclear.hasClass(obj, "nuclear-layout-bottomToggler") && self.toggleFlag) {

                            self.bottomToggle();
                        } else {
                            Nuclear.css(self.bottomInterval, "backgroundColor", "rgba(0,0,0,0)");
                            self.option.bottomHeight = self.viewport.height - parseInt(Nuclear.css(self.bottomInterval, "top")) - self.option.intervalSize;
                            self.bakOption[2] = self.option.bottomHeight;
                            self.reFlow();
                        }
                    }
                })
            } else {
                Nuclear.addEvent(this.bottomToggler, "click", this.bottomToggle.bind(this));
            }
        } else {
            this.bottomInterval.style.display = "none";
            this.hideBottom = true;
            Nuclear.css(this.bottom, "display", "none")
            Nuclear.css(this.bottomToggler, "display", "none")
        }


        if (option.leftWidth > 0) {
            if (option.leftResize) {
                new Drag({
                    dragElement: this.leftInterval,
                    moveElement: this.leftInterval,
                    direction: "x",
                    cursor: "e-resize",
                    start: function (evt) {
                        if (self.left.style.display == "none") {
                            self.leftToggle();
                            evt.stopDrag();
                            return;
                        }
                        var obj = obj = evt.srcElement ? evt.srcElement : evt.target;
                        if (Nuclear.hasClass(obj, "nuclear-layout-leftToggler")) {
                            self.toggleFlag = true;
                        }
                        Nuclear.css(self.leftInterval, "backgroundColor", "rgba(222,222,222,.5)");
                    },
                    move: function () {
                        self.toggleFlag = false;
                    },
                    end: function (evt) {
                        var left = parseInt(Nuclear.css(self.leftInterval, "left"));
                        if (left > self.viewport.width - 1) {
                            Nuclear.css(self.leftInterval, "left", (self.viewport.width - option.minDistance) + "px");
                        }
                        if (left < option.minDistance) {
                            Nuclear.css(self.leftInterval, "left",  option.minDistance + "px");
                        }
                        var maxLeft = parseInt(Nuclear.css(self.rightInterval, "left")) - option.minDistance;
                        if (left > maxLeft) {

                            Nuclear.css(self.leftInterval, "left", maxLeft + "px");
                        }
                        var obj = obj = evt.srcElement ? evt.srcElement : evt.target;
                        if (Nuclear.hasClass(obj, "nuclear-layout-leftToggler") && self.toggleFlag) {

                            self.leftToggle();
                        } else {
                            Nuclear.css(self.leftInterval, "backgroundColor", "rgba(0,0,0,0)");
                            self.option.leftWidth = parseInt(Nuclear.css(self.leftInterval, "left"));
                            self.bakOption[3] = self.option.leftWidth;
                            self.reFlow();
                        }
                    }
                })
            } else {
                Nuclear.addEvent(this.leftToggler, "click", this.leftToggle.bind(this));
            }
        } else {
            this.leftInterval.style.display = "none";
            this.hideLeft = true;
            Nuclear.css(this.left, "display", "none")
            Nuclear.css(this.leftToggler, "display", "none")
        }
        if (option.rightWidth > 0) {
            if (option.rightResize) {
                new Drag({
                    dragElement: this.rightInterval,
                    moveElement: this.rightInterval,
                    direction: "x",
                    cursor: "e-resize",
                    start: function (evt) {
                        if (self.right.style.display == "none") {
                            self.rightToggle();
                            evt.stopDrag();
                            return;
                        }
                        var obj = obj = evt.srcElement ? evt.srcElement : evt.target;
                        if (Nuclear.hasClass(obj, "nuclear-layout-rightToggler")) {
                            self.toggleFlag = true;
                        }
                        Nuclear.css(self.rightInterval, "backgroundColor", "rgba(222,222,222,.5)");
                    },
                    move: function () {
                        self.toggleFlag = false;
                    },
                    end: function (evt) {
                        var left = parseInt(Nuclear.css(self.rightInterval, "left"));
                        if (left < option.minDistance) {
                            Nuclear.css(self.rightInterval, "left", option.minDistance + "px");
                        }
                        if (left > self.viewport.width - option.minDistance) {
                            Nuclear.css(self.rightInterval, "left", (self.viewport.width -option.minDistance) + "px");
                        }
                        var minLeft = parseInt(Nuclear.css(self.leftInterval, "left")) + option.minDistance;
                        if (left < minLeft) {

                            Nuclear.css(self.rightInterval, "left", minLeft + "px");
                        }
                        var obj = obj = evt.srcElement ? evt.srcElement : evt.target;
                        if (Nuclear.hasClass(obj, "nuclear-layout-rightToggler") && self.toggleFlag) {

                            self.rightToggle();
                        } else {
                            Nuclear.css(self.rightInterval, "backgroundColor", "rgba(0,0,0,0)");
                            self.option.rightWidth = self.viewport.width - parseInt(Nuclear.css(self.rightInterval, "left")) - self.option.intervalSize;
                            self.bakOption[1] = self.option.rightWidth;
                            self.reFlow();
                        }
                    }
                })
            } else {
                Nuclear.addEvent(this.rightToggler, "click", this.rightToggle.bind(this));
            }
        } else {
            this.rightInterval.style.display = "none";
            this.hideRight = true;
            Nuclear.css(this.right, "display", "none")
            Nuclear.css(this.rightToggler, "display", "none")
        }
        //var self = this;
        //setTimeout(function () {

        //    Nuclear.css(self.parent, "display", "block");
        //}, 1000)

        Nuclear.css(this.topToggler, "backgroundColor", "#ccc");
        Nuclear.css(this.bottomToggler, "backgroundColor", "#ccc");
        Nuclear.css(this.leftToggler, "backgroundColor", "#ccc");
        Nuclear.css(this.rightToggler, "backgroundColor", "#ccc");
        Nuclear.css(this.center, "overflow", "auto");
        if (option.container === "body") {
            Nuclear.addEvent(window, "resize", this.wResize.bind(this));
        }
        this.reFlow()
    },
    absolute: function () {
        for (var i = 0, len = arguments.length; i < len; i++) {

            Nuclear.css(arguments[i], "position", "absolute");
        }
    },
    wResize: function () {
        this.viewport = Nuclear.getViewport();
        this.parent.style.height = this.viewport.height + "px";
        this.reFlow();
    },
    topToggle: function (evt) {
        var option = this.option;
        if (Nuclear.css(this.top, "display") !== "none") {
            option.topHeight = 0;
            Nuclear.css(this.top, "display", "none");
            if (option.topResize) Nuclear.css(this.topInterval, "cursor", "pointer");

        } else {
            option.topHeight = this.bakOption[0];
            Nuclear.css(this.top, "display", "block");
            if (option.topResize) Nuclear.css(this.topInterval, "cursor", "n-resize");
        }

        this.reFlow();

    },
    bottomToggle: function (evt) {
        var option = this.option;
        if (Nuclear.css(this.bottom, "display") !== "none") {
            option.bottomHeight = 0;
            Nuclear.css(this.bottom, "display", "none");
            if (option.bottomResize) Nuclear.css(this.bottomInterval, "cursor", "pointer");
        } else {
            option.bottomHeight = this.bakOption[2];
            Nuclear.css(this.bottom, "display", "block");
            if (option.bottomResize) Nuclear.css(this.bottomInterval, "cursor", "n-resize");

        }

        this.reFlow();

    },

    leftToggle: function (evt) {
        var option = this.option;
        if (Nuclear.css(this.left, "display") !== "none") {
            option.leftWidth = 0;
            Nuclear.css(this.left, "display", "none");
            if (option.leftResize) Nuclear.css(this.leftInterval, "cursor", "pointer");
        } else {
            option.leftWidth = this.bakOption[3];
            Nuclear.css(this.left, "display", "block");
            if (option.leftResize) Nuclear.css(this.leftInterval, "cursor", "e-resize");
        }

        this.reFlow();

    },
    rightToggle: function (evt) {
        var option = this.option;
        if (Nuclear.css(this.right, "display") !== "none") {
            option.rightWidth = 0;
            Nuclear.css(this.right, "display", "none");
            if (option.rightResize) Nuclear.css(this.rightInterval, "cursor", "pointer");
        } else {
            option.rightWidth = this.bakOption[1];
            Nuclear.css(this.right, "display", "block");
            if (option.rightResize) Nuclear.css(this.rightInterval, "cursor", "e-resize");
        }

        this.reFlow();

    },

    reFlow: function () {
        var option = this.option;
        var top = option.topHeight, right = option.rightWidth, bottom = option.bottomHeight, left = option.leftWidth, interval = option.intervalSize, vw = this.viewport.width, vh = this.viewport.height;
        var middleHeight = vh - top - bottom - interval - interval;


        Nuclear.css(this.topToggler, "left", vw / 2 - option.togglerSize / 2 + "px");
        Nuclear.css(this.bottomToggler, "left", vw / 2 - option.togglerSize / 2 + "px");

        Nuclear.css(this.leftToggler, "top", middleHeight / 2 - option.togglerSize / 2 + "px");
        Nuclear.css(this.rightToggler, "top", middleHeight / 2 - option.togglerSize / 2 + "px");



        Nuclear.css(this.top, "height", top + "px");
        Nuclear.css(this.top, "width", vw + "px");
        Nuclear.css(this.left, "width", left + "px");
        Nuclear.css(this.left, "top", top + interval + "px");
        Nuclear.css(this.right, "width", right + "px");
        Nuclear.css(this.right, "top", top + interval + "px");
        Nuclear.css(this.right, "right", 0);
        Nuclear.css(this.bottom, "height", bottom + "px");
        Nuclear.css(this.bottom, "bottom", 0);
        Nuclear.css(this.bottom, "width", vw + "px");


        if (this.hideLeft) {
            if (this.hideRight) {
                Nuclear.css(this.center, "width", vw + "px");

            } else {
                Nuclear.css(this.center, "width", (vw - right - interval) + "px");
            }

            Nuclear.css(this.center, "left", left + "px");
        } else {
            if (this.hideRight) {
                Nuclear.css(this.center, "width", (vw - left - interval) + "px");
            } else {
                Nuclear.css(this.center, "width", (vw - left - right - interval - interval) + "px");

            }
            Nuclear.css(this.center, "left", left + interval + "px");
        }


        if (this.hideTop) {
            Nuclear.css(this.center, "top", "0px");
            if (this.hideBottom) {
                Nuclear.css(this.center, "height", (middleHeight + interval + interval) + "px");
            } else {
                Nuclear.css(this.center, "height", (middleHeight + interval) + "px");
            }


        } else {
            Nuclear.css(this.center, "top", top + interval + "px");
            if (this.hideBottom) {
                Nuclear.css(this.center, "height", middleHeight + interval + "px");
            } else {

                Nuclear.css(this.center, "height", middleHeight + "px");
            }
        }
        Nuclear.css(this.right, "height", middleHeight + "px");
        Nuclear.css(this.left, "height", middleHeight + "px");
        Nuclear.css(this.topInterval, "height", interval + "px");
        Nuclear.css(this.topInterval, "width", vw + "px");
        Nuclear.css(this.topInterval, "top", top + "px");
        //Nuclear.css(this.topInterval, "backgroundColor", "red");

        Nuclear.css(this.bottomInterval, "height", interval + "px");
        Nuclear.css(this.bottomInterval, "width", vw + "px");
        Nuclear.css(this.bottomInterval, "top", vh - bottom - interval + "px");
        //Nuclear.css(this.bottomInterval, "backgroundColor", "rgba(111,111,111,.3)");

        Nuclear.css(this.leftInterval, "height", middleHeight + "px");
        Nuclear.css(this.leftInterval, "width", interval + "px");
        Nuclear.css(this.leftInterval, "top", top + interval + "px");
        Nuclear.css(this.leftInterval, "left", left + "px");

        Nuclear.css(this.rightInterval, "height", middleHeight + "px");
        Nuclear.css(this.rightInterval, "width", interval + "px");
        Nuclear.css(this.rightInterval, "top", top + interval + "px");
        Nuclear.css(this.rightInterval, "left", vw - right - interval + "px");


    }
}) 