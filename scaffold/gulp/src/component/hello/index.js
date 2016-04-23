App.Util.loadFile("component/hello/index.html", function (tpl) {
    App.HelloMessage = Nuclear.create({
        render: function () {
            return tpl;
        }
    })

})