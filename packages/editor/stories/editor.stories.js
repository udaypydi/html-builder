import React from 'react';
import App from '../index';

export default {
    title: 'Editor',
    component: App
}

// create a template in story in order to render it

const Template = (args) => <App {...args} />;

// create a primary story for the story books to initialise the story.

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Editor',
};
