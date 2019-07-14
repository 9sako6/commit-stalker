import $ from 'jquery';

export default class CSView {
  /**
   * draw commits' infomartion
   */
  drawCommitsInfo(commitsInfoJSON, repoName) {
    let addElem = '';
    for (let commitInfo of commitsInfoJSON) {
      let author;
      if (commitInfo.author) {
        author = commitInfo.author.login;
      } else {
        author = 'anonymous author';
      }
      let date = new Date(commitInfo.commit.author.date);

      addElem += `<li class="commits-list-item">
      <div class="table-list-cell">
      <p class="commit-title">
      <a class="message" data-pjax="true" href="${commitInfo.html_url}" target="_blank">
      ${commitInfo.commit.message}
      </a>
      </p>
      </div>
        <div class="author-area">
        <a href="https://github.com/${author}/${repoName}/commits?author=${author}"><div class="author">${author}</div></a>
        <div class="date"> committed on ${date.toLocaleDateString()} ${date.toLocaleTimeString()}</div>
      </div>
      </li>`;
    }
    $('#show-window').children().remove();
    // add contents
    $('#show-window').append(addElem);
  }

  drawCommitsCount(commitsCount) {
    if (commitsCount) {
      let elem = `<span class="num text-emphasized">${commitsCount.toLocaleString()+" commits"}</span> `
      $('#commit-num').empty();
      $('#commit-num').append(elem);
    }
  }

  setPageForm(page) {
    $('#page-form').val(page);
  }
}
