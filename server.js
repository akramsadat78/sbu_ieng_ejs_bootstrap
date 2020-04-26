var express = require('express');
var app = express();

const axios = require('axios');

var jsonContent;

axios.get('http://covid19api.xapix.io/v2/locations')
    .then((response) => {
            jsonContent = response.data;

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

            res.render('index', { dat: arrObject })

        }

    )