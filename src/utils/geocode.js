const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=1&access_token=pk.eyJ1IjoiYXNoaXNocHV0dGFhIiwiYSI6ImNqeW12M3lxMTBuZmIzZG85aWY2eXI5dXgifQ.XLRaz3FK5kIhLrrWllRbKQ';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to the location service", undefined);
        } else if (body.features.length === 0) {
            callback("Location not found ! Try a different search string.", undefined);
        } else {
            callback(undefined, {
                location: body.features[0].place_name,
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1]
            });
        }
    });
};

module.exports = geocode;