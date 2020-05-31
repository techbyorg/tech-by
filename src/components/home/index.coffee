import {z, useContext} from 'zorium'
import * as Rx from 'rxjs'

import context from '../../context'

if window?
  require './index.styl'

export default $home = ->
  {lang, router} = useContext context

  z '.z-home',
    z '.header',
      z '.top',
        z '.logo'
      z '.title', lang.get 'home.title'
      z '.description', lang.get 'home.description'
    z '.products-banners',
      z '.title', lang.get 'home.productsTitle'
      z '.description', lang.get 'home.productsDescription'
    router.link z 'a', {
      href:'https://fundraise.techby.org'
      target: '_self'
    }, 'go'
