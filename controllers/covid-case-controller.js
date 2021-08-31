// const { validationResult } = require('express-validator')

const { default: axios } = require("axios");
const { Result } = require("express-validator");

dataIndonesia = []
dataAllProv = []

// get all case indonesia
axios.get("https://api.kawalcorona.com/indonesia")
 .then(res => {
  dataIndonesia = res.data
 })
 .catch((error) => console.log("Error : " + error));

// get all case province
axios.get("https://api.kawalcorona.com/indonesia/provinsi")
 .then(res => {
  dataAllProv = res.data
 })
 .catch((error) => console.log("Error : " + error));



exports.getAllCase = (req, res, next) => {
 res.status(201).json({
  message: 'Congratulations , your data has been retrieved.',
  data: dataIndonesia
 })
}

exports.getAllCaseProv = (req, res, next) => {
 res.status(201).json({
  message: 'Congratulations , your data has been retrieved.',
  data: dataAllProv
 })
}