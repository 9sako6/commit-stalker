class CVView {
  constructor() {}

  showResponse(responseJSON) {
    // var contents = this.getCommitsMsgsArr(responseJSON);
    // $("#show-window").text(responseJSON);
    var addElem = "";
    for (let commitInfo of responseJSON) {
      addElem += `<p class="commit-title">
      <a class="message" data-pjax="true" href="${commitInfo.html_url}">
      ${commitInfo.commit.message}
      </a>
      </p>`;
    }
    // add contents
    $("#show-window").append(addElem);
  }

  // getCommitsMsgsArr(json) {
  //   var commitsMsgs = [];
  //   var commitsCnt = json.length;
  //   //
  //   for (let commitInfo of json) {
  //     commitsMsgs.push(commitInfo.commit.message);
  //   }
  //   return commitsMsgs;
  // }
}
