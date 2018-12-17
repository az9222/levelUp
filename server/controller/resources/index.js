
const resource = require('../../../database/resource');

module.exports = {
    getAllResources: (req, res) => {
        console.log("here")
        resource.getAllResources((err, results) => {
            if (err) {
              res.status(500).send(err);
            } else {
              res.status(200).send(results);
            }
        })
    },
    createResource: (req, res) => {
        resource.createResource(req.body, (err, results) => {
            if (err) {
              res.status(500).send(err);
            } else {
              res.status(201).send();
            }
        });
    },
    deleteResource: (req, res) => {
        resource.deleteResource(req.params.id, (err, results) => {
            if (err) {
              res.status(500).send(err);
            } else {
              resource.getAllResources((err, results) => {
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

