import Omi from '../../../src/index.js'

import TodoHeader from './todo-header.js'
import TodoList from './todo-list.js'
import TodoFooter from './todo-footer.js'

Omi.makeHTML('TodoHeader',TodoHeader)
Omi.makeHTML('TodoList',TodoList)
Omi.makeHTML('TodoFooter',TodoFooter)

class Todo extends Omi.Component {

    installed () {
        window.addEventListener('keyup',  (evt)=> {
            if (evt.keyCode === 13) {
                if (this.store.data.editing) {
                    var input = this.list.node.querySelector('.editing .edit')
                    input.blur();
                } else {
                    this.store.add()
                }
            }
        }, false);
    }

    toggleAll() {
        this.store.toggleAll()
    }

    render () {
        return `
	<div>
	    <TodoHeader  />
		<section id="main">
			<input id="toggle-all" onchange="toggleAll"   {{allchecked}} type="checkbox">
			<label for="toggle-all">Mark all as complete</label>
            <TodoList name="list" />
		</section>
		<TodoFooter />
    </div>
        `;
    }
}

export default Todo