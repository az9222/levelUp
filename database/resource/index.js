const resourceSchema = require('./schema.js')
const mongoose = require('mongoose');

const ResourceModel = mongoose.model('ResourceModel', resourceSchema);

const createResource = (resource, callback) => {
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

module.exports.createResource = createResource;
module.exports.getAllResources = getAllResources;
module.exports.deleteResource = deleteResource;