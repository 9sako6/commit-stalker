class CVView {

  showResponse(responseJSON, repo) {
    var addElem = "";
    for (let commitInfo of responseJSON) {
      let author;
      if (commitInfo.author) {
        author = commitInfo.author.login;
      } else {
        author = "anonymous author";
      }
      addElem += `<li class="commits-list-item">
      <div class="table-list-cell">
      <p class="commit-title">
      <a class="message" data-pjax="true" href="${commitInfo.html_url}" target="_blank">
      ${commitInfo.commit.message}
      </a>
      </p>
      </div>
        <div class="author-area">
        <a href="https://github.com/${author}/${repo}/commits?author=${author}"><div class="author">${author}</div></a>
        <div class="date"> committed on ${commitInfo.commit.author.date}</div>
      </div>
      </li>`;
    }
    $("#show-window").children().remove();
    // add contents
    $("#show-window").append(addElem);
  }

  showCommitNum(commitNum, cautionFlag) {
    if (commitNum) {
      let elem = `<span class="num text-emphasized">${commitNum.toLocaleString()}</span> commits`
      if (cautionFlag) {
        elem += `<span class="warning">  WARNING: This commits count may be wrong</span>`
      }
      $("#commit-num").empty();
      $("#commit-num").append(elem);
    }
  }

  setPageForm(page) {
    $("#page-form").val(page);
  }

}
