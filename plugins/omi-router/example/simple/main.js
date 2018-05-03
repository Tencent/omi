
import Omi from '../../../../dist/omi'
import OmiRouter,{Link} from '../../dist/omi-router'

import Home from './home.js'
import About from './about.js'
import User from './user.js'
import UserList from './user-list.js'


class App extends Omi.Component {

    installed() {

        OmiRouter.init({
            routes: [
                {path: '/', component: Home},
                {path: '/about', component: About},
                {path: '/user-list', component: UserList},
                {path: '/user/:name/category/:category', component: User}
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
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/about" >About</Link></li>
                        <li><Link to="/user-list" >UserList</Link></li>
                    </ul>
                    <div id="view">
                    </div>
                </div>
    }
}


Omi.render(<App />,"#container")