class CVController {
  constructor() {
    // init
    this.model = new CVModel();
    this.view = new CVView();
    // event
    this.request(this.model, this.view);
    // this._getCommitNum(this.model, this.view);
  }

  request(model, view) {
    // basic request
    $("#request").on("click", () => {
      model.username = $("#username-form").val();
      model.reponame = $("#reponame-form").val();
      model.pageNum = $("#pagenum-form").val();
      this._request(model, view);
    });
    // the latest page request
    $("#latest-request").on("click", () => {
      model.username = $("#username-form").val();
      model.reponame = $("#reponame-form").val();
      model.pageNum = 1;
      this._request(model, view);
    });
    // the oldest page request
    $("#latest-request").on("click", () => {
      model.username = $("#username-form").val();
      model.reponame = $("#reponame-form").val();
      model.pageNum = 1;
      this._request(model, view);
    });
  }

  _request(model, view) {
    // GET request via GitHub API
    const request = new XMLHttpRequest();
    var url = `https://api.github.com/repos/${model.username}/${model.reponame}/commits?page=${model.pageNum}&per_page=100`;
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

  hoge() {
    // model.username = $("#username-form").val();
    // model.reponame = $("#reponame-form").val();
    const request = new XMLHttpRequest();
    var url = `https://github.com/sass/sass/`;
    request.open("GET", url);
    request.addEventListener("load", (event) => {
      // error
      if (event.target.status !== 200) {
        console.log(`${event.target.status}: ${event.target.statusText}`);
        return;
      }
      // success
      console.log(event.target.status);
      console.log(event.target.responseText);
      // let resJSON = JSON.parse(event.target.responseText);
      // model.commitNum = sum(resJSON.all);
      // console.log(model.commitNum);
      // view.showResponse(model.commitNum);
    });
    request.send();
  }


}
