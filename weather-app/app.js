//============Asynchronous======================
// console.log('Starting')

// setTimeout( ()=>{
//     console.log('2 Second Timer')

// }, 2000)

// setTimeout(()=> {
//     console.log('0 Second Timer')
// }, 0)
// console.log('Stoping')


// =============Wheather app==============

// const request = require('request')

// // const url = 'https://api.weatherstack.com/current?access_key=0581f302fa408bd49daa5a8063e5be81&query=37.8267,-122.4233&units=f'
// const url = 'https://api.weatherstack.com/current?access_key=0581f302fa408bd49daa5a8063e5be81&query=37.8267,-122.4233'
// request({ url: url, json : true}, (error, response)=>{

//     if(error){
//         console.log('Unable to connect to weather service!')
//     }
//     else if(response.body.error){
//         console.log('Unable to find location')
//     }
//     else{
//         console.log(response.body.daily.data[0].summary )
//     }
//     console.log('It is currently' + response.body.currently.temperature + 'degree out. There is a' + response.body.currently.precipProbability + '% change of rain.')
//     // console.log(response.body.success)
    
//     // const data =JSON.parse(response.body)
//     // console.log(data)
// })



//Geocoding
//Address ->Lat/Long -> Weather

const geocodeURL = 'url'

request({ url : geocodeURL, json : true}, (error, response) => {
    if(error){


    console.log("Unable to connect to location services!")

    }
    else if(response.body.features.length === 0){
        console.log('Unable to find location. Try another search.')

    }
    
    else{

    
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(latitude, longitude) 
}

})