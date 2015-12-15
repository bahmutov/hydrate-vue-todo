function getBottle(selectId) {
  return {
    // saves HTML snapshot for a given module
    pour: function pour () {
      var html = document.getElementById(selectId).outerHTML
      localStorage.setItem(selectId, html)
      console.log('poured', selectId, html)
    },
    // takes saved HTML snapshot and creates
    // a temporary static DOM, allowing real app
    // to load in hidden mode
    open: function open () {
      console.log('opening', selectId)
      var html = localStorage.getItem(selectId)
      if (html) {
        html = html.replace('id="app"', 'id="dry-app"')
        var el = document.getElementById(selectId)
        el.insertAdjacentHTML('beforebegin', html)
        el.style.visibility = 'hidden'
      }
    },
    // when application is ready, replaces the static
    // DRY content with fully functioning application
    drink: function drink () {
      console.log('drinking', selectId)
      // document.querySelector('#dry-app').style.visibility = 'hidden'
      var dryEl = document.getElementById('dry-app')
      if (dryEl) {
        dryEl.parentNode.removeChild(dryEl)
      }
      document.getElementById(selectId).style.visibility = ''
    }
  }
}

var bottle = getBottle('app');
bottle.open()
