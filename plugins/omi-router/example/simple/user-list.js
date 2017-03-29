import Omi from 'omi';

class UserList extends Omi.Component {

    render() {
        return  `
      	 <ul>
      	    <li><a omi-router to="/user/yanagao" >yanagao</a></li>
            <li><a omi-router to="/user/vorshen" >vorshen</a></li>
            <li><a omi-router to="/user/dntzhang" >dntzhang</a></li>
        </ul>
  		`;
    }
}


Omi.tag('UserList',UserList)

export default  UserList