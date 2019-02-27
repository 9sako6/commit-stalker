class CSModel {
  constructor() {
    // init
    this.username = "";
    this.repo = "";
    this.page = 1;
    this.commitNum = null;

    //
    // responseJSON restores histories of response from GitHub API
    // key is username-repo-page
    //
    this.responseJSON = new Object();
  }
}
