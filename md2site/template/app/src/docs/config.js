let config = {
    menus: {
        cn: [
            {
                active: true,
                title: '快速开始',
                currentIndex: 0,
                list: [
                    {
                        name: '安装',
                        md: 'installation'
                    },
                    {
                        name: '组件',
                        md: 'components',
                        highlight: {
                            2: '3,9,34'
                        }
                    },
                    {
                        name: '组件通讯',
                        md: 'communication',
                        highlight: {
                            0: '34',
                            1: '5,11'
                        }
                    }
                ]
            }
        ],
        en: [
            {
                active: true,
                title: 'QUICK START',
                currentIndex: 0,
                list: [
                    {name: 'Installation', md: 'installation'},
                    {name: 'Components', md: 'components'},
                    {name: 'Communication', md: 'communication'}
                ]
            }
        ]
    }
}

export default config;