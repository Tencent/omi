import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from '../../components/QuestionComponents/QuestionRadio/Component'

export default {
  title: 'Question/QuestionRadio',
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {}

export const SetProps = Template.bind({})
SetProps.args = {
  title: 'hello',
  options: [
    { value: 'v1', text: 't1' },
    { value: 'v2', text: 't2' },
    { value: 'v3', text: 't3' },
  ],
  value: 'v1',
  isVertical: true,
}
