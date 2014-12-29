// app/models/sta.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StateSchema = new Schema({
  oid: String,
  ver: Number,
  state: String,
  freq: {
    low: Number,
    mid: Number,
    high: Number
  }
});

module.exports = mongoose.model('State', StateSchema);
