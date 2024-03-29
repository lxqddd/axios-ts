const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')

const app = express()
const compiler = webpack(WebpackConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/__build__/',
  stats: {
    colors: true,
    chunks: false
  }
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const router = express.Router()
router.get('/simple/get', (req, res) => {
  res.json({
    msg: 'hello world'
  })
})

router.get('/base/get', (req, res) => {
  res.json(req.query)
})

router.post('/base/post', (req, res) => {
  res.json(req.body.data)
})

router.post('/base/buffer', (req, res) => {
  let msg = []
  req.on('data', (chunk) => {
    if (chunk) {
      msg.push(chunk)
    }
  })
  req.on('end', () => {
    let buf = Buffer.concat(msg)
    res.json(buf.toJSON())
  })
})

router.get('/error/get', (req, res) => {
  if (Math.random() > 0.5) {
    res.json({
      msg: 'hello world'
    })
  } else {
    res.status(500)
    res.end()
  }
})

router.get('/error/timeout', (req, res) => {
  setTimeout(() => {
    res.json({
      msg: 'hello world'
    })
  }, 3000)
})

router.get('/extend/get', (req, res) => {
  res.json({
    msg: 'hello world'
  })
})

router.post('/extend/post', (req, res) => {
  res.json(req.body)
})

router.options('/extend/options', (req, res) => {
  res.json({
    msg: 'this is options'
  })
})

router.delete('/extend/delete', (req, res) => {
  res.json({ msg: 'this is delete' })
})

router.head('/extend/head', (req, res) => {
  res.json({ msg: 'this is head' })
})

router.patch('/extend/patch', (req, res) => {
  res.json({ msg: 'this is patch' })
})

router.put('/extend/put', (req, res) => {
  res.json(req.body)
})

app.use(router)
const port = process.env.PORT || 8080
module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})
