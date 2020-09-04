import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    argTypes: { onClick: { action: 'clicked' } }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args}>test</Button>
