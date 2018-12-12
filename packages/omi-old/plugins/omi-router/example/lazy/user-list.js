import Omi from '../../../../dist/omi'
import {Link} from '../../dist/omi-router'

class UserList extends Omi.Component {

    render() {
        return  <ul>
                    <li><Link to="/user/yanagao/category/js" >yanagao</Link></li>
                    <li><Link to="/user/vorshen/category/html" >vorshen</Link></li>
                    <li><Link to="/user/dntzhang/category/css" >dntzhang</Link></li>
                </ul>
    }
}



export default  UserList