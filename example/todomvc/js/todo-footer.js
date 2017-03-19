import Omi from '../../../src/index.js';

class TodoFooter extends Omi.Component {
    render () {
        return`
<footer id="footer">
			<span id="todo-count"><strong>{{left}}</strong> item left</span>
			<ul id="filters">
				<li>
					<a id="filterAll"  onclick="filter(event,'all',this)" class="{{all}}" href="#/">All</a>
				</li>
				<li>
					<a id="filterActive"  onclick="filter(event,'active',this)"  class="{{active}}"  href="#/active">Active</a>
				</li>
				<li>
					<a id="filterCompleted" onclick="filter(event,'completed',this)"  class="{{completed}}"   href="#/completed">Completed</a>
				</li>
			</ul>
			<button id="clear-completed" onclick="clearCompleted()">{{clearWording}}</button>
</footer>
`;
    }
}


export default TodoFooter