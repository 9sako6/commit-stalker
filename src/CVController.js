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
      const preUsername = model.username;
      const preRepo = model.repo;
      model.username = $("#username-form").val();
      model.repo = $("#repo-form").val();
      model.page = $("#page-form").val() || 1;
      if (preUsername !== model.username || preRepo !== model.repo) {
        this.getCommitNum(model, view);
      }
      this.getGitHubAPI(model, view);
      view.setPageForm(model.page);
    });
    // the latest page request
    $("#latest-request").on("click", () => {
      model.username = $("#username-form").val();
      model.repo = $("#repo-form").val();
      model.page = 1;
      this.getGitHubAPI(model, view);
      view.setPageForm(model.page);
    });
    // page back
    $("#back-request").on("click", () => {
      model.username = $("#username-form").val();
      model.repo = $("#repo-form").val();
      model.page = model.page == 1 ? 1 : Number(model.page) - 1;
      this.getGitHubAPI(model, view);
      view.setPageForm(model.page);
    });
    // next page
    $("#next-request").on("click", () => {
      model.username = $("#username-form").val();
      model.repo = $("#repo-form").val();
      model.page = Number(model.page) + 1;
      this.getGitHubAPI(model, view);
      view.setPageForm(model.page);
    });
    // the oldest page request
    $("#oldest-request").on("click", () => {
      const preUsername = model.username;
      const preRepo = model.repo;
      model.username = $("#username-form").val();
      model.repo = $("#repo-form").val();
      if (preUsername !== model.username || preRepo !== model.repo || !model.commitNum) {
        this.getCommitNum(model, view);
        let lastPage = model.commitNum / 100 | 0 + 1;
        model.page = lastPage;
        this.getGitHubAPI(model, view);
        view.setPageForm(model.page);
      } else {
        let lastPage = (model.commitNum / 100 | 0) + 1;
        model.page = lastPage;
        this.getGitHubAPI(model, view);
        view.setPageForm(model.page);
      }
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
      console.log(event.target.status);
      model.responseJSON = JSON.parse(event.target.responseText);
      // console.log(model.responseJSON);
      view.showResponse(model.responseJSON, model.repo);
    });
    request.send();
  }

  getCommitNum(model, view) {
    // GET request via GitHub API
    const request = new XMLHttpRequest();
    var url = `https://api.github.com/repos/${model.username}/${model.repo}/contributors?anon=true&per_page=100`;
    request.open("GET", url);
    request.addEventListener("load", (event) => {
      // error
      if (event.target.status !== 200) {
        console.log(`${event.target.status}: ${event.target.statusText}`);
        return;
      }
      // success
      console.log(event.target.status);
      // console.log(event.target.responseText);
      const resJSON = JSON.parse(event.target.responseText);
      let contributions = 0;
      for(let contribution of resJSON) {
        contributions += contribution.contributions;
      }
      model.commitNum = contributions;
      let cautionFlag = resJSON.length == 100 ? true : false;
      view.showCommitNum(model.commitNum, cautionFlag);
    });
    request.send();
  }

}
