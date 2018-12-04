const mongoose = require('mongoose');
const db = require('./index.js');

const resourceSchema = mongoose.Schema({
  title: String,
  description: String,
  url: String
});

const ResourceModel = mongoose.model('ResourceModel', resourceSchema);

const save = (resource, callback) => {
  const newResource = new ResourceModel(resource);
  newResource.save((err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const getAllResources = (callback) => {
  ResourceModel.find({}, (err, resources) => {
    if (err) {
      callback(err, null);
    } else {
      console.log(resources);
      callback(null, resources);
    }
  });
};

const deleteResource = (id, callback) => {
  ResourceModel.remove({_id: id}, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const deleteAll = (callback) => {
  ResourceModel.remove({}, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.ResourceModel = ResourceModel;
module.exports.save = save;
module.exports.getAllResources = getAllResources;
module.exports.deleteResource = deleteResource;
module.exports.deleteAll = deleteAll;