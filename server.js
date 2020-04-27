var express = require('express');
var app = express();

const axios = require('axios');



app.get('/', (req, res) => {
    let jsonContent;
    axios.get('http://covid19api.xapix.io/v2/locations')
        .then(function(response, jsonContent) {

            jsonContent = response.data;
        });
    console.log(jsonContent.locations[0]);

    var locationsValue = {
        name: 'Armenia',
        population: '2951776',
        confirmedCases: '1677',
        deaths: '28',
        recovered: '0'
    }

    var arrObject = [];
    for (var i = 0; i < jsonContent.locations.length; i++) {
        arrObject.push({
            name: jsonContent.locations[i].country,
            population: jsonContent.locations[i].country_population,
            confirmedCases: jsonContent.locations[i].latest.confirmed,
            deaths: jsonContent.locations[i].latest.deaths,
            recovered: jsonContent.locations[i].latest.recovered
        });
    }

    response.render('index', { dat: arrObject })
});


var server = app.listen(4000, function() {
    console.log('listining to port 4000')
});