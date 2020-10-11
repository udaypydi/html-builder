import React from 'react';
import App from '../index';

export default {
    title: 'Editor',
    component: App
}

const Template = (args) => <App {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Editor',
};
