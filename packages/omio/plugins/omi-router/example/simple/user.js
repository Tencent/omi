

import Omi from '../../../../dist/omi'


class User extends Omi.Component {

    install(){
        let params =  this.$route.params
        this.name = params.name

        this.category = params.category
        this.info = this.queryInfo(this.name)
        this.age = this.info.age
        this.sex = this.info.sex
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
        return  <div >
                    <button onclick={this.back.bind(this)}>back</button>
                    <ul>
                        <li>name:{this.name}</li>
                        <li>age:{this.age}</li>
                        <li>sex:{this.sex}</li>
                        <li>category:{this.category}</li>
                    </ul>
                </div>

    }
}




export default  User