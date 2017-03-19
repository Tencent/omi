import Omi from '../../../src/index.js'

import TodoHeader from './todo-header.js'
import TodoList from './todo-list.js'
import TodoFooter from './todo-footer.js'

Omi.makeHTML('TodoHeader',TodoHeader)
Omi.makeHTML('TodoList',TodoList)
Omi.makeHTML('TodoFooter',TodoFooter)

class Todo extends Omi.Component {
    install () {
        this.editingIndex = -1;
        this.focus = true;
    }
    installed () {
        window.addEventListener('keyup',  (evt)=> {
            if (evt.keyCode === 13) {



                    if (this.editingIndex !== -1) {
                        this.focus = false;
                        var input = this.node.querySelectorAll('.edit')[this.editingIndex];
                        input.blur();
                        this.option.items[this.editingIndex].text = input.value;
                        this.editingIndex = -1;
                    }else{
                        //this.option.items.unshift({
                        //    text: this.textBox.value.trim(),
                        //    isCompleted: false,
                        //    show: true,
                        //    isEditing: false
                        //});
                        //this.focus = true;
                        //this.option.inputValue = '';
                        this.store.add()
                    }
                }


        }, false);
    }
    toggleAll() {
        var isChecked = this.toggleAllBtn.checked;
        this.option.items.forEach(function (item) {
            item.isCompleted = isChecked;
        })
    }

    toggleState (index) {
        this.option.items[index].isCompleted = this.option.items[index].isCompleted ? false : true;
    }
    destroy (index) {
        this.option.items.splice(index, 1);
    }
    clearCompleted () {
        var i = 0,
            items = this.option.items;
        for (; i < items.length; ++i) {
            if (items[i].isCompleted) {
                items.splice(i--, 1);
            }
        }
    }
    filter (evt, type) {
        evt.preventDefault();
        this.option.filter = type;
        this.option.items.forEach(function (item) {
            if (type === 'all') {
                item.show = true;
            } else if (type === 'active' && !item.isCompleted) {
                item.show = true;
            } else if (type === 'completed' && item.isCompleted) {
                item.show = true;
            } else {
                item.show = false;
            }
        });
    }
    edit (currentIndex, li) {
        var input = li.querySelector('.edit');
        this.editingIndex = currentIndex;
        this.option.items[currentIndex].isEditing = true;
        input.focus();
        input.value = input.value;
    }
    onRefresh(){
        var i=0;
        this.option.items.forEach(function (item) {
            if(item.show) {
                this.itemCheckBox[i].checked = item.isCompleted;
                i++;
            }
        }.bind(this));

        this.focus && this.textBox.focus();
    }
    endEdit (currentIndex, input) {
        this.option.items[currentIndex].text = input.value;
        this.option.items[currentIndex].isEditing = false;
    }
    render () {
        return `
	<div>
	    <TodoHeader  />
		<section id="main">
			<input id="toggle-all" nc-id="toggleAllBtn" onchange="toggleAll()"   {{allchecked}} type="checkbox">
			<label for="toggle-all">Mark all as complete</label>
            <TodoList />
		</section>
		<TodoFooter />
    </div>
        `;
    }
}

export default Todo