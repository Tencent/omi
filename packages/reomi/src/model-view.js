import WeElement from './we-element'

export default class ModelView extends WeElement {
  static observe = true

  static mergeUpdate = false

  beforeInstall() {
    this.data = this.vm.data
  }

  observed() {
    this.vm.data = this.data
  }
}
