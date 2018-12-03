const mongoose = require('mongoose');
const db = require('./index.js');

const resourceSchema = new mongoose.Schema({
  title: String,
  description: String
});

const ResourceModel = mongoose.model('Resource', resourceSchema);

const save = (resource, callback) => {
  const newResource = new ResourceModel(resource);
  newResource.save((err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callbacll(null, results);
    }
  });
};

const getAllResources = (callback) => {
  ResourceModel.find({}, (err, resources) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, resources);
    }
  });
};

module.exports.ResourceModel = ResourceModel;
module.exports.save = save;
module.exports.getAllResources = getAllResources;