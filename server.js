var express = require('express');
var app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const fs = require('fs');

var json = require('./data.json');

// Set EJS as templating engine 
app.set('view engine', 'ejs');

app.get('/', (req, res) => {


    var locationsValue = {
        name: 'Armenia',
        population: '2951776',
        confirmedCases: '1677',
        deaths: '28',
        recovered: '0'
    }


    var lValue = {
        nam: 'Aa'
    }


    for (var i = 0; i < json.latest.locations.length; i++) {
        json.latest.locations.country[i];
    }


    res.render('h', {
        dat: locationsValue,
        dats: lValue
    });


});

app.put('/', function(req, res) {

    let data = req.body;

    var atest_inf_for_all_countries = {
        "latest": data.latest,
        "locations": data.locations
    }



    data = JSON.stringify(atest_inf_for_all_countries, null, 2);

    fs.writeFileSync('data.json', data);

    res.send('Got a PUT request at /user');
});

var server = app.listen(4000, function() {
    console.log('listining to port 4000')
});