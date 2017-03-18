var koa = require('koa');
var serve = require('koa-static');
var router = require('koa-route');
var app = koa();
var jsdom = require('jsdom');
var Omi = require("../../dist/omi.server.js")(jsdom.jsdom().defaultView);

var Todo = require('./component/todo')(Omi);



app.use(serve(__dirname + '/component'));

app.use(router.get('/todos', function *(){
    var  str = require('fs').readFileSync(__dirname + '/view/index.html', 'utf8');
    var todo = new Todo({ items: ["Omi","dntzhang",'AlloyTeam',"腾讯"] },{server:true});
    this.body = Omi.template(str, {
        todo:  todo.HTML
    });
}));


app.listen(3000);