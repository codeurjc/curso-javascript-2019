const express = require('express');
const morgan = require('morgan')

//Generate unique id for resources
const uuid = require('uuid/v4');

const app = express();

//Convert json bodies to JavaScript object
app.use(express.json());

app.use(morgan());

//Save info in memory 
const ads = new Map()
    .set('1',{ id: '1', message: "Vendo moto", author: "Pepe" })
    .set('2',{ id: '2', message: "Compro coche", author: "Juan" })

app.post('/ads', (req, res) => {
    const ad = req.body;
    //Validation
    if (typeof ad.message != 'string' || typeof ad.author != 'string') {
        res.sendStatus(400);
    } else {
        //Create object with needed fields and assign id
        const newAd = {
            id: uuid(),
            message: ad.message,
            author: ad.author
        };
        //Save resource
        ads.set(newAd.id, newAd);
        //Return new resource
        res.json(newAd);
    }
});

app.get('/ads', (req, res) => {
    const allAds = [...ads.values()];
    res.json(allAds);
});

app.get('/ads/:id', (req, res) => {
    const id = req.params.id;
    const ad = ads.get(id);
    if (!ad) {
        res.sendStatus(404);
    } else {
        res.json(ad);
    }
});

app.delete('/ads/:id', (req, res) => {
    const id = req.params.id;
    const ad = ads.get(id);
    if (!ad) {
        res.sendStatus(404);
    } else {
        ads.delete(id);
        res.json(ad);
    }
});

app.put('/ads/:id', (req, res) => {
    const id = req.params.id;
    const ad = ads.get(id);
    if (!ad) {
        res.sendStatus(404);
    } else {
        const adReq = req.body;
        //Validation
        if (typeof adReq.message != 'string' || typeof adReq.author != 'string') {
            res.sendStatus(400);
        } else {
            //Create object with needed fields and assign id
            const newAd = {
                id,
                message: adReq.message,
                author: adReq.author
            };
            //Update resource
            ads.set(id, newAd);
            //Return new resource
            res.json(newAd);
        }
    }
});

module.exports = app;