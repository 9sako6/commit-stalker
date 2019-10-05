import React from 'react';
import ReactDOM from 'react-dom';

export function renderErrorMessage(status: number, message: string) {
  ReactDOM.render(
    <div>
      <h1>{status}</h1>
      <div>{message}</div>
    </div>,
    document.getElementById('commit-history')
  );
}