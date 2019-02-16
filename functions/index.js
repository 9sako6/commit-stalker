'use strict';

const functions = require('firebase-functions');
const express = require('express');
// html template
const engines = require('consolidate');
// init
const app = express();
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

//
// root
//
app.get('/', function(request, response) {
  response.render('index', {});
});

//
// commits
//
let commitInfo = {
  "username": "",
  "repo": "",
  "page": null,
  "commitNum": null,
  "responseJSON": ""
};

const getCommitNum = (req, res) => {
  // get query
  let username = req.query.username;
  let repo = req.query.repo;
  let page = req.query.page;
  // compare query with pre-query
  if (username !== commitInfo.username || repo !== commitInfo.repo) {
    // prepare for HTTP GET
    const reqCommitNum = require('request');
    const {
      JSDOM
    } = require('jsdom');
    const url = `https://github.com/${username}/${repo}`;
    // HTTP GET
    reqCommitNum(url, (e, resCommitNum, body) => {
      if (e) {
        console.error(e);
      }
      try {
        // parse HTML
        const dom = new JSDOM(body);
        // get commit num.
        const commitNum = dom.window.document.querySelector('.commits').querySelector('.num').textContent.trim();
        // save
        commitInfo.username = username;
        commitInfo.repo = repo;
        commitInfo.page = page;
        commitInfo.commitNum = commitNum;
        res.json(commitInfo);
      } catch (e) {
        console.error(e);
      }
    });
  } else {
    // If commitNum is already got
    res.json(commitInfo);
  }
};

app.get('/commits', function(request, response) {
  getCommitNum(request, response);
});

//
// run
//
exports.app = functions.https.onRequest(app);
