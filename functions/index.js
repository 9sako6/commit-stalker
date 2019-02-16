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
const pageInfo = {
  "title": "Commit Stalker"
};

const setTitle = (req, res, title) => {
  res.render('index', { title });
};

app.get('/', function (request, response) {
  const title = pageInfo.title;
  setTitle(request, response, title);
});

//
// commits
//
let commitInfo = {
  "username": "",
  "repo": "",
  "commitNum": null
};

const getCommitNum = (request, response) => {
  // get query
  let username = request.query.username;
  let repo = request.query.repo;
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
        // show commits num.
        response.render('index', { commitNum });
        // save
        commitInfo.username = username;
        commitInfo.repo = repo;
        commitInfo.commitNum = commitNum;
      } catch (e) {
        console.error(e);
      }
    });
  } else {
    // If commitNum is already got
    const commitNum = commitInfo.commitNum;
    response.render('index', { commitNum });
  }
};

app.get('/commits', function (request, response) {
  getCommitNum(request, response);
});
// app.get('/commits', (request, response) => {
//   // get query
//   let username = request.query.username;
//   let repo = request.query.repo;
//   // compare query with pre-query
//   if (username !== commitInfo.username || repo !== commitInfo.repo) {
//     // prepare for HTTP GET
//     const reqCommitNum = require('request');
//     const {
//       JSDOM
//     } = require('jsdom');
//     const url = `https://github.com/${username}/${repo}`;
//     // HTTP GET
//     reqCommitNum(url, (e, resCommitNum, body) => {
//       if (e) {
//         console.error(e);
//       }
//       try {
//         // parse HTML
//         const dom = new JSDOM(body);
//         // get commit num.
//         const commitNum = dom.window.document.querySelector('.commits').querySelector('.num').textContent.trim();
//         // show commits num.
//         response.render('index', { commitNum });
//         // save
//         commitInfo.username = username;
//         commitInfo.repo = repo;
//         commitInfo.commitNum = commitNum;
//       } catch (e) {
//         console.error(e);
//       }
//     });
//   } else {
//     // If commitNum is already got
//     const commitNum = commitInfo.commitNum;
//     response.render('index', { commitNum });
//   }
// })



exports.app = functions.https.onRequest(app);

// ルート（http://localhost/）にアクセスしてきたときに「Hello」を返す
// app.get('/', (req, res) => res.send('Hello'));
