import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommitRow } from '../components/commitRow';

export default {
  component: CommitRow,
  title: 'Components/CommitRow'
} as ComponentMeta<typeof CommitRow>;

const Template: ComponentStory<typeof CommitRow> = (args) => <CommitRow {...args} />;

export const Default = Template.bind({});
Default.args = {
  json: {
    sha: 'sha12345',
    authorName: '9sako6',
    authorUrl: 'https://github.com/9sako6',
    avatarUrl: 'https://avatars.githubusercontent.com/u/31821663?s=60&u=26a52e5a5b38c91c415a9263d7e81c209bc04377&v=4',
    repoUrl: 'https://github.com/9sako6/commit-stalker',
    date: new Date('2021-07-19'),
    isVerified: true,
    commitMessage: "Add storybook\n\nHere is commit message.",
    commitUrl: '',
  },
  rowHeight: 200,
  user: '9sako6',
  repo: 'commit-stalker',
};
