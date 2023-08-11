import { tag, h, WeElement, OverwriteProps } from 'omi'

import * as css from './index.scss'
import '@omiu/checkbox'
import '@omiu/button'

export type Attrs = {
    data?: [];
    value?: [];
    titles?: [];
}

const tagName = 'o-transfer'


class Native {
    constructor(table: String, key: number, disable?: Boolean) {
        this.table = table;
        this.key = key;
        this.disable = typeof disable == "undefined" ? false : disable;
    }
    table: String
    key: number
    disable: Boolean
}

export type Props = OverwriteProps<Attrs, { count: Number, data: Array<Native>, theValue: Array<Number>, titles?: Array<String>, beClick1: Array<Number>, beClick2: Array<Number>, value: Array<Number>, dataNumber: Number, valueNumber: Number }>

@tag(tagName)
export default class Transfer extends WeElement<Props> {
    static css = css.default ? css.default : css

    static defaultProps = {
        data: [],
        theValue: [],
        value: [],
        titles: ["列表1", "列表2"],
        beClick1: [],
        beClick2: [],
        dataNumber: 0,
        valueNumber: 0,
    }

    static propTypes = {
        data: Array<Native>,
        theValue: Array<Number>,
        value: Array<Number>,
        titles: Array<String>,
        beClick1: Array<Number>,
        beClick2: Array<Number>,
        dataNumber: Number,
        valueNumber: Number
    }

    // 组件打包之后value会被输入值绑定不会改变 因此用theValue接收value的值
    install() {
        this.props.value.map(item => {
            this.props.theValue.push(item);
        })
        this.numberUpdata()
    }

    // 更新两个盒子中的数量
    numberUpdata = () => {
        this.props.dataNumber = this.props.data.length - this.props.theValue.length;
        this.props.valueNumber = this.props.theValue.length;
    }
    // 根据key值寻找在数组中的下标
    findIndex = (key: Number, arr: Array<Native>) => {
        let ans = -1;
        arr.forEach((item, index) => {
            if (item.key == key) {
                ans = index;
            }
        })
        return ans;
    }

    // 获取可以被点击的左边的lable数量
    getDataNumber = () => {
        let number = 0;
        this.props.data.map(item => {
            if (this.props.theValue.indexOf(item.key) == -1 && ('disable' in item && item.disable)) {
                number++;
            }
        })
        return this.props.data.length - this.props.theValue.length - number;
    }

    // 获取可以被点击的右边的lable数量
    gettheValueNumber = () => {
        let number = 0;
        this.props.data.map(item => {
            if (this.props.theValue.indexOf(item.key) != -1 && ('disable' in item && item.disable)) {
                number++;
            }
        })
        return this.props.theValue.length - number;
    }

    // 左边的label被点击
    labelClick = (key: Number) => {
        if (this.props.beClick1.indexOf(key) == -1) {
            this.props.beClick1.push(key);
        }
        else {
            this.props.beClick1.splice(this.props.beClick1.indexOf(key), 1);
        }
        this.forceUpdate()
    }

    // 右边的label被点击
    theValueLableClick = (key: Number) => {
        if (this.props.beClick2.indexOf(key) == -1) {
            this.props.beClick2.push(key);
        }
        else {
            this.props.beClick2.splice(this.props.beClick2.indexOf(key), 1);
        }
        this.forceUpdate()
    }

    // 中间第一个按钮
    arrowClick = () => {
        while (this.props.beClick2.length) {
            this.props.beClick2.pop();
            this.props.theValue.pop();
        }
        this.numberUpdata();
        this.forceUpdate()
    }

    // 中间第二个按钮
    forwardClick = () => {
        while (this.props.beClick1.length) {
            this.props.theValue.push(this.props.beClick1[this.props.beClick1.length - 1]);
            this.props.beClick1.pop();
        }
        this.numberUpdata();
        this.forceUpdate()
    }

    // 全选左边的label 考虑不能为disable 
    SelectAll = () => {
        if (this.props.beClick1.length < this.getDataNumber()) {
            this.props.data.map((item, index) => {
                if (this.props.theValue.indexOf(item.key) == -1 && this.props.beClick1.indexOf(item.key) == -1 && (!('disable' in this.props.data[index]) || this.props.data[index].disable != true)) {
                    this.props.beClick1.push(item.key);
                }
            })
        }
        else {
            while (this.props.beClick1.length) {
                this.props.beClick1.pop();
            }
        }
        this.forceUpdate()
    }

    // 全选右边的label 考虑不能为disable 
    SelecttheValueAll = () => {
        if (this.props.beClick2.length < this.gettheValueNumber()) {
            this.props.theValue.map(item => {
                if (this.props.beClick2.indexOf(item) == -1 && (!('disable' in this.props.data[this.findIndex(item, this.props.data)]) || this.props.data[this.findIndex(item, this.props.data)].disable != true)) {
                    this.props.beClick2.push(item);
                }
            })
        }
        else {
            while (this.props.beClick2.length) {
                this.props.beClick2.pop();
            }
        }
        this.forceUpdate()
    }

    judgeDataChecked = () => {
        return this.getDataNumber() != 0 && this.getDataNumber() == this.props.beClick1.length;
    }

    judgeDataindeterminate = () => {
        return this.props.beClick1.length > 0 && this.getDataNumber() > this.props.beClick1.length;
    }

    judgetheValueChecked = () => {
        return this.gettheValueNumber() != 0 && this.gettheValueNumber() == this.props.beClick2.length;
    }

    judgetheValueindeterminate = () => {
        return this.props.beClick2.length > 0 && this.gettheValueNumber() > this.props.beClick2.length
    }

    render(props: Props) {
        return (
            // <h.f></h.f> or <></> are supported
            <h.f>
                <div class="transferBox">
                    <div class="transferBoxHeader">
                        <div class="headerLeft">
                            <o-checkbox label={props.titles[0]} checked={this.judgeDataChecked()} indeterminate={this.judgeDataindeterminate()} onchange={this.SelectAll}></o-checkbox>
                        </div>
                        <div class="numberIdea">{props.beClick1.length}/{props.dataNumber}</div>
                    </div>

                    <ul>
                        {
                            props.data.map(item => {
                                return props.theValue.indexOf(item.key) === -1 && <li ><o-checkbox label={item.table} disabled={item.disable} checked={props.beClick1.indexOf(item.key) != -1} onChange={() => this.labelClick(item.key)} ></o-checkbox></li>
                            })
                        }
                    </ul>
                </div>
                <div class="transferButton">
                    <div class="transferButtonBody">
                        <o-button type="primary" onClick={this.arrowClick}>&lt;</o-button>
                        <o-button type="primary" onClick={this.forwardClick}>&gt;</o-button>
                    </div>
                </div>
                <div class="transferBox">
                    <div class="transferBoxHeader">
                        <div class="headerLeft">
                            <o-checkbox label={props.titles[1]} checked={this.judgetheValueChecked()} indeterminate={this.judgetheValueindeterminate()} onchange={this.SelecttheValueAll}></o-checkbox>
                        </div>
                        <div class="numberIdea">
                            {props.beClick2.length} / {props.valueNumber}
                        </div>
                    </div>
                    <ul>
                        {
                            props.data.map(item => {
                                return props.theValue.indexOf(item.key) !== -1 && <li><o-checkbox label={item.table} disabled={item.disable} onChange={() => this.theValueLableClick(item.key)} checked={props.beClick2.indexOf(item.key) != -1}></o-checkbox></li>
                            }
                            )}
                    </ul>
                </div>
            </h.f>
        )
    }
}