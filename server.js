
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const smartcarService = require('./smartcar');
const googleService = require('./google');


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

app.get('/vehicles/:id/charge', (req, res) => {
    var accessToken = req.header('Authorization');
    var id = req.params.id;
    smartcarService.getCharge(accessToken, id).then(function(charge){
        res.json(charge);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.get('/vehicles/:id/permissions', (req, res) => {
    var accessToken = req.header('Authorization');
    var id = req.params.id;
    smartcarService.getPermissions(accessToken, id).then(function(permissions){
        res.json(permissions);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.post('/vehicles/:id/charge', (req, res) => {
    var accessToken = req.header('Authorization');
    var id = req.params.id;
	var body = req.body;
    smartcarService.controlCharge(accessToken, id, body).then(function(result){
        res.json(result);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.post('/vehicles/:id/security', (req, res) => {
    var accessToken = req.header('Authorization');
    var id = req.params.id;
	var body = req.body;
    smartcarService.controlSecurity(accessToken, id, body).then(function(result){
        res.json(result);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/vehicles/:id/engine/oil', (req, res) => {
    var accessToken = req.header('Authorization');
    var id = req.params.id;
    smartcarService.getEngineOil(accessToken, id).then(function(result){
        res.json(result);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/vehicles/:id/battery/capacity', (req, res) => {
    var accessToken = req.header('Authorization');
    var id = req.params.id;
    smartcarService.getBatteryCapacity(accessToken, id).then(function(result){
        res.json(result);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.get('/user', (req, res) => {
    var accessToken = req.header('Authorization');
    
    smartcarService.getUser(accessToken).then(function(result){
        res.json(result);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.get('/vehicles/:id/tesla/compass', (req, res) => {
    var accessToken = req.header('Authorization');
    var id = req.params.id;
    smartcarService.getTeslaCompass(accessToken, id).then(function(result){
        res.json(result);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.get('/vehicles/:id/tesla/charge/ammeter', (req, res) => {
    var accessToken = req.header('Authorization');
    var id = req.params.id;
    smartcarService.getTeslaChargeAmperage(accessToken, id).then(function(result){
        res.json(result);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});

app.get('/google/places', (req, res) => {
    var lat = req.query.lat;
	var long = req.query.long;
    googleService.getPlaces(lat, long).then(function(result){
        res.json(result);
    }).catch(function(err){
        console.log(err);
        res.status(400).json(err);
    });
});


app.listen(PORT, HOST);
