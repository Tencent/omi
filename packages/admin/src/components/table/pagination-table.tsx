import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'

import '@omiu/table'
import '@omiu/pagination'

interface Props {

}

const tagName = 'pagination-table'
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName]: Omi.Props & Props
        }
    }
}

@tag(tagName)
export default class extends WeElement<Props> {
    static css = sheet.target


    dataSource = [{
        id: 1,
        name: 'xwang',
        age: 18,
        address: 'Tencent'
    }, {
        id: 2,
        name: 'dntzhang',
        age: 12,
        address: 'Tencent',
        $config: {
            bgColor: 'rgb(247 176 176 / 32%)'
        }
    },
    {
        id: 3,
        name: 'lucy',
        age: 12,
        address: 'Tencent',

    }, {
        id: 4,
        name: 'john',
        age: 12,
        address: 'Tencent',
        $config: {
            bgColor: 'rgb(230 162 60 / 34%)'
        }
    }, {
        id: 5,
        name: 'tim',
        age: 12,
        address: 'Tencent'
    }, {
        id: 6,
        name: 'tim',
        age: 12,
        address: 'Tencent'
    }, {
        id: 7,
        name: 'tim',
        age: 12,
        address: 'Tencent'
    }, {
        id: 8,
        name: 'tim',
        age: 12,
        address: 'Tencent'
    }
    ]

    columns = [{
        title: 'ID',
        render: (item: { id: number }) => (<strong>{item.id}</strong>),
    }, {
        title: 'Name',
        key: 'name',
    }, {
        title: 'Age',
        key: 'age',
    }, {
        title: 'Address',
        key: 'address',
    }, {
        title: '操作',
        align: 'right',
        render: (item: { id: number }) => (
            //onclick 会绑定多次的问题
            <o-icon-delete data-item-id={item.id} onClick={this.onClick} style="cursor:pointer;font-size:20px;" title="删除"></o-icon-delete>
        )
    }]

    onClick = (evt) => {
        console.log(Number(evt.currentTarget.dataset.itemId))
        this.deleteItemById(Number(evt.currentTarget.dataset.itemId))
    }

    deleteItemById(id) {
        const index = this.dataSource.indexOf(this.dataSource.find(item => item.id === id))
        if (index !== -1) {
            this.dataSource.splice(index, 1)
            this.update()
        }

    }

    render(props) {
        return <div>

            <div class={tw`px-2`}>
                <h4 class={tw`py-2 text-sm`}>基础表格</h4>
                <o-table
                    checkbox={false}
                    stripe={false}
                    border={false}
                    compact={false}
                    columns={this.columns} dataSource={this.dataSource}></o-table>
                <o-pagination total="25" current-page="1" page-size="5" class={tw`pt-3`}></o-pagination>
            </div>

        </div>
    }
}



