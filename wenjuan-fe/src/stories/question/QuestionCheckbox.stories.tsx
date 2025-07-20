import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from '../../components/QuestionComponents/QuestionCheckbox/Component'

export default {
  title: 'Question/QuestionCheckbox',
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {}

export const SetProps = Template.bind({})
SetProps.args = {
  title: 'hello',
  list: [
    { value: 'v1', text: 't1', checked: false },
    { value: 'v2', text: 't2', checked: true },
    { value: 'v3', text: 't3', checked: true },
  ],
  isVertical: true,
}
