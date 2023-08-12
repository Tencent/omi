import { define, OmiProps, h, render, WeElement } from 'omi'
import "../../../../../src/button/index"
import { ButtonShape, ButtonTheme, ButtonVariant } from '@src/button/types';
import { SizeEnum } from '@src/common';
import './base-checkbox'
import './color-checkbox'
import './variant-checkbox'
import './size-checkbox'
import './shape-checkbox'
import * as marked from 'marked'

const docsHtml = marked.parse(`
:: BASE_DOC ::

## API
### Link Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
block | boolean | - | 是否让button显示成块状，可以理解成fullwidth就好了 | N
disable | boolean | - | 是否禁用 | N
ghost | Boolean | - | 开启幽灵按钮 | N
loading | Boolean | 是否loading | N
href | String | - | 跳转链接 | N
icon | TElement | - | 前置图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
theme | String | default | 组件风格，依次为默认色、品牌色、危险色、警告色、成功色。可选项：default/primary/danger/warning/success | N
size | String | medium | 尺寸。可选项：small/medium/large。TS 类型：\`SizeEnum\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
suffix | TElement | - | 后置图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
tag | String | - | 跳转方式，如：当前页面打开、新页面打开等，同 HTML 属性 target 含义相同 'button'|'a'|'div' | N
type | 'submit','reset','button' | 'button' | 在button tag 类型下有效，与html button type 效果一致 | N
onClick | Function |  | TS 类型：\`(e: MouseEvent) => void\`<br/>点击事件，禁用状态不会触发点击事件 | N

`)


define('page-button', class extends WeElement {
  block: boolean = false;
  loading: boolean = false;
  disabled: boolean = false;
  ghost: boolean = false;
  theme: ButtonTheme;
  variant: ButtonVariant;
  size: SizeEnum;
  shape: ButtonShape

  render(props: {} | OmiProps<{}, any>, store: any) {
    return (
      <div style="padding:24px">
        <div style="display:flex;">
          <div style="width:500px;margin:auto;text-align:center;">
            <t-button
              block={this.block}
              loading={this.loading}
              disabled={this.disabled}
              ghost={this.ghost}
              theme={this.theme}
              variant={this.variant}
              size={this.size}
              shape={this.shape}
            >
              Button
            </t-button>
          </div>
          <div>
            <t-button-base rootEl={this}></t-button-base>
            <t-button-color rootEl={this}></t-button-color>
            <t-button-variant rootEl={this}></t-button-variant>
            <t-button-size rootEl={this}></t-button-size>
            <t-button-shape rootEl={this}></t-button-shape>
          </div>
        </div>


        <div 
        style="margin-bottom:76px"
        dangerouslySetInnerHTML={{
          __html: docsHtml
        }}>
        </div>


      </div>


    );
  }
})
