class Store {
    constructor(isReady) {
        this.readyHandlers = []
        this.isReady = isReady
        this.instances = []
        this.updateSelfInstances = []
    }

    ready(readyHandler) {
        if (this.isReady) {
            readyHandler()
            return
        }
        this.readyHandlers.push(readyHandler)
    }

    addSelfView(view) {
        let added = false

        for (let i = 0, len = this.updateSelfInstances.length; i < len; i++) {
            if (this.updateSelfInstances[i].id === view.id) {
                added = true
                break
            }
        }
        if (!added) {
            this.updateSelfInstances.push(view)
        }
    }

    addView(view) {
        let added = false

        for (let i = 0, len = this.instances.length; i < len; i++) {
            if (this.instances[i].id === view.id) {
                added = true
                break
            }
        }
        if (!added) {
            this.instances.push(view)
        }

    }

    beReady() {
        this.isReady = true
        this.readyHandlers.forEach((handler)=>handler())
    }

    update() {
        this._mergeInstances(this.instances)
        this.instances.forEach(instance => instance.update())
        this.updateSelfInstances.forEach(instance => instance.updateSelf())
    }

    _mergeInstances(instances){
        let arr = []
        let idArr = []
        instances.forEach(instance=>{
            idArr.push(instance.id)
        })

        instances.forEach(instance=>{
            if(!instance.parent){
                arr.push(instance)
            }else{
                if(!this._isSubInstance(instance,idArr)){
                    arr.push(instance)
                }
            }

        })

        this.instances = arr;
    }

    _isSubInstance(instance,arr) {
        if (arr.indexOf(instance.parent.id) !== -1) {
            return true;
        } else if(instance.parent.parent){
            return this._isSubInstance(instance.parent,arr)
        }
    }

}

export default Store
