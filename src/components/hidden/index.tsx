import React from 'react';

type Props = {
  isOpen: boolean;
};

export const HiddenWrapper: React.FC<Props> = (props) => {
  return <div style={{ display: `${props.isOpen ? 'block' : 'none'}` }}>{props.children}</div>;
};
