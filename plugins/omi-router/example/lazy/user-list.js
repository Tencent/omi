import Omi from 'omi';

class UserList extends Omi.Component {

    render() {
        return  <ul>
                    <li><a omi-router to="/user/yanagao/category/js" >yanagao</a></li>
                    <li><a omi-router to="/user/vorshen/category/html" >vorshen</a></li>
                    <li><a omi-router to="/user/dntzhang/category/css" >dntzhang</a></li>
                </ul>
    }
}


Omi.tag('user-list',UserList)

export default  UserList