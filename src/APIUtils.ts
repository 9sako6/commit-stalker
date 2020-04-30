import axios from 'axios';
import { renderErrorMessage } from './helper';

/**
 * request total commit count
 */
export const requestTotalCommitNum = async (user: string, repo: string) => {
  try {
    const { data } = await axios.get(`https://secure-tundra-40881.herokuapp.com/count?user=${user}&repo=${repo}`);
    return data;
  } catch (err) {
    renderErrorMessage(err.message, 'commit-history');
  }
};

/**
 * request commit history via GitHub API
 */
export const requestCommitHistory = async (user: string, repo: string, page: number) => {
  try {
    const { data } = await axios.get(`https://api.github.com/repos/${user}/${repo}/commits?page=${page}&per_page=100`);
    return data;
  } catch (err) {
    renderErrorMessage(err.message, 'commit-history');
  }
};
