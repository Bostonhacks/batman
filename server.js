// Dependencies
const express         = require('express');
const morgan          = require('morgan');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');

const cron                        = require('node-cron');

const mongoose        = require('mongoose');

const alexa           = require("alexa-app");

const port            = 80;
const app             = express();

// Config

const db = require('./config/db');

// Require models
//require('');

mongoose.connect(db.url,function(err) {
  if (err) {
    console.log(err);
  }else{
    console.log("Connected to DB"); 
  }
});

// Public stuff
app.use(express.static(__dirname + '/public'));
// app.use('/libs',  express.static(__dirname + '/libs'));

// Logging
app.use(morgan(':date[clf] :method :status :url :remote-addr :response-time ms - :res[content-length]',{
    skip: function (req, res) { return req.query.updateRequest === 'true' }
}));

app.use(bodyParser.json());                                     // Parse dat 
app.use(bodyParser.urlencoded({extended: true}));               // Mmmmm URL parsing
app.use(bodyParser.text());                                     // Aww yea look at some raw text 
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(methodOverride('X-HTTP-Method-Override'));

// Tell things where to go
//require('./app/server/routes.js')(app);

// Services
//var x = require('./app/server/services/greenline2.js');


// Can you hear what I hear?
// Shhh, just
app.listen(port);
console.log('Listen: ' + port);
