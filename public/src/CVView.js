class CVView {

  showResponse(responseJSON) {
    var addElem = "";
    for (let commitInfo of responseJSON) {
      addElem += `<p class="commit-title"><a class="message" data-pjax="true" href="${commitInfo.html_url}" target="_blank">${commitInfo.commit.message}</a></p>`;
    }
    $("#show-window").children().remove();
    // add contents
    $("#show-window").append(addElem);
  }

  showCommitNum(commitNum) {
    $("#commit-num").text(commitNum);
  }

  setPageForm(page) {
    $("#page-form").val(page);
  }

}
