import Omi from '../../../src/index.js';

class TodoList extends Omi.Component {

    destroy(id){
        this.store.destroy(id)
    }

    toggleState(id){
        this.store.toggleState(id)
    }

    render () {
        return `
            <ul id="todo-list">
				{{#items}}
				{{#show}}
				<li ondblclick="edit({{id}},this)" class="{{#isCompleted}}completed{{/isCompleted}} {{#isEditing}}editing{{/isEditing}}">
					<div class="view" >
						<input  onclick="toggleState({{id}})" class="toggle" type="checkbox"  {{checked}} nc-class="itemCheckBox" ><label >{{text}}</label>
						<button  onclick="destroy({{id}})" class="destroy"></button>
					</div>
					<input class="edit" onblur="endEdit({{id}},this)" nc-class="itemTextBox" value="{{text}}">
				</li>
				{{/show}}
				{{/items}}
			</ul>
        `;
    }
}

export default TodoList