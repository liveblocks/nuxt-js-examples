import { authorize } from '@liveblocks/node'
import express from 'express'

const app = express()
app.use(express.json())

app.post('/auth', (req, res) => {
  authorize({
    room: req.body.room,
    secret: process.env.LIVEBLOCKS_SECRET_KEY,
  })
    .then((authResponse) => {
      res.send(authResponse.body)
    })
    .catch((er) => {
      console.log(er)
    })
})

export default app
