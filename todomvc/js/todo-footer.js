import Omi from '../../src/index.js'

class TodoFooter extends Omi.Component {

	filter (evt, type) {
		evt.preventDefault()
		this.store.filter(type)

	}

	clearCompleted () {
		this.store.clearCompleted()
	}

    render () {
        return`
<footer id="footer">
			<span id="todo-count"><strong>{{left}}</strong> item left</span>
			<ul id="filters">
				<li>
					<a id="filterAll"  onclick="filter(event,'all')" class="{{all}}" href="#/">All</a>
				</li>
				<li>
					<a id="filterActive"  onclick="filter(event,'active')"  class="{{active}}"  href="#/active">Active</a>
				</li>
				<li>
					<a id="filterCompleted" onclick="filter(event,'completed')"  class="{{completed}}"   href="#/completed">Completed</a>
				</li>
			</ul>
			{{#hasCompleted}}<button id="clear-completed" onclick="clearCompleted">Clear completed</button>{{/hasCompleted}}
</footer>
`
    }
}

export default TodoFooter