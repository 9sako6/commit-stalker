import React from 'react';
import ReactDOM from 'react-dom';
import { PAGE_INFO_CLASS } from "./components/PageInfo";

export function renderErrorMessage(status: number, message: string) {
  document.querySelectorAll(PAGE_INFO_CLASS).forEach(elem => {
    ReactDOM.render(<></>, elem);
  });
  ReactDOM.render(
    <div>
      <h1>{status}</h1>
      <div>{message}</div>
    </div>,
    document.getElementById('commit-history')
  );
}