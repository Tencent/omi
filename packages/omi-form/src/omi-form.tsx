import { tag, h, WeElement, OverwriteProps } from 'omi'

import * as css from './omi-form.scss'
import { unit } from './app-class'
import '@omiu/button'
import '@omiu/input'
import "@omiu/checkbox"
import "@omiu/date-picker"
// import "../date-picker/src/index.tsx"

const TYPE = {
  input: "o-input",
  button: "o-button",
  checkbox: "o-checkbox",
  datePicker: "o-date-picker"
}
export {
  TYPE
}

export type Attrs = {
  options: unit
}
const tagName = 'omi-form'
export type Props = OverwriteProps<Attrs, { options: unit, refArr: any, validateList: any, message: String }>

@tag(tagName)
export default class Counter extends WeElement<Props> {

  static css = css.default ? css.default : css

  static defaultProps = {
    options: {},
    refArr: {},
    validateList: {},
    message: ""
  }

  static propTypes = {
    options: unit,
    refArr: {},
    validateList: {},
    message: String
  }

  // 验证收集
  // 如果有require 且有pattern 则校验pattern 若无则检验是否为空
  // 如果validate 为函数 则用函数校验
  // 如果validate 有多个 则对应需要校验的值有多个
  validateGather = (item: any) => {
    this.props.validateList[item.field] = [];
    if (item.required == true) {
      if (item.pattern) this.props.validateList[item.field].push(item.pattern ?? true)
      // console.log(Object.prototype.toString.call(item.pattern))
    }
    else {
      if ((typeof item.validate) == "function")
        this.props.validateList[item.field].push(item.validate);
      else {
        if (Array.isArray(item.validate))
          this.props.validateList[item.field].push(...item.validate)
        else {
          this.props.validateList[item.field].push(item.validate);
        }
      }
    }
    this.props.message = "";
  }

  // 验证
  validated = (filId: any, value: any) => {
    let rule = this.props.validateList[filId];
    if (!rule) return;
    if (rule[0] === true) {
      this.props.message = (value == undefined || value == null || value == "") ? "不能为空" : "";
    }
    // 判断是否为正则对象
    else if (Object.prototype.toString.call(rule[0]) == '[object RegExp]') {
      if (value == undefined || value == null || value == "")
        this.props.message = "不能为空";
      else
        this.props.message = (value.text(rule[0])) ? "未通过验证" : "";
    }
    else if ((typeof rule[0]) == "function") {
      this.props.message = rule[0](value);
    }
    else {
      if (rule.length > 1) {
        if (rule.length == value.length) {
          for (let i = 0; i < value.length; ++i) {
            this.props.message = this.ruleValidate(rule[i], value[i]);
            if (this.props.message != "") break;
          }
        }
        else {
          this.props.message = rule.message;
        }
      }
      else {
        this.props.message = this.ruleValidate(rule[0], value);
      }
    }
    // this.forceUpdate()
  }
  // rule验证
  ruleValidate = (rule: any, value: any) => {
    if (!rule.required) return "";
    if (rule.type && rule.type != typeof value) return rule.message;
    if (rule.min && value.length < rule.min) return rule.message;
    if (rule.max && value.length > rule.max) return rule.message;
    return "";
  }

  // validateList: {}
  // checkbox处理
  checkboxPro = (item: any) => {
    this.validateGather(item);
    return (
      <div class="form-item">
        <div>
          <ul>
            <div class="title-box">
              {item.title}
            </div>
            {item.options.map((aitem, index) => {
              const props = {
                label: item.options[index].label,
                value: item.options[index].value,
                field: item.field
              }
              return <li><item.type {...props} onchange={this.checkboxValueChange}></item.type></li>
            })}
          </ul>
        </div>
      </div>
    )
  }

  // 处理checkbox值变化
  checkboxValueChange = (e: any) => {
    let field = e.path[0].props.field,
      value = this.props.options.value,
      newValue = e.path[0].props.value;
    if (!value[field]) value[field] = [];
    if (value[field].indexOf(newValue) == -1)
      value[field].push(newValue);
    else
      value[field].splice(value[field].indexOf(newValue), 1);
    this.validated(field, value[field]);
  }

  // 通用组件处理
  generalPro = (item: any) => {
    this.validateGather(item);
    const props = item;
    if (item.type == TYPE.input) props.size = "medium"
    return (
      <div class="form-item">
        <div class="title-box">{item.title}</div>
        <div>
          <item.type  {...props} onchange={this.valueChange}></item.type>
        </div>
      </div>
    )
  }

  // 处理普通的值变化
  valueChange = (e: any) => {
    let field = e.path[0].props.field;
    this.props.options.value[field] = e.detail;
    this.validated(field, this.props.options.value[field]);
  }

  // 组件处理
  actionPro = (item: any) => {
    if (item.type == TYPE.checkbox) {
      return this.checkboxPro(item);
    }
    else {
      return this.generalPro(item);
    }
  }

  // click
  createClick = () => {
    if (this.props.message != "") {
      alert(this.props.message);
      return;
    }
    this.props.options.onSubmit(this.props.options.value);
  }

  installed(): void {

  }

  render(props: Props) {
    return (
      // <h.f></h.f> or <></> are supported
      <h.f>
        {props.options.items.map(item => {
          return this.actionPro(item);
        })}
        <div class="form-item">
          <div class="title-box">

          </div>
          <div class="from-button">
            <o-button type="primary" size="small" onClick={this.createClick}><span>创建</span></o-button>
            <o-button size="small"><span>重置</span></o-button>
          </div>
        </div>
      </h.f>
    )
  }
}

