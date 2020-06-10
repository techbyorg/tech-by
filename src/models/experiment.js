export default class Experiment {
  // TODO: have exp cookies only last ~ a month
  constructor ({ cookie }) {
    let rand
    this.get = this.get.bind(this)
    this.cookie = cookie
    let expDefault = this.cookie.get('exp:default')
    if (!expDefault) {
      rand = Math.random()
      expDefault = rand > 0.5
        ? 'visible'
        : 'control'
      this.cookie.set('exp:default', expDefault)
    }

    window?.ga('send', 'event', 'exp', `default:${expDefault}`)

    let expGuidesOnboard = this.cookie.get('exp:guidesOnboard')
    if (!expGuidesOnboard) {
      rand = Math.random()
      expGuidesOnboard = rand > 0.5
        ? 'visible'
        : 'control'
      this.cookie.set('exp:guidesOnboard', expGuidesOnboard)
    }

    window?.ga('send', 'event', 'exp', `guidesOnboard:${expGuidesOnboard}`)

    let expWelcomeOverlay = this.cookie.get('exp:welcomeOverlay')
    if (!expWelcomeOverlay) {
      rand = Math.random()
      expWelcomeOverlay = rand > 0.5
        ? 'visible'
        : 'control'
      this.cookie.set('exp:welcomeOverlay', expWelcomeOverlay)
    }

    window?.ga('send', 'event', 'exp', `welcomeOverlay:${expWelcomeOverlay}`)

    let expTripsOnboard = this.cookie.get('exp:tripsOnboard')
    if (!expTripsOnboard) {
      rand = Math.random()
      expTripsOnboard = rand > 0.5
        ? 'visible'
        : 'control'
      this.cookie.set('exp:tripsOnboard', expTripsOnboard)
    }

    window?.ga('send', 'event', 'exp', `tripsOnboard:${expTripsOnboard}`)

    this.experiments = {
      default: expDefault,
      guidesOnboard: expGuidesOnboard, // seems to be doing worse, but leaving
      tripsOnboard: expTripsOnboard,
      welcomeOverlay: expWelcomeOverlay
    }
  }

  get (key) {
    return this.experiments[key]
  }
}
