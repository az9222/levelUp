var mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/hwresources');
var database = mongoose.connection;

database.once('open', ()=>{console.log('database connection open')}).on('error',()=> {console.log('error')});

module.exports.db = db;
module.exports.database = database;
