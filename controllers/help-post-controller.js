const helpPosts = require('../models/help-post-model')

exports.getAllPost = (req, res, next) => {
  helpPosts.find()
    .then(result => {
      res.status(200).json({
        message: ' data help post successfully received',
        data: result
      })
      console.log(result)
    })
    .catch(err => {
      next(err)
    })
}

exports.createPost = async (req, res, next) => {
  const { name, pekerjaan, alamat, provinsi, deskripsi, kebutuhan, norek, image, sosmed, userId } = req.body

  const helpPost = new helpPosts({
    name: name,
    userId: userId,
    pekerjaan: pekerjaan,
    alamat: alamat,
    provinsi: provinsi,
    deskripsi: deskripsi,
    kebutuhan: kebutuhan,
    norek: norek,
    image: image,
    sosmed: sosmed,
    status: true

  })

  helpPost.save()
    .then(result => {
      res.status(201).json({
        message: 'Congratulations , your post has been created.',
        data: result
      })
    })
    .catch(err => {
      console.log(err)
    })
}
