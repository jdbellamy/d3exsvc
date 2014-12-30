var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// set our port
var port = process.env.PORT || 8089;
// enable CORS support
var cors = require('cors');
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};
app.use(cors());
app.use(allowCrossDomain);
// ROUTES FOR OUR API
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://jdbellamy:openmongo@ds047950.mongolab.com:47950/d3exdb');
var State = require('./app/models/state');
var Temp = require('./app/models/temp')
// middleware to use for all requests
router.use(function(req, res, next) {
  console.log('router event');
  next(); // make sure we go to the next routes and don't stop here
});
// test route to make sure everything is working
// (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'available apis: [ states, temps ]' });
});
// on routes that end in /states
router.route('/states')
// create a state (accessed at POST http://localhost:8080/api/states)
.post(function(req, res) {
  var state = new State();
  state.state = req.body.state;
  state.freq = req.body.freq;
  state.oid = req.body._id;
  state.ver = req.body.__v;
  //-------------------------------
  //state.freq.low = req.body.low;
  //state.freq.mid = req.body.mid;
  //state.freq.high = req.body.high;
  //-------------------------------
  // save the state and check for errors
  state.save(function(err) {
    if (err)
      res.send(err);
      res.json({ message: 'State created!' });
    });
  });
  router.route('/states')
  // get all the states (accessed at GET http://localhost:8080/api/states)
  .get(function(req, res) {
    State.find(function(err, states) {
      if (err)
        res.send(err);
        res.json(states);
    });
  });
  // on routes that end in /states/:state_id
  router.route('/states/:state_id')
  // get the state with that id
  // (accessed at GET http://localhost:8080/api/states/:state_id)
  .get(function(req, res) {
    State.findById(req.params.state_id, function(err, state) {
      if (err)
        res.send(err);
        res.json(state);
    });
  });
  router.route('/states/:state_id')
  // update the state with this id
  // (accessed at PUT http://localhost:8080/api/states/:state_id)
  .put(function(req, res) {
    // use our state model to find the state we want
    State.findById(req.params.state_id, function(err, state) {
      if (err)
        res.send(err);
        // update the states info
        state.name = req.body.name;
        // save the state
        state.save(function(err) {
          if (err)
            res.send(err);
            res.json({ message: 'state updated!' });
        });
    });
  });
  router.route('/states/:state_id')
  // delete the state with this id
  // (accessed at DELETE http://localhost:8080/api/states/:state_id)
  .delete(function(req, res) {
    State.remove({
      _id: req.params.state_id
    }, function(err, state) {
      if (err)
        res.send(err);
        res.json({ message: 'successfully deleted' });
    });
  });
  // on routes that end in /temps
  router.route('/temps')
  // create a temp (accessed at POST http://localhost:8080/api/temps)
  .post(function(req, res) {
    var temp = new Temp();
    temp.date = req.body.date;
    temp.newYork = req.body.newYork;
    temp.sanFrancisco = req.body.sanFrancisco;
    temp.austin = req.body.austin;
    temp.oid = req.body._id;
    temp.ver = req.body.__v;
    // save the temp and check for errors
    temp.save(function(err) {
      if (err)
        res.send(err);
        res.json({ message: 'temp created!' });
    });
  });
  router.route('/temps')
  // get all the temps (accessed at GET http://localhost:8080/api/temps)
  .get(function(req, res) {
    Temp.find(function(err, temp) {
      if (err)
        res.send(err);
        res.json(temp);
    });
  });
  // on routes that end in /temps/:temp_id
  router.route('/temps/:temp_id')
  // get the temp with that id
  // (accessed at GET http://localhost:8080/api/temps/:temp_id)
  .get(function(req, res) {
    Temp.findById(req.params.temp_id, function(err, temp) {
      if (err)
        res.send(err);
        res.json(temp);
    });
  });
  router.route('/temps/:temp_id')
  // update the temp with this id
  // (accessed at PUT http://localhost:8080/api/temps/:temp_id)
  .put(function(req, res) {
    // use our temp model to find the temp we want
    temp.findById(req.params.temp_id, function(err, temp) {
      if (err)
        res.send(err);
        // update the temps info
        temp.date = req.body.date;
        // save the temp
        temp.save(function(err) {
          if (err)
            res.send(err);
            res.json({ message: 'temp updated!' });
        });
    });
  });
  router.route('/temps/:temp_id')
  // delete the temp with this id
  // (accessed at DELETE http://localhost:8080/api/temps/:temp_id)
  .delete(function(req, res) {
    Temp.remove({
      _id: req.params.temp_id
    }, function(err, temp) {
      if (err)
        res.send(err);
        res.json({ message: 'successfully deleted' });
    });
  });
  // REGISTER OUR ROUTES
  // all of our routes will be prefixed with /api
  app.use('/api', router);
  // START THE SERVER
  app.listen(port);
  console.log('Magic happens on port ' + port);
