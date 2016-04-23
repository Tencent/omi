App.Util={};

App.Util.getFileExt = function(filename) {
    var index1 = filename.lastIndexOf(".")
    var index2 = filename.length;
    return filename.substring(index1, index2).toLowerCase();
}

App.Util.loadFile = function (tpl, css, callback) {
    if (arguments.length === 2) {
            var tplHttp = new XMLHttpRequest();
            tplHttp.open("GET", tpl, false);
            tplHttp.send();
            css(tplHttp.responseText);
    } else {
        var tplHttp = new XMLHttpRequest();
        tplHttp.open("GET", tpl, false);
        tplHttp.send();

        var cssHttp = new XMLHttpRequest();
        cssHttp.open("GET", css, false);
        cssHttp.send();

        callback(tplHttp.responseText, cssHttp.responseText);

    }

}
