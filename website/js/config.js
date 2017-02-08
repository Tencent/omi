const config = {
    //1,5-6,8
    highlight:{3: '6', 6: '5', 9: '3,9,34', 19: '22', 22: '6-12',33:'13,18'},
    mds:['installation', 'hello_world', 'components', 'communication', 'lifecycle', 'events', 'condition', 'loop', 'form', 'inherit', 'template', 'get_dom', 'thinking_in_omi'],
    cn_menus:[
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
            {"name": "未完待续"},
            {"name": "..."},
            {"name": "..."},
            {"name": "..."}

        ]}
    ],
    en_menu:[
        {title: "QUICK START", list: [
            {"name": "Installation"},
            {"name": "Hello World"},
            {"name": "Components"},
            {"name": "Lifecycle"},
            {"name": "Handling Events"},
            {"name": "Conditional Rendering"},
            {"name": "Lists and Keys"},
            {"name": "Forms"},
            {"name": "Inheritance"},
            {"name": "Sever-side Rendering"},
            {"name": "Thinking In Omi"}
        ]},
        {title: "Principle of Omi", list: [ {"name": "Scoped CSS"}]}
    ]

}

export default config;