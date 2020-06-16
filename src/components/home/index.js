import { z, classKebab, useContext } from 'zorium'
import * as _ from 'lodash-es'
import $icon from 'frontend-shared/components/icon'
import {
  chevronRightIconPath, githubIconPath, appleIconPath, googlePlayIconPath
} from 'frontend-shared/components/icon/paths'

import {
  transparentIconPath, efficientIconPath, purposeIconPath
} from '../icon/paths'
import colors from '../../colors'
import context from '../../context'
import config from '../../config'

if (typeof window !== 'undefined') { require('./index.styl') }

export default function $home () {
  const { lang, router } = useContext(context)

  const products = [
    {
      name: 'Fundraise',
      description: lang.get('product.fundraise.description'),
      image: `${config.CDN_URL}/techby/home/fundraise_thumbnail.png`,
      url: 'https://fundraise.techby.org',
      iosAppUrl: 'TODO',
      androidAppUrl: 'https://play.google.com/store/apps/details?id=org.techby.fundraise',
      linkText: lang.get('product.fundraise.link')
    },
    {
      name: 'Nonprofit API',
      description: lang.get('product.api.description'),
      image: `${config.CDN_URL}/techby/home/nonprofit_api_thumbnail.png`,
      url: 'https://api.techby.org/990/v1/graphql',
      linkText: lang.get('product.api.link'),
      githubUrl: 'https://github.com/techbyorg/irs-990-api'
    }
  ]

  return z('.z-home', [
    z('.header', [
      z('.top', [
        z('.container', [
          z('.logo', [
            z('.icon'),
            'TechBy'
          ])
        ])
      ]),
      z('.content', [
        z('.title', lang.get('home.title')),
        z('.description', lang.get('home.description'))
      ]),
      z('.circuit-1'),
      z('.circuit-2')
    ]),
    z('.banner.products', [
      z('.title', lang.get('home.productsTitle')),
      z('.description', lang.get('home.productsDescription'))
    ]),
    _.map(products, (product, i) => {
      const {
        name, description, image, url, linkText,
        iosAppUrl, androidAppUrl, githubUrl
      } = product

      return z('.product', {
        className: classKebab({ isLight: (i % 2) })
      }, [
        z('.container', [
          z('.image', {
            style: {
              backgroundImage: `url(${image})`
            }
          }),
          z('.content', [
            z('.name', [
              name,
              z('span.by-tech-by', 'byTechBy')
            ]),
            z('.description', description),
            router.link(
              z('a.link', {
                href: url,
                target: '_self'
              }, [
                linkText,
                z('.icon', [
                  z($icon, {
                    icon: chevronRightIconPath,
                    color: colors.$secondary500
                  })
                ])
              ])
            ),

            z('.apps', [
              iosAppUrl &&
                z('a.app', {
                  href: iosAppUrl,
                  onclick: (e) => {
                    e.preventDefault()
                    window.alert('Coming soon!')
                  }
                }, [
                  z('.icon', [
                    z($icon, { icon: appleIconPath })
                  ]),
                  z('.text', 'App Store')
                ]),
              androidAppUrl &&
                z('a.app', {
                  href: androidAppUrl
                }, [
                  z('.icon', [
                    z($icon,
                      { icon: googlePlayIconPath })
                  ]),
                  z('.text', 'Google Play')
                ]),
              githubUrl &&
                router.link(
                  z('a.app', {
                    href: githubUrl
                  }, [
                    z('.icon', z($icon, { icon: githubIconPath })),
                    z('.text', lang.get('home.sourceCode'))
                  ])
                )
            ])
          ])
        ])
      ])
    }),
    z('.banner.about-us', [
      z('.title', lang.get('home.aboutTitle')),
      // z('.description', lang.get('home.aboutDescription')),
      z('.grid', [
        z('.column', [
          z('.icon', [
            z($icon, {
              icon: transparentIconPath,
              color: colors.$secondary500,
              size: '48px'
            })
          ]),
          z('.title', lang.get('home.aboutTransparentTitle')),
          z('.description', [
            lang.get('home.aboutTransparentDescription'),
            ' ',
            router.link(z('a.link', {
              href: 'https://github.com/techbyorg'
            }, lang.get('home.aboutTransparentGithub')))
          ])
        ]),
        z('.column', [
          z('.icon.efficient', [
            z($icon, {
              icon: efficientIconPath,
              color: colors.$secondary500,
              size: '48px'
            })
          ]),
          z('.title', lang.get('home.aboutEfficientTitle')),
          z('.description', lang.get('home.aboutEfficientDescription'))
        ]),
        z('.column', [
          z('.icon', [
            z($icon, {
              icon: purposeIconPath,
              color: colors.$secondary500,
              size: '48px'
            })
          ]),
          z('.title', lang.get('home.aboutPurposeTitle')),
          z('.description', lang.get('home.aboutPurposeDescription'))
        ])
      ])
    ])
  ])
}
