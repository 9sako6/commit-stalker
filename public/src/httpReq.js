

function nodeTest() {
  const https = require('https');

  const req = https.request('https://github.com/9sako6/MESA', (res) => {
      res.on('data', (chunk) => {
          console.log(`BODY: ${chunk}`);
      });
      res.on('end', () => {
          console.log('No more data in response.');
      });
  })

  req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
  });

  req.end();
}
