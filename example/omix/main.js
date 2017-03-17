import Todo from './todo.js';
import Omi from '../../src/index.js';
import store from './store.js';

Omi.dataFromStore = true

Omi.render(new Todo(),'body',true);