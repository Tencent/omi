import Omi from '../../src/index.js'

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
                            <hello name={item}></hello></div>
                    })
                }
            </div>
            )
    }
}

Omi.tag('hello-list', HelloList)

export default HelloList
