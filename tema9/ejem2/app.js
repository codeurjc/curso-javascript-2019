const express = require('express');
var fs = require('fs');
var https = require('https');

const app = express();

//Convert json bodies to JavaScript object
app.use(express.json());

app.get('/ads', (req, res) => {

        var sampleAds = [
            { id: 0, message: "Vendo moto", author: "Pepe" },
            { id: 1, message: "Compro TV", author: "Juan" },
            { id: 2, message: "Cambio manta", author: "Julián" }
        ];

        res.json(sampleAds);
    });

//openssl req -nodes -new -x509 -keyout server.key -out server.cert
https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app).listen(3443, () => {
    console.log("Https server started in port 3443");
});