import React from 'react';

export const FlexDiv: React.FC<{ style: object }> = ({ children, style }) => {
  return <div style={{ ...style, display: 'flex' }}>{children}</div>;
};
