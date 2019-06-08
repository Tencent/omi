
import Table from './omiu/table'
import Button from './omiu/button'

class Home {
  constructor() {

  }

  render() {
    return <div>
      <Table id='table'></Table>
      <Button id='btn' onClick={this.toggle}>Reload</Button>
    </div>
  }

  toggle() {
    this.table.reload()
  }

}
