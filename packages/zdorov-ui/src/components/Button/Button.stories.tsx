import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// asdasdsd

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  title: 'В закладі',
};
