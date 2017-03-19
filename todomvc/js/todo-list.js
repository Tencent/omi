import Omi from '../../../src/index.js';

class TodoList extends Omi.Component {

    destroy(id){
        this.store.destroy(id)
    }

    toggleState(id){
        this.store.toggleState(id)
    }

	edit(id,dom){
		this.store.edit(id)
		var input = dom.querySelector('.edit');
		input.focus();
		input.value = input.value;
	}

	endEdit (id,input) {
		this.store.endEdit(id,input.value)
	}

    render () {
        return `
            <ul id="todo-list">
				{{#items}}
				{{#show}}
				<li ondblclick="edit({{id}},this)" class="{{#isCompleted}}completed{{/isCompleted}} {{#isEditing}}editing{{/isEditing}}">
					<div class="view" >
						<input  onclick="toggleState({{id}})" class="toggle" type="checkbox"  {{checked}}  ><label >{{text}}</label>
						<button  onclick="destroy({{id}})" class="destroy"></button>
					</div>
					<input class="edit" onblur="endEdit({{id}},this)" value="{{text}}">
				</li>
				{{/show}}
				{{/items}}
			</ul>
        `;
    }
}

export default TodoList