var express = require('express');
var app = express();

// Set EJS as templating engine 
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    res.render('h', { name: 'Akashdeep' });

});

var server = app.listen(4000, function() {
    console.log('listining to port 4000')
});