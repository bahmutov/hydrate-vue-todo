var hydration = {
  pour: function pour (selector) {
    var html = document.querySelector(selector).outerHTML
    localStorage.setItem(selector, html)
    console.log('poured', selector, html)
  },
  open: function open (selector) {
    console.log('opening', selector)
    var html = localStorage.getItem(selector)
    if (html) {
      html = html.replace('id="app"', 'id="dry-app"')
      var el = document.querySelector(selector)
      el.insertAdjacentHTML('beforebegin', html)
      el.style.visibility = 'hidden'
    }
  },
  drink: function drink (selector) {
    console.log('drinking', selector)
    // document.querySelector('#dry-app').style.visibility = 'hidden'
    var dryEl = document.querySelector('#dry-app')
    dryEl.parentNode.removeChild(dryEl)
    document.querySelector('#app').style.visibility = ''
  }
}
/*
document.addEventListener('DOMContentLoaded', function () {
  hydration.drink('#app')
});
*/
hydration.open('#app')
