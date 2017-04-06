import Hello from './hello.js';


Omi.makeHTML('Hello', Hello);

class App extends Omi.Component {
    constructor(data) {
        super(data);
    }

    SFDSF(){
        alert(3)
    }

    render() {
        return  `
        <div>
            <Hello data-name="Omi"
            data-img="<img src='http://images2015.cnblogs.com/blog/105416/201701/105416-20170120114244046-622856943.png' />"
            onXX="SFDSF"
            onXXX="SFDSdF"
            omi-id="aa" >
                <div slot-index="0">aafd</div>
                <span slot-index="1" style="color: red;">123</span>
            </Hello>

            <Hello></Hello>
        </div>
        `;

    }
}

Omi.render(new App(),"#container");