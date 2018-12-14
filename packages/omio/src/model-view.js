import { Component } from './component'

export default class ModelView extends Component {
  static observe = true

  beforeInstall() {
    this.data = this.vm.data
  }
}
