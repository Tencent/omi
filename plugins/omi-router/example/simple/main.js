import Omi from '../../../../src/index.js';
import OmiRouter from '../../omi-router.js';

OmiRouter.init();

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
            <li><a omi-router to="/" component="Home" renderTo="#view">Home</a></li>
            <li><a omi-router to="/about" component="About" renderTo="#view">About</a></li>
            <li><a omi-router to="/topics" component="Topics" renderTo="#view">Topics</a></li>
        </ul>
        `;
    }
}

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

class Topics extends Omi.Component {
    render() {
        return  `
      	<div >Topics</div>
  		`;
    }
}

Omi.tag('Home',Home)
Omi.tag('About',About)
Omi.tag('Topics',Topics)

Omi.render(new Home(),"#view");
Omi.render(new App(),"#links");