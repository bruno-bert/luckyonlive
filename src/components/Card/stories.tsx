import { Story, Meta } from '@storybook/react/types-6-0'
import Card, { CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
    description: 'description default'
  }
} as Meta

export const Default: Story<CardProps> = (args) => <Card  {...args}/>
