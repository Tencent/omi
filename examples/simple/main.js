import { render, Component } from '../../dist/omi.esm';

class Hello extends Component {
    render() {
        return <div> {this.props.name}</div>
    }
}

class App extends Component {
    install() {
        this.name = 'Omi'
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.name = 'Hello Omi !' 
        this.update()
    }

    style() {
        return `h3{
				      cursor:pointer;
	            color: ${Math.random() > 0.5 ? 'red' :'green'};
	        }`
    }

	staticStyle() {
        return `div{
	            font-size:20px;
	        }`
	}
	
    render() {
        return (
			<div>
				<Hello name={this.name}></Hello>
				<h3 onclick={this.handleClick}>Scoped css and event test! click me!</h3>
			</div>
		)
    }
}

render(<App />, 'body')