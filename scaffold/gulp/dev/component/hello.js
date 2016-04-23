App.componentRes['component/hello/index.html'] =
'<div>Hello , {{name}} !</div>';

App.Util.loadFile("component/hello/index.html", function (tpl) {
    App.HelloMessage = Nuclear.create({
        render: function () {
            return tpl;
        }
    })

})