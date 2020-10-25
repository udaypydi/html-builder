import React from 'react';
import Canvas from '../src/components/canvas/canvas';

export default {
    title: 'Canvas',
    component: Canvas
}

// create a template in story in order to render it

const Template = (args) => <Canvas {...args} />;

// create a primary story for the story books to initialise the story.

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Canvas',
};
