import Hello from './js/hello.js';

var hello = new Hello({ name:'Omi'});
Omi.render(hello,'body');

setTimeout(function(){
    Omi.get("world").data.list ="aa"
    hello.update()
},1000);