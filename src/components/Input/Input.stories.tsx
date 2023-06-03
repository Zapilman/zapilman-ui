import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Input } from '.';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  title: 'В закладі',
};
