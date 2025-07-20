import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from '../../components/QuestionComponents/QuestionTextarea/Component'

export default {
  title: 'Question/QuestionTextarea',
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => <Component {...args} />

export const Default = Template.bind({})
Default.args = {}

export const SetProps = Template.bind({})
SetProps.args = {
  title: 'Custom title',
  placeholder: 'Type here...',
}
