const config = {
    //1,5-6,8
    highlight:{
        3: '6',
        6: '5',
        9: '3,9,34',
        10:'35',
        11:'5,11',
        12:'16-18,28',
        13:'5,11,12',
        14:'9,15-17',
        15:'14-18,32,33',
        16:'8',
        17:'8,15',
        22: '30',
        23: '22',
        25: '6-12',
        27:'8',
        28:'9-11',
        29:'5-7',
        34:'20',
        35:'7',
        37:'16-18',
        38:'13,18'
    },
    mds:{
        cn:['installation', 'hello_world', 'components', 'communication', 'lifecycle', 'events', 'condition', 'loop', 'form', 'inherit', 'template', 'get_dom', 'thinking_in_omi','pr_env','pr_hello'],
        en:['installation', 'hello_world', 'components', 'communication', 'lifecycle']
    },
    menus:{
        cn:[
            {title: "快速开始", list: [
                {"name": "安装"},
                {"name": "Hello World"},
                {"name": "组件"},
                {"name": "组件通讯"},
                {"name": "生命周期"},
                {"name": "事件处理"},
                {"name": "条件判断"},
                {"name": "循环遍历"},
                {"name": "表单"},
                {"name": "继承"},
                //{"name": "容器系统"},
                {"name": "模板切换"},
                {"name": "获取DOM节点"},
                //{"name": "服务器端渲染"},
                {"name": "Omi的理念"}
            ]},
            {title: "Omi原理", list: [
                {"name": "环境搭建"},
                {"name": "Hello Omi"},
                {"name": "未完待续.."},
                {"name": "..."}

            ]}
        ],
        en:[
            {title: "QUICK START", list: [
                {"name": "Installation"},
                {"name": "Hello World"},
                {"name": "Components"},
                {"name": "Communication"},
                {"name": "Lifecycle"}
                //{"name": "Handling Events"},
                //{"name": "Conditional Rendering"},
                //{"name": "Lists and Keys"},
                //{"name": "Forms"},
                //{"name": "Inheritance"},
                //{"name": "Sever-side Rendering"},
                //{"name": "Thinking In Omi"}
            ]},
            {title: "Principle of Omi", list: [ {"name": "Coming soom.."}]}
        ]
    }

}

export default config;