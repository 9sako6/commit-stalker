/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_CSController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/CSController.js */ \"./src/modules/CSController.js\");\n\n\n$(document).ready(function() {\n  new _modules_CSController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/modules/CSController.js":
/*!*************************************!*\
  !*** ./src/modules/CSController.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CSController; });\n/* harmony import */ var _CSModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSModel.js */ \"./src/modules/CSModel.js\");\n/* harmony import */ var _CSView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSView.js */ \"./src/modules/CSView.js\");\n\n\n// Whole-script strict mode syntax\n'use strict';\nclass CSController {\n  constructor() {\n    // init\n    this.model = new _CSModel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.view = new _CSView_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    // event\n    this.activateButtons(this.model, this.view);\n    this.moveNextForm(this.model, this.view);\n  }\n\n  searchCommits(model, view) {\n    if (isNaN($('#page-form').val())) {\n      // model.page is not a number\n      return;\n    }\n    const preUsername = model.username;\n    const preRepo = model.repo;\n    model.username = $('#username-form').val();\n    model.repo = $('#repo-form').val();\n    model.page = $('#page-form').val() || 1;\n    if (preUsername !== model.username || preRepo !== model.repo) {\n      this.requestCommitsCount(model, view);\n    }\n    this.requestCommitsHistory(model, view);\n    view.setPageForm(model.page);\n  }\n\n  moveFirstPage (model, view) {\n    model.username = $('#username-form').val();\n    model.repo = $('#repo-form').val();\n    model.page = 1;\n    this.requestCommitsHistory(model, view);\n    view.setPageForm(model.page);\n  }\n\n  movePrePage (model, view) {\n    model.username = $('#username-form').val();\n    model.repo = $('#repo-form').val();\n    if (isNaN(model.page)) {\n      // model.page is not a number\n      return;\n    }\n    model.page = model.page == 1 ? 1 : Number(model.page) - 1;\n    this.requestCommitsHistory(model, view);\n    view.setPageForm(model.page);\n  }\n\n  moveNextPage (model, view) {\n    model.username = $('#username-form').val();\n    model.repo = $('#repo-form').val();\n    if (isNaN(model.page)) {\n      // model.page is not a number\n      return;\n    }\n    model.page = Number(model.page) + 1;\n    this.requestCommitsHistory(model, view);\n    view.setPageForm(model.page);\n  }\n\n  moveLastPage (model, view) {\n    const preUsername = model.username;\n    const preRepo = model.repo;\n    model.username = $('#username-form').val();\n    model.repo = $('#repo-form').val();\n    if (preUsername !== model.username || preRepo !== model.repo || !model.commitsCount) {\n      this.requestCommitsCount(model, view).then(() => {\n        let lastPage = (model.commitsCount / 100 | 0) + 1;\n        model.page = lastPage;\n        this.requestCommitsHistory(model, view);\n        view.setPageForm(model.page);\n      });\n    } else {\n      let lastPage = (model.commitsCount / 100 | 0) + 1;\n      model.page = lastPage;\n      this.requestCommitsHistory(model, view);\n      view.setPageForm(model.page);\n    }\n  }\n\n  activateButtons(model, view) {\n    /**\n     * basic request\n     */\n    // click\n    $('#request').on('click', () => {\n      this.searchCommits(model, view);\n    });\n    // press Enter key\n    $('#request').on('keypress', (e) => {\n      if (e.which == 13) {\n        this.searchCommits(model, view);\n      }\n    });\n\n    /**\n     * the first page request\n     */\n    // click\n    $('#latest-request').on('click', () => {\n      this.moveFirstPage(model, view);\n    });\n    // press Enter key\n    $('#latest-request').on('keypress', (e) => {\n      if (e.which == 13) {\n        this.moveFirstPage(model, view);\n      }\n    });\n\n    /**\n     * page back\n     */\n    // click\n    $('#back-request').on('click', () => {\n      this.movePrePage(model, view);\n    });\n    // press Enter key\n    $('#back-request').on('keypress', (e) => {\n      if (e.which == 13) {\n        this.movePrePage(model, view);\n      }\n    });\n\n    /**\n     * next page\n     */\n    // click\n    $('#next-request').on('click', () => {\n      this.moveNextPage(model, view);\n    });\n    // press Enter key\n    $('#next-request').on('keypress', (e) => {\n      if (e.which == 13) {\n        this.moveNextPage(model, view);\n      }\n    });\n\n    /**\n     * the oldest page request\n     */\n    // click\n    $('#oldest-request').on('click', () => {\n      this.moveLastPage(model, view);\n    });\n    // press Enter key\n    $('#oldest-request').on('keypress', (e) => {\n      if (e.which == 13) {\n        this.moveLastPage(model, view);\n      }\n    });\n  }\n\n  /**\n   * HTTP request to obtain commits' history via GitHub API\n   * @param {CSModel} model \n   * @param {CSView} view \n   */\n  requestCommitsHistory(model, view) {\n    if (model.username === '' || model.repo === '') {\n      return;\n    }\n    const key = `${model.username}-${model.repo}-${model.page}`;\n    if (model.responseJSON[key]) {\n      view.drawCommitsInfo(model.responseJSON[key], model.repo);\n      return;\n    }\n    // GET request via GitHub API\n    const request = new XMLHttpRequest();\n    const url = `https://api.github.com/repos/${model.username}/${model.repo}/commits?page=${model.page}&per_page=100`;\n    request.open('GET', url);\n    request.addEventListener('load', (event) => {\n      // error\n      if (event.target.status !== 200) {\n        console.log(`${event.target.status}: ${event.target.statusText}`);\n        return;\n      }\n      // success\n      console.log(event.target.status);\n      model.responseJSON[key] = JSON.parse(event.target.responseText);\n      view.drawCommitsInfo(model.responseJSON[key], model.repo);\n    });\n    request.send();\n  }\n\n  /**\n   * HTTP request to obtain total commit count\n   * @param {CSModel} model \n   * @param {CSView} view \n   */\n  requestCommitsCount(model, view) {\n    if (model.username === '' || model.repo === '') {\n      return;\n    }\n    return new Promise((resolve, reject) => {\n      // GET request via Original GitHub API\n      const request = new XMLHttpRequest();\n      const url = `https://secure-tundra-40881.herokuapp.com/count?user=${model.username}&repo=${model.repo}`;\n      request.open('GET', url);\n      request.addEventListener('load', (event) => {\n        // error\n        if (event.target.status !== 200) {\n          console.log(`${event.target.status}: ${event.target.statusText}`);\n          reject();\n          return;\n        }\n        // success\n        model.commitsCount = event.target.responseText;\n        view.drawCommitsCount(model.commitsCount);\n        resolve();\n      });\n      request.send();\n    });\n  }\n\n  moveNextForm(model, view) {\n    // move to next form when an Enter key is pressed\n    $('#username-form').on('keypress', (e) => {\n      if (e.which == 13) {\n        $('#repo-form').focus();\n      }\n    });\n\n    $('#repo-form').on('keypress', (e) => {\n      if (e.which == 13) {\n        $('#page-form').focus();\n      }\n    });\n\n    $('#page-form').on('keypress', (e) => {\n      if (e.which == 13) {\n        this.searchCommits(model, view);;\n      }\n    });\n  }\n\n}\n\n\n//# sourceURL=webpack:///./src/modules/CSController.js?");

/***/ }),

/***/ "./src/modules/CSModel.js":
/*!********************************!*\
  !*** ./src/modules/CSModel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CSModel; });\nclass CSModel {\n  constructor() {\n    // init\n    this.username = '';\n    this.repo = '';\n    this.page = 1;\n    this.commitsCount = null;\n\n    //\n    // responseJSON restores histories of response from GitHub API\n    // key is 'username-repo-page'\n    //\n    this.responseJSON = new Object();\n  }\n}\n\n\n//# sourceURL=webpack:///./src/modules/CSModel.js?");

/***/ }),

/***/ "./src/modules/CSView.js":
/*!*******************************!*\
  !*** ./src/modules/CSView.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CSView; });\nclass CSView {\n\n  /**\n   * draw commits' infomartion\n   */\n  drawCommitsInfo(commitsInfoJSON, repoName) {\n    let addElem = '';\n    for (let commitInfo of commitsInfoJSON) {\n      let author;\n      if (commitInfo.author) {\n        author = commitInfo.author.login;\n      } else {\n        author = 'anonymous author';\n      }\n      let date = new Date(commitInfo.commit.author.date);\n\n      addElem += `<li class=\"commits-list-item\">\n      <div class=\"table-list-cell\">\n      <p class=\"commit-title\">\n      <a class=\"message\" data-pjax=\"true\" href=\"${commitInfo.html_url}\" target=\"_blank\">\n      ${commitInfo.commit.message}\n      </a>\n      </p>\n      </div>\n        <div class=\"author-area\">\n        <a href=\"https://github.com/${author}/${repoName}/commits?author=${author}\"><div class=\"author\">${author}</div></a>\n        <div class=\"date\"> committed on ${date.toLocaleDateString()} ${date.toLocaleTimeString()}</div>\n      </div>\n      </li>`;\n    }\n    $('#show-window').children().remove();\n    // add contents\n    $('#show-window').append(addElem);\n  }\n\n  drawCommitsCount(commitsCount) {\n    if (commitsCount) {\n      let elem = `<span class=\"num text-emphasized\">${commitsCount.toLocaleString()+\" commits\"}</span> `\n      $('#commit-num').empty();\n      $('#commit-num').append(elem);\n    }\n  }\n\n  setPageForm(page) {\n    $('#page-form').val(page);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/modules/CSView.js?");

/***/ })

/******/ });