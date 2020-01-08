const express = require('express');
var fs = require('fs');
var https = require('https');

const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require("jsonwebtoken");

const SECRET_KEY = "SECRET_KEY" //normally store this in process.env.secret

const users = require('./users');

const app = express();

app.use(passport.initialize());

async function verify(username, password, done) {

    var user = await users.find(username);

    if(!user){
        return done(null, false, { message: 'User not found' });
    }

    if(await users.verifyPassword(user, password)){
        return done(null, user);
    } else {
        return done(null, false, { message: 'Incorrect password' });
    }
}

passport.use(new BasicStrategy(verify));

app.post("/login", 
    passport.authenticate('basic', { session: false }),
    (req, res) => {
    
        const { username } = req.user;

        const opts = { expiresIn: 120 }; //token expires in 2min
        const token = jwt.sign({ username }, SECRET_KEY, opts);
        
        return res.status(200).json({ message: "Auth Passed", token });

});

const jwtOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET_KEY
}

passport.use(new JwtStrategy(jwtOpts, async (payload, done) => {
    
    var user = await users.find(payload.username);
    
    if (user) {
        return done(null, user);
    } else {
        return done(null, false, { message: 'User not found' });
    }
    
}) );

app.get('/ads',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        console.log('Logged user:', req.user);

        var sampleAds = [
            { id: 0, message: "Vendo moto", author: "Pepe" },
            { id: 1, message: "Compro TV", author: "Juan" },
            { id: 2, message: "Cambio manta", author: "Julián" }
        ];

        res.json(sampleAds);
    });

users.init();

//openssl req -nodes -new -x509 -keyout server.key -out server.cert
https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app).listen(3443, () => {
    console.log("Https server started in port 3443");
});