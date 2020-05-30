import {z} from 'zorium'
import * as _ from 'lodash-es'

import $sharedApp from 'frontend-shared/app'

import $homePage from './pages/home'
import $404Page from './pages/404'

export default $app = (props) ->

  z $sharedApp, _.defaults {
    routes:
      # add to lang/paths_en.json
      # <langKey>: $page
      home: $homePage
      fourOhFour: $404Page
  }, props
