import React from 'react';
import { render } from '@testing-library/react';
import CommitHistory from 'src/components/commitHistory';

import jsonList from 'src/server/json/rails_rails_20200504214243.json';

const setup = props => render(<CommitHistory {...props} />);

test('It should render CommitRow(li element) when it gets correct props', () => {
  const { container } = setup({ jsonList });
  expect(container.querySelectorAll('li.commit-list-item')).toHaveLength(jsonList.length);
});

test('It should render nothing when jsonList props is undefined', () => {
  const { container } = setup({ jsonList: undefined });
  expect(container.querySelectorAll('li.commit-list-item')).toHaveLength(0);
});
