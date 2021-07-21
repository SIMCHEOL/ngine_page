const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    res.send({greeting: 'Hello'})
})

router.get('/test', function(req, res) {
    res.send({greeting: 'Test'})
})

module.exports = router;