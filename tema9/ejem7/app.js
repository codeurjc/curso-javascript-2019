const express = require('express');
var fs = require('fs');
var https = require('https');
const OAuth2Server = require('oauth2-server');

const Request = OAuth2Server.Request;
const Response = OAuth2Server.Response;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.oauth = new OAuth2Server({
	model: require('./model.js'),
	accessTokenLifetime: 60 * 60,
	allowBearerTokensInQueryString: true
});

app.all('/oauth/token', async (req, res) => {

	var request = new Request(req);
	var response = new Response(res);

	try {

		var token = await app.oauth.token(request, response);
		res.json(token);

	} catch (e) {
		res.status(e.code || 500).json(e);
	}
});

async function authenticateRequest(req, res, next) {

	var request = new Request(req);
	var response = new Response(res);

	try {

		await app.oauth.authenticate(request, response);
		next();

	} catch (e) {
		res.status(e.code || 500).json(e);
	}
}

app.get('/ads',
	authenticateRequest,
    (req, res) => {

        console.log('Logged user:', req.user);

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