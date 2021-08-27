const express = require('express')
const { body } = require('express-validator')
const router = express.Router()

const { getAllHospitals } = require('../controllers/hospital-controller')


router.get('/hospital', getAllHospitals)
module.exports = router