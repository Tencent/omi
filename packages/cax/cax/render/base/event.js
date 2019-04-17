import option from './stage-propagation-tag'

class Event {
  constructor() {
    this.propagationStopped = false
    this.stageX = null
    this.stageY = null
    this.pureEvent = null
  }

  stopPropagation() {
    option.stagePropagationStopped[this.type] = true
    this.propagationStopped = true
  }

  preventDefault() {
    this.pureEvent.preventDefault()
  }
}

export default Event
