import Omi from '../../src/index.js'
import Hello from './hello'
class HelloList extends Omi.Component {

    install(){
        this.items= ["cccc"]
        console.log(22)
    }

    installed(){
        this.items= ["aaaa","bb","cc","bb","cc","bb","cc"]
        console.log(11)
        this.update()
    }

    render() {
        return (
            <div>
                {
                    this.items.map((item, index) => {
                        return <div vvv={index} ref={`item${index}`}>
                            <Hello name={item}></Hello></div>
                    })
                }
            </div>
            )
    }
}


export default HelloList
