const express = require('express');

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

app.listen(3000, () => { console.log('Server started in port 3000') });