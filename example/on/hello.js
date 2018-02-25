import Omi from '../../src/index.js'

class Hello extends Omi.Component {

    install(){
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        console.log(1)
    }

    render() {
        return (
            <div>
                <div onclick={this.clickHandler} style={styles.red}>just red</div>
                <div style={styles.bigblue}>just bigblue</div>
                <div style={[styles.bigblue, styles.red]}>bigblue, then red</div>
                <div style={[styles.red, styles.bigblue]}>red, then bigblue</div>
            </div>
            )
    }
}

const styles = {
    bigblue: {
        fontSize: '30px',
        color: 'blue',
        fontWeight: 'bold',
    },
    red: {
        color: 'red',
    }
}


export default Hello
