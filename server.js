var express = require('express');
var app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const fs = require('fs');

var json = require('./data.json');

var inside = require('point-in-polygon');

console.log(1);
// Set EJS as templating engine 
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    var data = {
        name: 'Akram',
        hobbies: ['playing football', 'playing chess', 'cycling']
    }

    res.render('h', { data: data });

});
console.log(2);

app.put('/', function(req, res) {

    let data = req.body;

    var atest_inf_for_all_countries = {
        "latest": [...json.latest, data],
        "locations": [...json.locations, data]
    }

    data = JSON.stringify(atest_inf_for_all_countries, null, 2);

    fs.writeFileSync('data.json', data);

    res.send('Got a PUT request at /user');
});

var server = app.listen(4000, function() {
    console.log('listining to port 4000')
});