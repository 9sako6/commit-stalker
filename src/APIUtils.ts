import axios from "axios";
import { renderErrorMessage } from "./helper";
/**
 * request total commit count
 */
export async function requestTotalCommitNum(user: string, repo: string) {
  try {
    const { data } = await axios.get(
      `https://secure-tundra-40881.herokuapp.com/count?user=${user}&repo=${repo}`
    );
    return data;
  } catch (err) {
    renderErrorMessage(err.status, err.message);
    throw new Error(err.message);
  }
}
/**
 * request commit history via GitHub API
 */
export async function requestCommitHistory(
  user: string,
  repo: string,
  page: number
) {
  try {
    const { data } = await axios.get(
      `https://api.github.com/repos/${user}/${repo}/commits?page=${page}&per_page=100`
    );
    return data;
  } catch (err) {
    renderErrorMessage(err.status, err.message);
    throw new Error(err.message);
  }
}
