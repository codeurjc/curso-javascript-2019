const express = require('express');
var fs = require('fs');
var https = require('https');

const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;

const app = express();

//Convert json bodies to JavaScript object
app.use(express.json());

function verify(username, password, done) {

    if (username == 'admin' && password == 'pass') {
        return done(null, { username, password });
    } else {
        return done(null, false, { message: 'Incorrect username or password' });
    }
}

passport.use(new BasicStrategy(verify));

app.use(passport.initialize());

app.get('/ads',
    passport.authenticate('basic', { session: false }),
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