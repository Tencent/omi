## Input Props

| Name         | Type                      | Default | Description                                                       |
| ------------ | ------------------------- | ------- | ----------------------------------------------------------------- |
| size         | string                    | 'base'  | Input size                                                        |
| value        | string                    |         | Input value                                                       |
| defaultValue | string                    |         | Input default value                                               |
| id           | string                    |         | Input ID                                                          |
| wrapperTag   | string                    | 'div'   | Wrapper tag for the input                                         |
| label        | string                    |         | Input label text                                                  |
| children     | VNode[]                   |         | Input inner child elements                                        |
| labelRef     | (el: HTMLElement) => void |         | Input label reference                                             |
| type         | string                    |         | Input type                                                        |
| readonly     | boolean                   | false   | Whether the input is read-only                                    |
| formWhite    | boolean                   | false   | Whether the input has a white form style                          |
| counter      | boolean                   | false   | Whether to show the character counter                             |
| maxLength    | number                    |         | Maximum length of the input                                       |
| customTheme  | Record<string, string>    |         | Custom theme                                                      |
| newValue     | string                    |         | New value of the input                                            |
| disabled     | boolean                   | false   | Whether the input is disabled                                     |
| tag          | string                    | 'input' | Input tag                                                         |
| rows         | number                    | 1       | Number of rows (only applicable for textarea)                     |
| tags         | {lable: string}[]         |         | Set the initialization tag list, which can be created and deleted |

## Input Events

| Name   | Type                     | Description                            |
| ------ | ------------------------ | -------------------------------------- |
| change | evt: CustomEvent<string> | Triggered when the input value changes |
| blur   | evt: CustomEvent<string> | Triggered when the input loses focus   |

## Input 属性

| Name         | Type                      | Default | 描述                               |
| ------------ | ------------------------- | ------- | ---------------------------------- |
| size         | string                    | 'base'  | 输入框大小                         |
| value        | string                    |         | 输入框的值                         |
| defaultValue | string                    |         | 输入框的默认值                     |
| id           | string                    |         | 输入框的ID                         |
| wrapperTag   | string                    | 'div'   | 输入框外层标签                     |
| label        | string                    |         | 输入框标签文本                     |
| children     | VNode[]                   |         | 输入框内部子元素                   |
| labelRef     | (el: HTMLElement) => void |         | 输入框标签引用                     |
| type         | string                    |         | 输入框类型                         |
| readonly     | boolean                   | false   | 输入框是否只读                     |
| formWhite    | boolean                   | false   | 输入框是否为白色表单样式           |
| counter      | boolean                   | false   | 是否显示字数统计                   |
| maxLength    | number                    |         | 输入框最大长度                     |
| customTheme  | Record<string, string>    |         | 自定义主题                         |
| newValue     | string                    |         | 输入框新值                         |
| disabled     | boolean                   | false   | 输入框是否禁用                     |
| tag          | string                    | 'input' | 输入框标签                         |
| rows         | number                    | 1       | 输入框行数（仅对文本域有效）       |
| tags         | {lable: string}[]         |         | 设置初始化标签列表，可以创建和删除 |

## Input 事件

| Name   | Type                     | 描述                   |
| ------ | ------------------------ | ---------------------- |
| change | evt: CustomEvent<string> | 输入框值发生变化时触发 |
| blur   | evt: CustomEvent<string> | 输入框失去焦点时触发   |
