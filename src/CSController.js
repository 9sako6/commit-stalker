class CSController {
  constructor() {
    // init
    this.model = new CSModel();
    this.view = new CSView();
    // event
    this.request(this.model, this.view);
  }

  searchCommits(model, view) {
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
  }

  moveFirstPage (model, view) {
    model.username = $("#username-form").val();
    model.repo = $("#repo-form").val();
    model.page = 1;
    this.getGitHubAPI(model, view);
    view.setPageForm(model.page);
  }

  movePrePage (model, view) {
    model.username = $("#username-form").val();
    model.repo = $("#repo-form").val();
    model.page = model.page == 1 ? 1 : Number(model.page) - 1;
    this.getGitHubAPI(model, view);
    view.setPageForm(model.page);
  }

  moveNextPage (model, view) {
    model.username = $("#username-form").val();
    model.repo = $("#repo-form").val();
    model.page = Number(model.page) + 1;
    this.getGitHubAPI(model, view);
    view.setPageForm(model.page);
  }

  moveLastPage (model, view) {
    const preUsername = model.username;
    const preRepo = model.repo;
    model.username = $("#username-form").val();
    model.repo = $("#repo-form").val();
    if (preUsername !== model.username || preRepo !== model.repo || !model.commitNum) {
      this.getCommitNum(model, view).then(() => {
        let lastPage = (model.commitNum / 100 | 0) + 1;
        model.page = lastPage;
        this.getGitHubAPI(model, view);
        view.setPageForm(model.page);
      });
    } else {
      let lastPage = (model.commitNum / 100 | 0) + 1;
      model.page = lastPage;
      this.getGitHubAPI(model, view);
      view.setPageForm(model.page);
    }
  }

  request(model, view) {
    //
    // basic request
    //
    // click
    $("#request").on("click", () => {
      this.searchCommits(model, view);
    });
    // press Enter key
    $("#request").on("keypress", (e) => {
      if (e.which == 13) {
        this.searchCommits(model, view);
      }
    });

    //
    // the first page request
    //
    // click
    $("#latest-request").on("click", () => {
      this.moveFirstPage(model, view);
    });
    // press Enter key
    $("#latest-request").on("keypress", (e) => {
      if (e.which == 13) {
        this.moveFirstPage(model, view);
      }
    });

    //
    // page back
    //
    // click
    $("#back-request").on("click", () => {
      this.movePrePage(model, view);
    });
    // press Enter key
    $("#back-request").on("keypress", (e) => {
      if (e.which == 13) {
        this.movePrePage(model, view);
      }
    });

    //
    // next page
    //
    // click
    $("#next-request").on("click", () => {
      this.moveNextPage(model, view);
    });
    // press Enter key
    $("#next-request").on("keypress", (e) => {
      if (e.which == 13) {
        this.moveNextPage(model, view);
      }
    });

    //
    // the oldest page request
    //
    // click
    $("#oldest-request").on("click", () => {
      this.moveLastPage(model, view);
    });
    // press Enter key
    $("#oldest-request").on("keypress", (e) => {
      if (e.which == 13) {
        this.moveLastPage(model, view);
      }
    });
  }

  getGitHubAPI(model, view) {
    // GET request via GitHub API
    const request = new XMLHttpRequest();
    let url = `https://api.github.com/repos/${model.username}/${model.repo}/commits?page=${model.page}&per_page=100`;
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
    return new Promise((resolve, reject) => {
      // GET request via GitHub API
      const request = new XMLHttpRequest();
      let url = `https://api.github.com/repos/${model.username}/${model.repo}/contributors?anon=true&per_page=100`;
      request.open("GET", url);
      request.addEventListener("load", (event) => {
        // error
        if (event.target.status !== 200) {
          console.log(`${event.target.status}: ${event.target.statusText}`);
          reject();
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
        resolve();
      });
      request.send();

    });
  }

}
