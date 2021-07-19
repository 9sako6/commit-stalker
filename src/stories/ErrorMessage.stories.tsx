import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ErrorMessage } from '../components/errorMessage';

export default {
  component: ErrorMessage,
  title: 'Components/ErrorMessage'
} as ComponentMeta<typeof ErrorMessage>;

const Template: ComponentStory<typeof ErrorMessage> = (args) => <ErrorMessage {...args} />;

export const Default = Template.bind({});
Default.args = { message: 'This is an error.' };
