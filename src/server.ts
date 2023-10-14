import express from 'express'
import payload from 'payload'

require('dotenv').config()
const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})
app.get('/posts/video/stream', async(_, res) => {
  try {
    const req = await fetch('http://localhost:3002/api/posts')
    const data = await req.json()
    const short=await data.docs
    const shortVideos = short.filter(item => item.type == "shortVideo");

    return res.json(shortVideos);


  } catch (err) {
    console.log(err)
    res.status(404).send("not found ");
  }
})

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(3002)
}

start()
