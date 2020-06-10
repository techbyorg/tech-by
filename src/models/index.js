// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import SharedModel from 'frontend-shared/models/index'

import Experiment from './experiment'

export default class Model extends SharedModel {
  constructor () {
    super(...arguments)
    this.experiment = new Experiment({ cookie: this.cookie })
  }
}
