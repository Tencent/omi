import Hello from './hello.js'


class App extends Omi.Component {

    install(){
        this.name = 'Omi'
    }

    handleClick(e) {
        this.name = 'Omi2'
        this.update()
    }

    style() {
        return `
        <style>
        h3{
            color:red;
            cursor: pointer;
        }
        `
    }

    render() {

        return <div>
                    <h3>b</h3>
                    <Hello name={this.name}></Hello>
                </div>
    }
}

document.body.innerHTML+='<h3>aa</h3><div id="ctn"></div>'

Omi.render(new App(),'#ctn')

let ctn =  document.querySelector('#ctn')


describe('base', function() {
    it('test render', function() {
        expect(ctn.innerHTML).toBe('<div __st_0="" __s_0=""><h3 __st_0="" __s_0="">b</h3><div __st_1="" __s_1=""> Hello Omi!</div></div>')
    })
})

//css rendering is async
setTimeout(function(){
    describe('scoped css', function() {
        let outerH3 =  document.querySelector('h3')
        let innerH3 = ctn.querySelector('h3')
        it('', function() {
            expect(window.getComputedStyle(outerH3).color).toBe('rgb(0, 0, 0)')
        })

        it('', function() {
            expect(window.getComputedStyle(innerH3).color).toBe('rgb(255, 0, 0)')
        })
    })

},500)
