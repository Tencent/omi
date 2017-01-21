import Hello from './js/hello.js';

import World from './js/world.js';

let hello = new Hello({ name:'Omi'});

Omi.render(hello,'body');

let world = new World({name:"abcd",list:'{"name":"Latch", "album":"Disclosure", "date":"2013"}'});
hello.addComponent("afterEnd",".test",world);

setTimeout(function(){
    Omi.mapping["world"].data.list ="aa"
    Omi.mapping["world"].update();
},1000);

setTimeout(function(){
    hello.removeComponent(world);
},2000);

setTimeout(function(){
    hello.addComponent("afterEnd",".test",world);
},3000);