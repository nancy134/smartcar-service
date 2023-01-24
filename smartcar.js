const axios = require('axios');
const utilities = require('./utilities');

const api = "https://api.smartcar.com/v2.0";

exports.getVehicles = function(authorization){
    return new Promise(function(resolve, reject){
        var url = api + "/vehicles";
        var headers = utilities.createHeaders(authorization);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}

exports.getLocation = function(authorization, id){
    return new Promise(function(resolve, reject){
        var url = api + "/vehicles/" + id + "/location";
        var headers = utilities.createHeaders(authorization);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}


exports.getVin = function(authorization, id){
    return new Promise(function(resolve, reject){
        var url = api + "/vehicles/" + id + "/vin";
        var headers = utilities.createHeaders(authorization);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}