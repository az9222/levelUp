const mongoose = require('mongoose');

const resourceSchema = mongoose.Schema({
  info: Map,
  subjectType: String
});

module.exports = resourceSchema