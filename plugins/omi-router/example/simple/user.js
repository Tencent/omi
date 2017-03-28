import Omi from 'omi';

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


Omi.tag('User',User)

export default  User