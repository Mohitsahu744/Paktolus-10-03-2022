const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=0581f302fa408bd49daa5a8063e5be81&query=37.8267,-122.4233&units=f'

    request ({url, json:true}, (error, {body}) => {
        if (error){
            callback('Unable to connect to weather server', undefined)
        }
        else if(body.error){
            callback('Unable to find location', undefined)
        }
        else{
            callback(undefined, body.daily.data[0].summary )
        }
    })
}
module.exports = forecast