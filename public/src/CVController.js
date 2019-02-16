class CVController {
  constructor() {
    // init
    this.model = new CVModel();
    this.view = new CVView();
    // event
    this.request(this.model, this.view);
  }

  request(model, view) {
    // basic request
    $("#request").on("click", () => {
      model.username = $("#username-form").val();
      model.repo = $("#repo-form").val();
      model.page = $("#page-form").val();
      this.getCommitNum(model, view);
      this.getGitHubAPI(model, view);
    });
    // the latest page request
    $("#latest-request").on("click", () => {
      model.username = $("#username-form").val();
      model.repo = $("#repo-form").val();
      model.page = 1;
      this.getGitHubAPI(model, view);
      view.setPageForm(model.page);
    });
    // the oldest page request
    $("#oldest-request").on("click", () => {
      model.username = $("#username-form").val();
      model.repo = $("#repo-form").val();
      let lastPage = model.commitNum.replace(',', '') / 100 | 0 + 1;
      model.page = lastPage;
      this.getGitHubAPI(model, view);
      view.setPageForm(model.page);
    });
  }

  getGitHubAPI(model, view) {
    // GET request via GitHub API
    const request = new XMLHttpRequest();
    var url = `https://api.github.com/repos/${model.username}/${model.repo}/commits?page=${model.page}&per_page=100`;
    request.open("GET", url);
    request.addEventListener("load", (event) => {
      // error
      if (event.target.status !== 200) {
        console.log(`${event.target.status}: ${event.target.statusText}`);
        return;
      }
      // success
      // console.log(event.target.status);
      // console.log(event.target.responseText);
      model.responseJSON = JSON.parse(event.target.responseText);
      // console.log(model.responseJSON);
      view.showResponse(model.responseJSON);
    });
    request.send();
  }

  getCommitNum(model, view) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET",`/commits?username=${model.username}&repo=${model.repo}&page=${model.page}`);
    xhr.addEventListener("load", (e) => {
      var commitInfo = JSON.parse(xhr.responseText);
      model.commitNum = commitInfo.commitNum;
      // view.showCommitNum(model.commitNum);
      console.log(commitInfo.commitNum);
      view.showCommitNum(model.commitNum);
    });
    xhr.send();
  }

}
