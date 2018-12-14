const express = require('express')
const router = express.Router()
const resources = require('../../controller/resources')

router.get('/resources', resources.getAllResources)
router.post('/resources', resources.createResource)
router.delete('/resource/:id', resources.deleteResource)

module.exports = router