import Hello from './js/hello.js';

Omi.render(new Hello({ name:'Omi'}),'body');

setTimeout(function(){
    Omi.mapping["world"].data.list ="aa"
    Omi.mapping["world"].update()
},1000);