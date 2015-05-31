var Nuclear = {};

Nuclear.renderList = [];

Nuclear.extend = function (obj) {
    obj.ctor = function (selector,option) {
        this.option = option;
        this.parent = document.querySelector(selector);
        if (obj.didMount) {
            obj.didMount.call(this);
        }
        Nuclear.observe(this.option, Nuclear.debounce(Nuclear.render, 50));
        Nuclear.renderList.push({
            tpl: this.render(),
            data:this.option, 
            parent: this.parent,
            eventBinding:obj.eventBinding,
            self:this
        });

        Nuclear.render();
    }
    return Nuclear.Class.extend(obj);
}

Nuclear.render = function () {
    for (var i = 0, len = Nuclear.renderList.length; i < len; i++) {
        var item = Nuclear.renderList[i];
        if (item.self.node) {
            item.parent.removeChild(item.self.node);
        }
        item.parent.insertAdjacentHTML("beforeEnd", Nuclear.Tpl.render(item.tpl,item.data));
        item.self.node = item.parent.lastChild;
        if (item.eventBinding) item.eventBinding.call(item.self);
    }

}

Nuclear.debounce=function (func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}