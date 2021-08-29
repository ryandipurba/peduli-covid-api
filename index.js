require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const authRouter = require('./routes/auth')
const hospitalRouter = require('./routes/hospital')
const helpPostRouter = require('./routes/help-post')
const port = process.env.PORT || 8000;
const app = express();

app.use(cors())
app.use(express.json())
app.use('/auth', authRouter)
app.use('/info-penting', hospitalRouter)
app.use('/help', helpPostRouter)
// app.get("/", (req, res) => {
//   res.send("Hello Quotes!");
// });

// server mongodb
mongoose.connect(process.env.MONGO_URL , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch(err => console.log(err))