const express = require('express')
const router = express.Router()

const { getAllCase, getAllCaseProv } = require('../controllers/covid-case-controller')


router.get('/case/indonesia', getAllCase)
router.get('/case/provinsi', getAllCaseProv)
module.exports = router