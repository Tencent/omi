import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/input'
import '@omiu/select'
import '@omiu/switch'
import '@omiu/radio'
import '@omiu/checkbox'
import '@omiu/date-picker'
import '@omiu/cascader'
import '@omiu/color-picker'
import '@omiu/form'

interface Props { }

const tagName = 'admin-form'
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

  items = [{ label: '广东省-深圳市', value: 1 }, { label: '江西省-抚州市', value: 2 }, { label: '河北省-石家庄', value: 3 }]

  fruits = [{ label: '苹果🍎', value: 1 }, { label: '草莓🍓', value: 2 }, { label: '葡萄🍇', value: 3 }, { label: '香蕉🍌', value: 4 }, { label: '梨子🍐', value: 5 }, { label: '橘子🍊', value: 6 },]

  store

  render() {
    const formItemClass = tw`leading-8 mb-0 max-w-2xl`
    const lableClass = tw`w-16 float-left align-middle`

    return (
      <div style={{ background: '#ebedef' }} class={tw`pt-4 pl-4 pr-4 pb-44 `}>
        <o-form
          initialValues={{ name: '', email: '' }}
          validate={values => {
            const errors: { name?: string, email?: string } = {};
            if (!values.name) {
              errors.name = 'Required';
            }
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}>
          {({
            values,
            errors,
            touched,
            onChange,
            onSubmit,
            onBlur
          }) => (
            <div class={tw`text-sm rounded shadow px-10 py-10 bg-white text-gray-500 w-full`}>

              <div class={formItemClass}>
                <label class={lableClass} >用户姓名</label>
                <div class={tw`leading-8 ml-16`}>
                  <o-input
                    size="small"
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder="我是带校验的"
                    value={values.name}
                    name="name"
                    block></o-input>
                  <div class={tw`text-red-500 h-6 text-sm`}>{errors.name && touched.name && errors.name}</div>
                </div>
              </div>

              <div class={formItemClass}>
                <label class={lableClass} >Email</label>
                <div class={tw`leading-8 ml-16`}>
                  <o-input
                    name="email"
                    value={values.email}
                    onChange={onChange}
                    placeholder="我是带校验的"
                    onBlur={onBlur}
                    size="small" block
                  >
                  </o-input>
                  <div class={tw`text-red-500 h-6 text-sm`}>{errors.email && touched.email && errors.email}</div>
                </div>

              </div>

              <div class={formItemClass}>
                <label class={lableClass} >出生地址</label>
                <div class={tw`leading-8 ml-16`}>
                  <o-select size="small"
                    placeholder="选择一个出生地"
                    options={this.items}
                    block
                  ></o-select>
                  <div class={tw`text-red-500 h-6 text-sm`}>{errors.address}</div>
                </div>
              </div>


              <div class={formItemClass}>
                <label class={lableClass} >喜爱水果</label>
                <div class={tw`leading-8 ml-16`}>
                  <o-select
                    block
                    size="small"
                    multiple
                    placeholder="选择多个水果"
                    options={this.fruits}
                  ></o-select>
                  <div class={tw`text-red-500 h-6 text-sm`}>{errors.address}</div>
                </div>
              </div>


              <div class={formItemClass}>
                <label class={lableClass} >出生日期</label>
                <div class={tw`leading-8 ml-16`}>
                  <o-date-picker
                    size="small"
                    locale={this.store.locale}>
                  </o-date-picker>
                  <div class={tw`text-red-500 h-6 text-sm`}>{errors.address}</div>
                </div>
              </div>

              <div class={formItemClass}>
                <label class={lableClass} >大学时光</label>
                <div class={tw`leading-8 ml-16`}>
                  <o-date-picker width="256px" mode="range" size="small" locale={this.store.locale}> </o-date-picker>
                  <div class={tw`text-red-500 h-6 text-sm`}>{errors.address}</div>
                </div>
              </div>

              <div class={formItemClass}>
                <label class={lableClass} >喜爱颜色</label>
                <div class={tw`leading-8 ml-16`}>
                  <o-color-picker
                    default={this.store.themeColor}
                    style="position: relative;top: -5px;"
                    hex={0} rgba={0} inline={0} width="300px">
                  </o-color-picker>
                  <div class={tw`text-red-500 h-6 text-sm`}>{errors.color}</div>
                </div>
              </div>

              <div class={formItemClass}>
                <label class={lableClass} >是否结婚</label>
                <div class={tw`leading-8 ml-16 pt-1`}>
                  <o-switch id="switchA" checked="0">
                  </o-switch>
                  <div class={tw`text-red-500 h-6 text-sm`}>{errors.address}</div>
                </div>
              </div>

              <div class={formItemClass}>
                <label class={lableClass} >喜爱水果</label>
                <div class={tw`leading-8 ml-16`}>
                  <o-checkbox class={tw`pr-4`} label='苹果🍎'> </o-checkbox>
                  <o-checkbox class={tw`pr-4`} label='草莓🍓'> </o-checkbox>
                  <o-checkbox class={tw`pr-4`} label='葡萄🍇'> </o-checkbox>
                  <o-checkbox class={tw`pr-4`} label='香蕉🍌'> </o-checkbox>
                  <o-checkbox class={tw`pr-4`} label='梨子🍐'> </o-checkbox>
                  <o-checkbox class={tw`pr-4`} label='橘子🍊'> </o-checkbox>

                  <div class={tw`text-red-500 h-6 text-sm`}>{errors.address}</div>
                </div>
              </div>

              <div class={formItemClass}>
                <label class={lableClass} >级联选择</label>
                <div class={tw`leading-8 ml-16`}>
                  <o-cascader size="small" options={[
                    {
                      value: 'components',
                      label: '组件',
                      children: [
                        {
                          value: 'basic',
                          label: '基础',
                          children: [
                            {
                              value: 'input',
                              label: '输入框'
                            },
                            {
                              value: 'button',
                              label: '按钮'
                            },
                            {
                              value: 'card',
                              label: '卡片'
                            }
                          ]
                        },
                        {
                          value: 'form',
                          label: '表单',
                          children: [
                            {
                              value: 'select',
                              label: '选择器'
                            }
                          ]
                        },
                        {
                          value: 'advanced',
                          label: '高级',
                          children: [
                            {
                              value: 'tree',
                              label: '树'
                            },
                            {
                              value: 'cascader',
                              label: '级联选择器'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      value: 'author',
                      label: '作者',
                      children: [
                        {
                          value: 'dntzhang',
                          label: '当耐特'
                        },
                        {
                          value: 'YunYouJun',
                          label: '云游君'
                        }
                      ]
                    }
                  ]}> </o-cascader>
                  <div class={tw`text-red-500 h-6 text-sm`}>{errors.address}</div>
                </div>
              </div>

              <div class={formItemClass}>
                <label class={lableClass} >用户性别</label>
                <div class={tw`leading-8 ml-16`}>
                  <o-radio name="sex" checked value="0">男</o-radio>
                  <o-radio name="sex" value="1" class={tw`ml-2`}>女</o-radio>
                  <div class={tw`text-red-500 h-6 text-sm`}>{errors.address}</div>
                </div>
              </div>

              <div class={formItemClass}>
                <label class={lableClass} >个性签名</label>
                <div class={tw`leading-8 ml-16`}>
                  <o-input type="textarea" block></o-input>
                  <div class={tw`text-red-500 h-6 text-sm`}>{errors.address}</div>
                </div>
              </div>

              <div class={formItemClass}>
                <label class={lableClass} ></label>
                <div class={tw`leading-8 ml-16`}>
                  <o-button size="small" type="primary" onclick={onSubmit} >创建</o-button>
                  <o-button size="small" class={tw`ml-6`}>重置</o-button>
                </div>
              </div>

            </div>
          )}
        </o-form>
      </div>

    )
  }
}
