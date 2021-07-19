import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Loading } from '../components/loading';

export default {
  component: Loading,
  title: 'Components/Loading'
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = () => <Loading />;

export const Default = Template.bind({});
