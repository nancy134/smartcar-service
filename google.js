const axios = require('axios');
const utilities = require('./utilities');

exports.getPlaces = function(lat, long){
    return new Promise(function(resolve, reject){
    	var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?" +
	    	"&location="+lat+"%2C"+long +
		    "&radius=1500" +
            "&key=" + process.env.GOOGLE_API_KEY;
            console.log(url)

        var options = {
            url: url,
            method: 'GET'
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}