var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hwresources');

//Need to add check and create option
var database = mongoose.connection;

database.once('open', () => {
    console.log('database connection open')
})

database.on('error', ()=> {
    console.log('error')
});

module.exports.database = database;