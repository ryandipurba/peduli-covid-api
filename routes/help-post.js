const express = require('express')
const router = express.Router()
const { getAllPost, createPost, getHelpPostById } = require('../controllers/help-post-controller')

router.get('/posts', getAllPost)
router.post('/create-post', createPost)
router.get('/post/:postId', getHelpPostById);

module.exports = router

