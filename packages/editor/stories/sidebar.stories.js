import React from 'react';
import Sidebar from '../src/components/sidebar/sidebar';

export default {
    title: 'Sidebar',
    component: Sidebar
}

// create a template in story in order to render it

const Template = (args) => <Sidebar {...args} />;

// create a primary story for the story books to initialise the story.

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Sidebar',
};
