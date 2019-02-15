// var http = require("http");
// // var HTMLParser = require('node-html-parser');
//
//
// function onRequest(request, response) {
//   const https = require('https');
//
//   const req = https.request('https://github.com/sass/sass', (res) => {
//     // var body = "";
//     res.on('data', (chunk) => {
//       // console.log(`${chunk}`);
//       // const root = HTMLParser.parse(`${chunk}`);
//       // var result = root.querySelector('.commits');
//       // console.log(result);
//       // if (result) {
//       //   var commitsHTML = result.outerHTML;
//       //   console.log(result);
//       //   console.log(commitsHTML);
//       //   var aaa = HTMLParser.parse(`${commitsHTML}`);
//       //   console.log(aaa.querySelector('.num').rawText.trim());
//       // }
//
//
//     });
//
//
//
//     res.on('end', () => {
//       console.log('No more data in response.');
//     });
//   })
//
//   req.on('error', (e) => {
//     console.error(`problem with request: ${e.message}`);
//   });
//
//   req.end();
// }
//
// http.createServer(onRequest).listen(8888);
//
//
// // ul#list
const request = require('request')
const {
  JSDOM
} = require('jsdom')

request('https://github.com/sass/sass', (e, response, body) => {
  if (e) {
    console.error(e)
  }

  try {
    const dom = new JSDOM(body)
    const latestDate = dom.window.document.querySelector('.commits').querySelector('.num').textContent.trim()
      // .children[0].firstChild.textContent.trim()
    console.log(`${latestDate}`)
  } catch (e) {
    console.error(e)
  }
})
