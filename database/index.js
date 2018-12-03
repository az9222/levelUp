var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hwresources');
var db = mongoose.connection;

db.once('open', ()=>{console.log('database connection open')}).on('error', ()=> {console.log('error')});