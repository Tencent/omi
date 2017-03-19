import Omi from '../../src/index.js'

class TodoHeader extends Omi.Component {

    changeHandler(evt){
        this.store.updateText(evt.target.value)
    }

    render () {
        return `
 	<header id="header">
			<h1>todos</h1>
			<input ref="textBox" onchange="changeHandler"  id="new-todo" value="{{inputValue}}"  placeholder="What needs to be done?" autofocus>
		</header>
        `;
    }
}

export default TodoHeader