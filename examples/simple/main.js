import { render, WeElement } from '../../src/omi'
import './hello-element'

class MyApp extends WeElement {

    onClick = (evt) => {
        console.log(this)
    }

    install () {
        this.data.abc = 'abc'
        this.data.passToChild = '123'
    }

    installed(){
        this.data.passToChild = '12345'
        this.data.abc = 'abcde'
        this.update()    
    }

    css() {
        return `
         div{
             color: green;
         }`
    }

    render() {
        return (
            <div onClick={this.onClick}>
                Hello {this.props.name} {this.data.abc}
                <hello-element prop-from-parent={this.data.passToChild} msg="Omi v4.0"></hello-element>
            </div>
        )
    }
}


customElements.define('my-app', MyApp)

render(<my-app name='WeElement'></my-app>, 'body')
