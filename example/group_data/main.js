import Hello from './hello.js';


Omi.makeHTML('Hello', Hello);

class App extends Omi.Component {
    constructor(data) {
        super(data);


        this.simple ={name:'webpack'};

        this.testGroupData = [{name: 'gp1'}, {name: 'gp2'}];

        this.aaa = {};
        this.aaa.testData = [{name: 'Omi'}, {name: 'dntzhang'}, {name: 'AlloyTeam'}];

        this.complexData ={
            a:{
                b:{
                    c:[
                        {
                            e:[{
                                name:'ComplexData Support1'
                            },{
                                name:'ComplexData Support2'
                            }]
                        },
                        {
                            name: 'ComplexData Support3'
                        }
                    ]
                }
            }
        };
    }

    render() {
        return  `
        <div>
            <Hello data="simple" />
            <Hello data="complexData.a.b.c[1]" />

            <Hello group-data="testGroupData" />
            <Hello group-data="testGroupData" />

            <Hello group-data="aaa.testData" />
            <Hello group-data="aaa.testData" />
            <Hello group-data="aaa.testData" />

            <Hello group-data="complexData.a.b.c[0].e" />
            <Hello group-data="complexData.a.b.c[0].e" />
        </div>
        `;

    }
}

Omi.render(new App(),"#container");

