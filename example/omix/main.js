import Todo from './todo.js';
import Omi from '../../src/index.js';

Omi.dataOnly = true;
Omi.render(new Todo(),'body',true);