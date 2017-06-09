const CDP = require('chrome-remote-interface');
const fs = require('fs');

CDP((client) => {
  // Extract used DevTools domains.
  const {Page, Runtime} = client;

  // Enable events on domains we are interested in.
  Promise.all([
    Page.enable()
  ]).then(() => {
    return Page.navigate({url: 'https://www.google.com'});
  });

  // Evaluate outerHTML after page has loaded.
  Page.loadEventFired(() => {
    Runtime.evaluate({expression: 'document.body.outerHTML'}).then((result) => {
      console.log(result.result.value);
      //console.log(client.send('Page.printToPDF'));
      client.close();
    });
  });
}).on('error', (err) => {
  console.error('Cannot connect to browser:', err);
});
