import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'

import '@omiu/checkbox'

import '../docs/admin-docs'
import './code-demo'
import './code-demo/container'

interface Props { }

const tagName = 'checkbox-component'
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

  install() { }

  render() {
    return (
      <code-demo-container>
        <code-demo
          title="复选框"
          describe={'基础演示'}
          code={`
\`\`\`jsx
<o-checkbox label='Label'> </o-checkbox>

<o-checkbox checked={true} label='checked'> </o-checkbox>

<o-checkbox id="myCheckbox" indeterminate={true} label='indeterminate'> </o-checkbox>

<o-checkbox disabled={true} label='disabled'> </o-checkbox>

<o-checkbox disabled={true} checked={true} label='disabled checked={true}'> </o-checkbox>
\`\`\`
          `}
        >
          <div slot="demo" class={tw`flex flex-col justify-around  px-5 py-5`}>

            <div>
              <o-checkbox label='Label'> </o-checkbox>
            </div>
            
            <div>
              <o-checkbox checked={true} label='checked'> </o-checkbox>
            </div>
            
            <div>
              <o-checkbox id="myCheckbox" indeterminate={true} label='indeterminate'> </o-checkbox>
            </div>
                        
            <div>
              <o-checkbox disabled={true} label='disabled'> </o-checkbox>
            </div>
                        
            <div>
              <o-checkbox disabled={true} checked={true} label='disabled checked'> </o-checkbox>
            </div>
            

          </div>
        </code-demo>

      </code-demo-container>
    )
  }
}
