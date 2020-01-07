const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const express = require('express');

const url = "mongodb://localhost:27017/adsDB";

const app = express();

app.use(express.json());

let ads;

function toResponse(doc) {

    if (doc instanceof Array) {
        return doc.map(elem => toResponse(elem));
    } else {
        let { _id, ...ret } = doc;
        ret.id = doc._id.toString();
        return ret;
    }
}

app.post('/ads', async (req, res) => {
    const ad = req.body;
    if (typeof ad.message != 'string' || typeof ad.author != 'string') {
        res.sendStatus(400);
    } else {
        const newAd = {
            message: ad.message,
            author: ad.author
        };
        await ads.insertOne(newAd);
        res.json(toResponse(newAd));
    }
});

app.get('/ads', async (req, res) => {
    const allAds = await ads.find().toArray();
    res.json(toResponse(allAds));
});

app.get('/ads/:id', async (req, res) => {
    const id = req.params.id;
    const ad = await ads.findOne({ _id: new ObjectId(id) });
    if (!ad) {
        res.sendStatus(404);
    } else {
        res.json(toResponse(ad));
    }
});

app.delete('/ads/:id', async (req, res) => {
    const id = req.params.id;
    const ad = await ads.findOne({ _id: new ObjectId(id) });
    if (!ad) {
        res.sendStatus(404);
    } else {
        await ads.deleteOne({ _id: new ObjectId(id) });
        res.json(toResponse(ad));
    }
});

app.put('/ads/:id', async (req, res) => {
    const id = req.params.id;
    const ad = await ads.findOne({ _id: new ObjectId(id) });
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
                message: adReq.message,
                author: adReq.author
            };
            //Update resource
            await ads.updateOne({ _id: new ObjectId(id) }, { $set: newAd });
            
            //Return new resource
            newAd.id = id;
            res.json(newAd);
        }
    }
});

async function dbConnect() {

    let conn = await MongoClient.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    console.log("Connected to Mongo");

    ads = conn.db().collection('ads');
}

async function main() {

    await dbConnect();

    app.listen(3000, () => console.log('Server started in port 3000'));
}

main();