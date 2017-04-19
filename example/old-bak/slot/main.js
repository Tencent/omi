import Hello from './hello.js';


Omi.makeHTML('Hello', Hello);
import Test from './test.js';


Omi.makeHTML('Test', Test);

class App extends Omi.Component {
    constructor(data) {
        super(data);
    }

    SFDSF(){
        alert(3)
    }

    render() {
        return  `
        <div> <Test></Test>
            <Hello data-name="Omi"
            data-img="<img src='http://images2015.cnblogs.com/blog/105416/201701/105416-20170120114244046-622856943.png' />"
            onXX="SFDSF"
            onXXX="SFDSdF"
            omi-id="aa" >
                <Test  slot-index="0"><div>sfdsf</div></Test>
                <div slot-index="1">aafd</div>

            </Hello>

            <Hello></Hello>
        </div>
        `;

    }
}

Omi.render(new App(),"#container");