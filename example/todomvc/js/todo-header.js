import Omi from '../../../src/index.js';

class TodoHeader extends Omi.Component {
    focusHandler () {
        this.focus = true;
    }

    blurHandler(){
        this.focus = false;
    }

    changeHandler(evt){
        this.store.updateText(evt.target.value)
    }

    render () {
        return `
 	<header id="header">
			<h1>todos</h1>
			<input ref="textBox" onchange="changeHandler" onfocus="focusHandler" onblur="blurHandler" id="new-todo" value="{{inputValue}}"  placeholder="What needs to be done?" autofocus>
		</header>
        `;
    }
}

export default TodoHeader