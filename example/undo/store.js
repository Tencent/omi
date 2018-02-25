class Store {
    constructor(data, callbacks) {
        this.items = data.items
        this.text = data.text
        const noop = function () {
        }
        this.onAdd = callbacks.add || noop
        this.onRemove = callbacks.remove || noop
        this.onAddItems = callbacks.addItems || noop
        this.onChangeText = callbacks.changeText || noop
        this.onUndo = callbacks.undo || noop
        this.onRedo = callbacks.redo || noop
        this.actionLog = []
        this.actionUndoLog = []
        this.actionRedoLog = []
        this.actionIndex = 0
    }

    add(text, cmd, redo) {

        let item = {id: this.items.length + 1, text: text}
        this.items.push(item)
        this.onAdd(text)

        if (!cmd) {
            this.actionLog.push({
                action: 'add',
                args: [text]
            })
            this.actionUndoLog.push({
                action: 'remove',
                args: [item.id]
            })
            this.actionIndex++
            if (!redo) {
                this.actionRedoLog.length = 0
            }
        }
    }


    remove(id, cmd, redo) {
        let item, index
        for (let i = 0, len = this.items.length; i < len; i++) {
            if (this.items[i].id === id) {
                item = this.items[i]
                index = i
                this.items.splice(i, 1)
                break
            }
        }


        this.onRemove(id)


        if (!cmd) {

            this.actionLog.push({
                action: 'remove',
                args: [id]
            })

            this.actionUndoLog.push({
                action: 'add',
                args: [item.text, index]
            })

            this.actionIndex++
            if (!redo) {
                this.actionRedoLog.length = 0
            }
        }
    }


    undo() {

        if (this.actionIndex > 0) {
            this.actionIndex--
            let log = this.actionUndoLog.pop()
            if (log) {
                this[log.action].apply(this, [...log.args, true])
                this.actionRedoLog.push(this.actionLog.pop())
            }
        }
    }

    redo() {
        let log = this.actionRedoLog.pop()
        if (log) {
            this[log.action].apply(this, [...log.args, false, true])
            this.actionIndex++
        }
    }
}

export default Store