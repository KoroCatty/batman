import React from 'react';

import { Modal2 } from '../src/components/Modal2/Modal2';

export default {
  title: 'Components/Modal2',
  component: Modal2,
  args: {},
}

const Template = (args) => <Modal2 {...args} />;

export const Story = Template.bind({});
Story.args = {};
