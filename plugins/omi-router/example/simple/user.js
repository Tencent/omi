import Omi from 'omi'

class User extends Omi.Component {

    beforeRender(){
        this.data.name = this.$store.data[1]
        this.info = this.queryInfo(this.data.name)
        this.data.age = this.info.age
        this.data.sex = this.info.sex
    }

    queryInfo(name) {
        this.mockData = {
            'yanagao': {age: 18, sex: 'female'},
            'vorshen': {age: 20, sex: 'male'},
            'dntzhang': {age: 22, sex: 'male'}
        }
        return this.mockData[name]
    }

    back(){
        history.back()
    }

    render() {
        return  `
      	<div >
      	    <button onclick="back">back</button>
      	    <ul>
      	        <li>name:{{name}}</li>
      	        <li>age:{{age}}</li>
      	        <li>sex:{{sex}}</li>
      	    </ul>
      	</div>
  		`
    }
}


Omi.tag('User',User)

export default  User