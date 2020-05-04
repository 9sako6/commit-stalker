import React from 'react';
import { render } from '@testing-library/react';
import Readme from 'src/components/readme';

test('readme should has two p tags and two h1 tags', () => {
  const { container, getByText } = render(<Readme />);
  const titleElement = getByText('Commit Stalker');
  expect(titleElement).toBeInTheDocument();

  expect(container.querySelectorAll('p')).toHaveLength(2);
  expect(container.querySelectorAll('h1')).toHaveLength(2);
});
