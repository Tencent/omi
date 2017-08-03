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
        this.readyHandlers.forEach(handler => handler())
    }

    update() {
        this._mergeInstances()
        this._mergeSelfInstances()
        this.instances.forEach(instance => instance.update())
        this.updateSelfInstances.forEach(instance => instance.updateSelf())
    }

    _mergeSelfInstances() {
        let arr = []
        this.updateSelfInstances.forEach(instance => {
            if (!this._checkSelfUpdateInstance(instance)) {
                arr.push(instance)
            }
        })
        this.updateSelfInstances = arr
    }

    _mergeInstances() {
        let arr = []
        this.idArr = []
        this.instances.forEach(instance => {
            this.idArr.push(instance.id)
        })

        this.instances.forEach(instance => {
            if (!instance.parent) {
                arr.push(instance)
            } else {
                if (!this._isSubInstance(instance)) {
                    arr.push(instance)
                }
            }
        })

        this.instances = arr
    }

    _checkSelfUpdateInstance(instance) {
        if (this.idArr.indexOf(instance.id) !== -1) {
            return true
        } else if (instance.parent) {
            return this._checkSelfUpdateInstance(instance.parent)
        }
        // what's default result?
    }

    _isSubInstance(instance) {
        if (this.idArr.indexOf(instance.parent.id) !== -1) {
            return true
        } else if (instance.parent.parent) {
            return this._isSubInstance(instance.parent)
        }
        // what's default result?
    }
}

export default Store
