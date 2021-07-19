import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Readme } from '../components/readme';

export default {
  component: Readme,
  title: 'Components/Readme'
} as ComponentMeta<typeof Readme>;

const Template: ComponentStory<typeof Readme> = () => <Readme />;

export const Default = Template.bind({});
