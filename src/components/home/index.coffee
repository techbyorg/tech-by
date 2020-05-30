import {z, useContext} from 'zorium'

import context from '../../context'

if window?
  require './index.styl'

export default $home = ->
  {lang} = useContext context

  z '.z-home',
    'home'
