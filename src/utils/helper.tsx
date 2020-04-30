import React from 'react';
import ReactDOM from 'react-dom';

export const renderErrorMessage = (message: string, targetElementId: string, callback?: (arg?: any) => any) => {
  ReactDOM.render(
    <div style={{ textAlign: 'center' }}>
      <div>{message}</div>
    </div>,
    document.getElementById(targetElementId),
  );
  callback && callback();
};
