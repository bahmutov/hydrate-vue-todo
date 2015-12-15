function getBottle (selectId, verbose) {
  function noop () {}

  var log = verbose ? console.log.bind(console) : noop

  function formDrySelectorId (id) {
    return 'dry-' + id
  }

  var dryId = formDrySelectorId(selectId)

  /* global localStorage */

  return {
    // saves HTML snapshot for a given module
    pour: function pour () {
      var html = document.getElementById(selectId).outerHTML
      localStorage.setItem(selectId, html)
      log('poured', selectId, html)
    },
    // takes saved HTML snapshot and creates
    // a temporary static DOM, allowing real app
    // to load in hidden mode
    open: function open () {
      log('opening', selectId)
      var html = localStorage.getItem(selectId)
      if (html) {
        html = html.replace('id="' + selectId + '"',
          'id="' + dryId + '"')
        var el = document.getElementById(selectId)
        el.insertAdjacentHTML('beforebegin', html)
        el.style.visibility = 'hidden'
      }
    },
    // when application is ready, replaces the static
    // DRY content with fully functioning application
    drink: function drink () {
      log('drinking', selectId)
      var dryEl = document.getElementById(dryId)
      if (dryEl) {
        dryEl.parentNode.removeChild(dryEl)
      }
      document.getElementById(selectId).style.visibility = ''
    }
  }
}

var bottle = getBottle('app', true)
bottle.open()
