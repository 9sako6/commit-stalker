import React from 'react';
import ReactDOM from 'react-dom';
import { PAGE_INFO_CLASS } from "./components/partials/PageInfo";
import axios from "axios";
import { renderErrorMessage } from "./helper";

const clearElements = (selector: string): void => {
  document.querySelectorAll(selector).forEach(targetElem => {
    ReactDOM.render(<></>, targetElem);
  });
}

/**
 * request total commit count
 */
export const requestTotalCommitNum = async (
  user: string,
  repo: string
) => {
  try {
    const { data } = await axios.get(
      `https://secure-tundra-40881.herokuapp.com/count?user=${user}&repo=${repo}`
    );
    return data;
  } catch (err) {
    renderErrorMessage(err.message, 'commit-history', () => clearElements(PAGE_INFO_CLASS));
  }
}

/**
 * request commit history via GitHub API
 */
export const requestCommitHistory = async (
  user: string,
  repo: string,
  page: number
) => {
  try {
    const { data } = await axios.get(
      `https://api.github.com/repos/${user}/${repo}/commits?page=${page}&per_page=100`
    );
    return data;
  } catch (err) {
    renderErrorMessage(err.message, 'commit-history', () => clearElements(PAGE_INFO_CLASS));
  }
}
