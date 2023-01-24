
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const smartcarService = require('./smartcar');


const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/vehicles', (req, res) => {
    var accessToken = req.header('Authorization');
    smartcarService.getVehicles(accessToken).then(function(vehicles){
        res.json(vehicles);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/vehicles/:id/location', (req, res) => {
    var accessToken = req.header('Authorization');
    var id = req.params.id;
    smartcarService.getLocation(accessToken, id).then(function(vehicles){
        res.json(vehicles);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/', (req, res) => {
    res.send("smartcar-service");
});


app.get('/vehicles/:id/vin', (req, res) => {
    var accessToken = req.header('Authorization');
    var id = req.params.id;
    smartcarService.getVin(accessToken, id).then(function(vin){
        res.json(vin);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/vehicles/:id/vin', (req, res) => {
    var accessToken = req.header('Authorization');
    var id = req.params.id;
    smartcarService.getVin(accessToken, id).then(function(vin){
        res.json(vin);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.listen(PORT, HOST);
