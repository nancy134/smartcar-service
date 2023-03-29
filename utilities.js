exports.processAxiosError = function(error){
    if (error.response){
        return(error.response.data);
    } else if (error.request){
        return(error.request);
    } else {
        return(error.message);
    }
}

exports.createHeaders = function(authorization){
    var headers = {
        "Authorization" : authorization,
        "SC-Unit-System": "imperial"
    };
    return headers;
}
