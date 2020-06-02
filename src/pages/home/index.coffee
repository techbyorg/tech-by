import {z} from 'zorium'

import $home from '../../components/home'

if window?
  require './index.styl'

export default $homePage = ({requestsStream, serverData, entity}) ->

  z '.p-home',
    z $home
