/**
 * @description 问卷 标题
 * @author 双越老师
 */

import Component from './Component'
import PropComponent from './PropComponent'
import { QuestionTitleDefaultProps } from './interface'

export * from './interface'

// Title 组件的配置
export default {
  title: '标题',
  type: 'questionTitle', // 要和后端统一好
  Component,
  PropComponent,
  defaultProps: QuestionTitleDefaultProps,
}
