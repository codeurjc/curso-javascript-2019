const fs = require('fs');

fs.readFile('/etc/hosts', function (err, data) {

    if (err) throw err;

    console.log(data.toString());

});
