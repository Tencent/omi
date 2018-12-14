import Component from './component'

export default class ModelView extends Component {
  static observe = true

  static mergeUpdate = true
  
  beforeInstall() {
    this.data = this.vm.data
  }
}
