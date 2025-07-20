import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from '../../components/QuestionComponents/QuestionTitle/Component'

export default {
  title: 'Question/QuestionTitle',
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {}

export const SetProps = Template.bind({})
SetProps.args = {
  text: 'hello',
  level: 2,
  isCenter: true,
}
