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

exports.getBattery = function(authorization, id){
    return new Promise(function(resolve, reject){
        var url = api + "/vehicles/" + id + "/battery";
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

exports.getOdometer = function(authorization, id){
    return new Promise(function(resolve, reject){
        var url = api + "/vehicles/" + id + "/odometer";
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

exports.getVehicleAttributes = function(authorization, id){
    return new Promise(function(resolve, reject){
        var url = api + "/vehicles/" + id;
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

exports.getTirePressure = function(authorization, id){
    return new Promise(function(resolve, reject){
        var url = api + "/vehicles/" + id + "/tires/pressure";
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

exports.getFuel = function(authorization, id){
    return new Promise(function(resolve, reject){
        var url = api + "/vehicles/" + id + "/fuel";
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

exports.getCharge = function(authorization, id){
    return new Promise(function(resolve, reject){
        var url = api + "/vehicles/" + id + "/charge";
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

exports.getPermissions = function(authorization, id){
    return new Promise(function(resolve, reject){
        var url = api + "/vehicles/" + id + "/permissions";
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

exports.controlCharge = function(authorization, id, body){
    return new Promise(function(resolve, reject){
        var url = api + "/vehicles/" + id + "/charge";
        var headers = utilities.createHeaders(authorization);
        var options = {
            url: url,
            method: 'POST',
            headers: headers,
			data: body
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}

