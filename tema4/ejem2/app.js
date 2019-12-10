const fs = require('fs');

var text = '';

var stream = fs.createReadStream('/etc/hosts');

stream.on('open', () => {
   console.log('The file is open');
});

stream.on('data', chunk => {
   console.log('Received ' + chunk.length + ' bytes: ' + chunk);
   text += chunk;
});

stream.on('end', () => {
   console.log('There will be no more data');
   console.log('Final data: ' + text);
});
