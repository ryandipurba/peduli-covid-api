// const { validationResult } = require('express-validator')
const mongoose = require("mongoose");
const db = mongoose.connection;
const collection = db.collection('hospitals')

exports.getAllHospitals = (req, res, next) => {
  collection.find().toArray()
    .then(result => {
      res.status(200).json({
        message: 'successful retrieving hospital list data',
        data: result
      })
    })
    .catch(err => {
      next(err)
    })
}