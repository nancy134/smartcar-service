
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

app.get('/vehicles/:id/battery', (req, res) => {
    var accessToken = req.header('Authorization');
    var id = req.params.id;
    smartcarService.getBattery(accessToken, id).then(function(battery){
        res.json(battery);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.get('/vehicles/:id/odometer', (req, res) => {
    var accessToken = req.header('Authorization');
    var id = req.params.id;
    smartcarService.getOdometer(accessToken, id).then(function(odometer){
        res.json(odometer);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.get('/vehicles/:id', (req, res) => {
    var accessToken = req.header('Authorization');
    var id = req.params.id;
    smartcarService.getVehicleAttributes(accessToken, id).then(function(attributes){
        res.json(attributes);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/vehicles/:id/tires/pressure', (req, res) => {
    var accessToken = req.header('Authorization');
    var id = req.params.id;
    smartcarService.getTirePressure(accessToken, id).then(function(tirePressure){
        res.json(tirePressure);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/vehicles/:id/fuel', (req, res) => {
    var accessToken = req.header('Authorization');
    var id = req.params.id;
    smartcarService.getFuel(accessToken, id).then(function(fuel){
        res.json(fuel);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.listen(PORT, HOST);
