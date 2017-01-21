import Hello from './js/hello.js';

var hello = new Hello({ name:'Omi'});

Omi.render(hello, 'body', true);

setTimeout(function(){
    console.log(33)
    hello.setComponentOrder([1,0]);

},1000);

setTimeout(function(){
    hello.setComponentOrder([0,1]);
},2000);


setTimeout(function(){

    Omi.mapping["sh"].setComponentOrder([1,0]);

},4000);

setTimeout(function(){

    Omi.mapping["sh"].setComponentOrder([0,1]);

},5000);