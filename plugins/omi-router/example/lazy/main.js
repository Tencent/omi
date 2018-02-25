import Omi from 'omix'
import OmiRouter from '../../index.js'

import Home from './home.js'
import About from './about.js'
import UserList from './user-list.js'

class App extends Omi.Component {

    install() {
        OmiRouter.init({
            routes: [
                {path: '/', component: Home},
                {path: '/about', component: About},
                {path: '/user-list', component: UserList},
                {path: '/user/:name/category/:category', component: () => import('./user.js')}
            ],
            renderTo: "#view",
            defaultRoute: '/',
            root: this
        })
    }

    style(){
       return `
        ul{
            border-bottom: 1px solid #ccc;
            padding-bottom:5px;
        }
        li{
            display:inline-block;
            margin-left:4px;
        }
        #view li{
            display:block;
        }
        #view ul{
            border-width: 0px;
        }
        `
    }

    render() {
        return <div>
                    <ul>
                        <li><a omi-router to="/" >Home</a></li>
                        <li><a omi-router to="/about" >About</a></li>
                        <li><a omi-router to="/user-list" >UserList</a></li>
                    </ul>
                    <div id="view">
                    </div>
                </div>
    }
}


Omi.render(new App(),"#container")