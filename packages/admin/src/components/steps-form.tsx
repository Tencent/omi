import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/input'
import '@omiu/select'
import '@omiu/switch'
import '@omiu/radio'
import '@omiu/checkbox'
import '@omiu/date-picker'
import '@omiu/cascader'
import '@omiu/steps'
import '@omiu/form'

import '@omiu/icon/close'

interface Props { }

const tagName = 'steps-form'
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
    { name: '确认邮寄地址', description: '请写你家里的邮寄地址', state: state.TODO },
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
    const formItemClass = tw`mb-2`
    const lableClass = tw` leading-8 w-16 float-left align-middle text-sm text-gray-500`

    return (

      <div class={tw`py-4 px-4`}>
        <div>
          <o-steps class={tw`py-4 px-4 border-b-1`} steps={this.itemsA} />
        </div>

        {/* <o-steps steps={this.itemsB} />
        <o-steps steps={this.itemsC} />

        <o-steps steps={this.itemsA} vertical />
        <o-steps steps={this.itemsB} vertical />
        <o-steps steps={this.itemsC} vertical /> */}

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
            <div class={tw`my-4`}>
              <div class={tw`bg-green-50 relative text-sm flex p-2`}>

                <div class={tw`w-6 inline-block text-green-600`}>
                  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <path
                      fill="currentColor"
                      fill-opacity=".9"
                      fill-rule="evenodd"
                      d="M512 96C741.7504576 96 928 282.24954432 928 512 928 741.7504576 741.7504576 928 512 928 282.24954432 928 96 741.7504576 96 512 96 282.24954432 282.24954432 96 512 96ZM544 416L416 416 416 480 480 480 480 736 608 736 608 672 544 672 544 416ZM544 288L480 288 480 352 544 352 544 288Z"></path>
                  </svg>
                </div>
                <div class={tw`px-1`}>
                  <div class={tw`pb-2 font-medium`}> 发票开具规则：</div>

                  <div class={tw`font-light`}>
                    <p>
                      1、申请开票后，电子发票在1～3个工作日内开具；增值税专用发票（纸质）如资质审核通过，将在电子发票开具后10个工作日内为您寄出；
                    </p>
                    <p>2、开票金额为您实际支付金额；</p>
                    <p>3、如有疑问请直接联系：13300001111。</p>
                  </div>
                </div>

                <div>
                  <o-icon-close class={tw`absolute cursor-pointer top-2.5 right-2.5`} ></o-icon-close>
                </div>
              </div>

              <div class={tw`pt-6 max-w-lg`}>
                <div class={formItemClass}>
                  <label class={lableClass} >合同名称</label>
                  <div class={tw`leading-8 ml-16`}>
                    <o-select block size="small" placeholder="选择合同名称"
                      options={this.items}
                    ></o-select>
                    <div class={tw`text-red-500 h-6 text-sm`}>{errors.address}</div>
                  </div>
                </div>

                <div class={formItemClass}>
                  <label class={lableClass} >发票类型</label>
                  <div class={tw`leading-8 ml-16`}>
                    <o-select block size="small" placeholder="选择发票类型"
                      options={this.items}
                    ></o-select>
                    <div class={tw`text-red-500 h-6 text-sm`}>{errors.address}</div>
                  </div>
                </div>

                <div class={formItemClass}>
                  <label class={lableClass} > 金额(元)</label>
                  <div class={tw`leading-8 ml-16`}>
                    <o-input
                      size="small"
                      onChange={onChange}
                      onBlur={onBlur}
                      placeholder=""
                      value={values.name}
                      name="name"
                      block></o-input>
                    <div class={tw`text-red-500 h-6 text-sm`}>{errors.name && touched.name && errors.name}</div>
                  </div>
                </div>

                <div class={formItemClass}>
                  <label class={lableClass} ></label>
                  <div class={tw`leading-8 ml-16`}>
                    <o-button size="small" type="primary" onclick={onSubmit} >下一步</o-button>

                  </div>
                </div>

              </div>
            </div>

          )}
        </o-form>

      </div >

    )
  }
}
