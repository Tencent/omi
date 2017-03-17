class Omix {
    constructor(isReady) {
        this.readyHandlers = []
        this.isReady = isReady
    }

    ready(readyHandler){
        if(this.isReady){
            readyHandler()
            return
        }
        this.readyHandlers.push(readyHandler)
    }

    beReady(){
        this.isReady  = true
        this.readyHandlers.forEach((handler)=>handler())
    }



}

export default Omix
