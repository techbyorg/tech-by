#!/usr/bin/env node
// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.

import app from '../server'
import config from '../src/config'
let httpsServer

if (config.DEV_USE_HTTPS) {
  const https = require('https')
  const fs = require('fs')
  const privateKey = fs.readFileSync('./bin/dev.key')
  const certificate = fs.readFileSync('./bin/dev.crt')
  const credentials = { key: privateKey, cert: certificate }
  httpsServer = https.createServer(credentials, app)
}

app.all('/*', function (req, res, next) {
  res.header(
    'Access-Control-Allow-Origin', config.WEBPACK_DEV_URL
  )
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  return next()
})

if (config.DEV_USE_HTTPS) {
  httpsServer.listen(config.PORT, () => console.log('Listening (https) on port %d', config.PORT))
} else {
  app.listen(config.PORT, () => console.log({
    event: 'dev_server_start',
    message: `Listening on port ${config.PORT}`
  }))
}
