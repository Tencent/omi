App.componentRes['component/hello/index.html'] =
'<div>Hello , {{name}} !</div>';

"use strict";

App.Util.loadFile("component/hello/index.html", function (tpl) {
    App.HelloMessage = Nuclear.create({
        render: function render() {
            return tpl;
        }
    });
});