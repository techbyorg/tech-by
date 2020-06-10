#!/usr/bin/env node
// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import * as _ from 'lodash'
import cluster from 'cluster'
import os from 'os'

import app from '../server'
import config from '../src/config'

if (cluster.isMaster) {
  _.map(_.range(os.cpus().length), () => cluster.fork())

  cluster.on('exit', function (worker) {
    console.log({
      event: 'cluster_respawn',
      message: `Worker ${worker.id} died, respawning`
    })
    return cluster.fork()
  })
} else {
  app.listen(config.PORT, () => console.log({
    event: 'cluster_fork',
    message: `Worker ${cluster.worker.id}, listening on port ${config.PORT}`
  }))
}
