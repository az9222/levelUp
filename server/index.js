const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const resources = require('./routes/resources')
var morgan = require('morgan')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('client/dist'));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use('/bookmarks', resources)

app.listen(port, () => {console.log(`Listening to port ${port}`)});