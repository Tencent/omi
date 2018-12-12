import { render, Component } from '../../src/omi';

class Hello extends Component {
    render() {
        return <h3> {this.props.name}</h3>
    }
}

class App extends Component {
    install() {
        this.name = 'Omi'
    }

    handleClick = (e) => {
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