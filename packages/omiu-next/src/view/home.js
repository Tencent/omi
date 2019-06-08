
import Table from './omiu/table'
import Button from './omiu/button'

class Home {
  constructor() {

  }

  render() {
    return <div>
      <Table id='table'></Table>
      <Button id='btn' onClick={this.toggle}>Reload</Button>
      <m-button>abc</m-button>
      <m-button runat="server" id='myBtn'>abc</m-button>
    </div>
  }

  toggle() {
    this.table.reload()
  }

  installed(){
    this.myBtn.onClick = function(){
      this.table.clear()
    }
  }
}

// Table Button runat="server"
// m-button runat client default
