const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/5671474b0ecc7ab99fef088592aced6d/' + latitude + ',' + longitude + '?units=si';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the weather service', undefined);
        } else if (body.error) {
            callback('Unable to find location !', undefined);
        } else {
            // callback(undefined, {
            //     temperature: body.currently.temperature,
            //     probability: body.currently.precipProbability,
            //     summary: body.daily.data[0].summary
            // });
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out, and the high today is ' + body.daily.data[0].temperatureHigh + ' degrees with a low of ' + body.daily.data[0].temperatureLow + ' degrees.' + ' There is a ' + (body.currently.precipProbability * 100) + '% chance for rain.')
        }
    });
}

module.exports = forecast;