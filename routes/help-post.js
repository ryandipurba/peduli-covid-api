const express = require('express')
const router = express.Router()
const { getAllPost, createPost } = require('../controllers/help-post-controller')

router.get('/post', getAllPost)
router.post('/create-post', createPost)
module.exports = router

