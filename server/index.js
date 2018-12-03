const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const resources = require('../database/resourcesDB.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('client/dist'));

app.get('/savedResources', (req, res) => {
  resources.getAllResources((err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.post('/savedResources', (req, res) => {
  resources.save((err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send();
    }
  });
});

// app.delete('/savedResource/:resourceId', (req, res) => {
  
// })

app.listen(port, () => {console.log(`Listening to port ${port}`)});