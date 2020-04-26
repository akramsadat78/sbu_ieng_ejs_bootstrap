var express = require('express');
var app = express();

var json = require('./data.json');

// Set EJS as templating engine 
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    var data = {
        name: 'Akram',
        hobbies: ['playing football', 'playing chess', 'cycling']
    }

    res.render('h', { data: data });

});

var server = app.listen(4000, function() {
    console.log('listining to port 4000')
});