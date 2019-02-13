class CVController {
  constructor() {
    // init
    this.model = new CVModel();
    this.view = new CVView();
    // event
    this.request(this.model, this.view);
  }

  request(model, view) {
    $("#request").on("click", function() {
      model.username = $("#username-form").val();
      model.reponame = $("#reponame-form").val();
      // GET request via GitHub API
      const request = new XMLHttpRequest();
      var url = `https://api.github.com/repos/${model.username}/${model.reponame}/commits?page=1&per_page=100`;
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
        console.log(model.responseJSON);
        view.showResponse(model.responseJSON);
      });
      request.send();
    });
  }
}
