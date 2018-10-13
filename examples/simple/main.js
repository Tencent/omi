import { render, WeElement } from '../../src/omi'
import './hello-element'

class MyApp extends WeElement {

    onClick = (evt) => {

    }

    onAbc = (evt) => {
        this.data.abc = ' by ' + evt.detail.name
        this.update()   
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

    render(props, data) {
        return (
            <div onClick={this.onClick}>
                Hello {props.name} {data.abc}
                <hello-element onAbc={this.onAbc} prop-from-parent={data.passToChild} msg="WeElement"></hello-element>
            </div>
        )
    }
}


customElements.define('my-app', MyApp)

render(<my-app name='Omi v4.0'></my-app>, 'body')
