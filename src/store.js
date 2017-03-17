class Store {
    constructor(isReady) {
        this.readyHandlers = []
        this.isReady = isReady
        this.instances = []
    }

    ready(readyHandler) {
        if (this.isReady) {
            readyHandler()
            return
        }
        this.readyHandlers.push(readyHandler)
    }

    beReady() {
        this.isReady = true
        this.readyHandlers.forEach((handler)=>handler())
    }

    update() {
        this._mergeInstances()
        this.instances.forEach(instance=>instance.update())
    }

    _mergeInstances(){
        let arr = []
        let idArr = []
        this.instances.forEach(instance=>{
            idArr.push(instance.id)
        })

        this.instances.forEach(instance=>{
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
