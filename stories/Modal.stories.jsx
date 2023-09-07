import React from 'react';

import { Modal } from '../src/components/Modal/Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  args: {},
}

const Template = (args) => <Modal {...args} />;

export const Story = Template.bind({});
Story.args = {};
