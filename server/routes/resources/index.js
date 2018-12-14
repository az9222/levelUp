const express = require('express')
const router = express.Router()
const resources = require('../../controller/resources')

console.log(resources)
router.get('/saved', resources.getAllResources)

module.exports = router