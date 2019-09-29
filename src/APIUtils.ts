import $ from 'jquery';
import { renderErrorMessage } from './helper';
/**
 * HTTP request to obtain total commit count
 */
export async function requestTotalCommitNum(user: string, repo: string) {
  return new Promise((onFulfilled, onRejected) => {
    $.ajax({
      url: `https://secure-tundra-40881.herokuapp.com/count?user=${user}&repo=${repo}`,
    }).then(response => { onFulfilled(response); })
      .catch((error: any) => {
        console.error(error);
        if(error.responseJSON !== undefined){
          renderErrorMessage(error.status, error.responseJSON.message);
        }else{
          renderErrorMessage(error.status, "That's an error.");
        }
        onRejected(error);
      });
  });
}

export function requestCommitsHistory(user: string, repo: string, page: number) {
  return new Promise((onFulfilled, onRejected) => {
    $.ajax({
      url: `https://api.github.com/repos/${user}/${repo}/commits?page=${page}&per_page=100`,
    }).then(
      // success
      response => {
        onFulfilled(response);
      },
      // fail
      error => {
        console.error(error);
        renderErrorMessage(error.status, error.responseJSON.message);
        onRejected(error);
      }
    );
  });
}