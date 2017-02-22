import Root from './config.js'
import Omi from 'omi'
import UserList from '../component/user_list/index.js'

Omi.makeHTML('UserList', UserList)

class Main extends Omi.Component {
    constructor(data) {
        super(data)
    }

    installed() {
        window.onscroll = () => this.loadMore()
        this.requestData(data => this.list.appendUsers(data))
    }

    loadMore() {
        const body = document.body,
            html = document.documentElement,
            height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight),
            vp_height = window.innerHeight

        if (height - document.body.scrollTop - vp_height < 200) {
            this.requestData(data => this.list.appendUsers(data))
        }
    }

    requestData(callback) {
        if (Root.isDev) {
            require.ensure([], ()=> {
                callback(require('./mock_data.js').default)
            })
            return
        }else{

        }
    }

    render() {
        return `
    <div class="main">
        <UserList name="list" />
    </div>`
    }
}

Omi.render(new Main(),'body')


