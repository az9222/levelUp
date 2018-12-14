
const resources = require('../../../database/resourcesDB');

module.exports = {
    getAllResources: (req, res) => {
        console.log("here")
        resources.getAllResources((err, results) => {
            if (err) {
              res.status(500).send(err);
            } else {
              res.status(200).send(results);
            }
        })
    },
    createResource: (req, res) => {
        resources.save(req.body, (err, results) => {
            if (err) {
              res.status(500).send(err);
            } else {
              res.status(201).send();
            }
        });
    },
    deleteResource: (req, res) => {
        resources.deleteResource(req.params.id, (err, results) => {
            if (err) {
              res.status(500).send(err);
            } else {
              resources.getAllResources((err, results) => {
                if (err) {
                  res.status(500).send(err);
                } else {
                  res.status(200).send(results);
                }
              });
            }
        });
    }
};

