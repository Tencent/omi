import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/input'
import '@omiu/select'
import '@omiu/switch'
import '@omiu/radio'
import '@omiu/checkbox'
import '@omiu/date-picker'
import '@omiu/cascader'
import '@omiu/step'
import '@omiu/form'

interface Props { }

const tagName = 'step-form'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

const state = {
  DONE: 0,
  ERROR: 1,
  DOING: 2,
  TODO: 3
}

@tag(tagName)
export default class extends WeElement<Props> {
  static css = sheet.target

  itemsA = [
    { name: '提交开票申请', description: '开票申请需要本人填写', state: state.DOING },
    { name: '填写发票信息', description: '发票信息请开公司抬头', state: state.TODO },
    { name: '确认邮寄地址', description: '请写你加里的邮寄地址', state: state.TODO },
    { name: '完成', description: '', state: state.TODO }
  ]

  itemsB = [
    { name: 'Finished', description: 'This is a description.', state: state.DONE },
    { name: 'Error', description: 'This is a description.', state: state.ERROR },
    { name: 'Waiting', description: 'This is a description.', state: state.TODO }
  ]

  itemsC = [
    { name: 'Finished', description: 'This is a description.', state: state.DONE },
    { name: 'Finished', description: 'This is a description.', state: state.DONE },
    { name: 'Finished', description: 'This is a description.', state: state.DONE }
  ]

  items = [{ label: '广东省-深圳市', value: 1 }, { label: '江西省-抚州市', value: 2 }, { label: '河北省-石家庄', value: 3 }]

  fruits = [{ label: '苹果🍎', value: 1 }, { label: '草莓🍓', value: 2 }, { label: '葡萄🍇', value: 3 }, { label: '香蕉🍌', value: 4 }, { label: '梨子🍐', value: 5 }, { label: '橘子🍊', value: 6 },]

  store


  render() {
    const formItemClass = tw`leading-8 mb-2`
    const lableClass = tw`w-16 float-left align-middle`

    return (

      <div class={tw`py-4 px-4`}>
        <div>
          <o-step class={tw`py-4 px-4 border-b-1`} items={this.itemsA} />
        </div>

        {/* <o-step items={this.itemsB} />
        <o-step items={this.itemsC} />

        <o-step items={this.itemsA} vertical />
        <o-step items={this.itemsB} vertical />
        <o-step items={this.itemsC} vertical /> */}

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
            <div style={{ width: '480px' }} class={tw`text-sm px-10 py-5 text-gray-500`}>

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
                  <o-select css={`
              .o-select .o-input__inner {
                width: 337px;
              `} size="small" placeholder="选择一个出生地"
                    items={this.items}
                  ></o-select>
                  <div class={tw`text-red-500 h-6 text-sm`}>{errors.address}</div>
                </div>
              </div>

              <div class={formItemClass}>
                <label class={lableClass} >出生日期</label>
                <div class={tw`leading-8 ml-10`}>
                  <o-date-picker size="small" locale={this.store.locale}> </o-date-picker>
                  <div class={tw`text-red-500 h-6 text-sm`}>{errors.address}</div>
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
                <div class={tw`leading-8 ml-10`}>
                  <o-checkbox class={tw``} label='苹果🍎'> </o-checkbox>
                  <o-checkbox class={tw` ml-6`} label='草莓🍓'> </o-checkbox>
                  <o-checkbox class={tw` ml-6`} label='葡萄🍇'> </o-checkbox>
                  <o-checkbox class={tw` ml-6`} label='香蕉🍌'> </o-checkbox>
                  <o-checkbox class={tw` ml-6`} label='梨子🍐'> </o-checkbox>
                  <o-checkbox class={tw` ml-6`} label='橘子🍊'> </o-checkbox>

                  <div class={tw`text-red-500 h-6 text-sm`}>{errors.address}</div>
                </div>
              </div>



              <div class={formItemClass}>
                <label class={lableClass} >大学时光</label>
                <div class={tw`leading-8 ml-10`}>
                  <o-date-picker width="256px" mode="range" size="small" locale={this.store.locale}> </o-date-picker>
                  <div class={tw`text-red-500 h-6 text-sm`}>{errors.address}</div>
                </div>
              </div>


              <div class={formItemClass}>
                <label class={lableClass} ></label>
                <div class={tw`leading-8 ml-16`}>
                  <o-button size="small" type="primary" onclick={onSubmit} >下一步</o-button>
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
