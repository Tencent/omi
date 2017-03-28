import Omi from 'omi';
import OmiRouter from '../../index.js';

class Home extends Omi.Component {
    render() {
        return  `
      	<div >Home</div>
  		`;
    }
}

class About extends Omi.Component {
    render() {
        return  `
      	<div >About</div>
  		`;
    }
}

class User extends Omi.Component {

    beforeRender(){
        this.data.name = this.$store.data[1]
    }

    render() {
        return  `
      	<div >{{name}}</div>
  		`;
    }
}

Omi.tag('Home',Home)
Omi.tag('About',About)
Omi.tag('User',User)

OmiRouter.init({
    routes : [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/user/:name', component: User },

    ],
    renderTo:"#view"
});

class App extends Omi.Component {
    constructor(data) {
        super(data);
    }

    style(){
       return `
        ul{
            border-bottom: 1px solid #ccc;
            padding-bottom:5px;
        }
        li{
            display:inline-block;
        }
        `
    }

    render() {
        return  `
        <ul>
            <li><a omi-router to="/" >Home</a></li>
            <li><a omi-router to="/about" >About</a></li>
            <li><a omi-router to="/user/dntzhang" >User</a></li>
        </ul>
        `;
    }
}


Omi.render(new Home(),"#view");
Omi.render(new App(),"#links");