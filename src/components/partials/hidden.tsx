import React from 'react';

type Props = {
  isOpen: boolean;
};

const HiddenWrapper: React.FC<Props> = props => (
  <div style={{ display: `${props.isOpen ? 'block' : 'none'}` }}>{props.children}</div>
);

export default HiddenWrapper;
