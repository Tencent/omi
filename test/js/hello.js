import Omi from '../../dist/omix.js'

class Hello extends Omi.Component {
    render(){
        return <div> Hello {this.data.name}!</div>
    }
}


export default Hello

