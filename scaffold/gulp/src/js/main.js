function getFileExt(filename){
    var index1=filename.lastIndexOf(".")
    var index2=filename.length;
    return filename.substring(index1,index2).toLowerCase();
}

function loadFile(tpl,css,callback){
    if(arguments.length===2){
        if(getFileExt(tpl)==="html"){
            var tplHttp = new XMLHttpRequest();
            tplHttp.open("GET", tpl, false);
            tplHttp.send();
            css(tplHttp.responseText);
        }else{

            var cssHttp = new XMLHttpRequest();
            cssHttp.open("GET", tpl, false);
            cssHttp.send();
            css(cssHttp.responseText);
        }
    }else{
        var tplHttp = new XMLHttpRequest();
        tplHttp.open("GET", tpl, false);
        tplHttp.send();

        var cssHttp = new XMLHttpRequest();
        cssHttp.open("GET", css, false);
        cssHttp.send();

        callback(tplHttp.responseText,cssHttp.responseText);

    }

}

loadFile("component/todo/index.html","component/todo/index.css",function(tpl,css){
    var TodoApp = Nuclear.create({
        add: function (evt) {
            evt.preventDefault();
            this.option.items.push(this.textBox.value);
        },
        render: function () {
            return tpl;
        },
        style: function () {
            return css;
        }
    });

    new  TodoApp({ items: [] }, "#todoListContainer");

    loadFile("component/hello/index.html",function(tpl){
        var HelloMessage = Nuclear.create({
            render: function () {
                return tpl;
            }
        })
        new HelloMessage( { name: "Nuclear" }, "#helloContainer");
    })

});