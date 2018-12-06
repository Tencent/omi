

import JSONProxy from './proxy'

const create = {}

create.Page = function (vm, options) {

    options.data = vm.data

    const onLoad = options.onLoad

    options.onLoad = function (e) {
        vm.data = new JSONProxy(vm.data).observe(false, info => {
            this.setData(vm.data)
        })
        onLoad && onLoad.call(this, e)
    }
    Page(options)
}

create.Component = function () {


}

if (typeof exports == "object") {
    module.exports = create
} else if (typeof define == "function" && define.amd) {
    define([], function () { return create })
} else {
    window.create = create
}