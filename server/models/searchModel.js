const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({}, { strict: false });

module.exports = mongoose.model('myModel', mySchema, 'rawData');