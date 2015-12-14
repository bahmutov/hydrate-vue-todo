var hydration = {
  pour: function pour (selector) {
    var html = document.querySelectorAll(selector)[0].outerHTML
    localStorage.setItem(selector, html)
    console.log('poured', selector, html)
  },
  drink: function drink (selector) {
    console.log('drinking', selector)
    var html = localStorage.getItem(selector)
    if (html) {
      html = html.replace('id="app"', 'id="dry-app"')
      var el = document.querySelectorAll(selector)[0]
      el.insertAdjacentHTML('beforebegin', html)
    }
  }
}
/*
document.addEventListener('DOMContentLoaded', function () {
  hydration.drink('#app')
});
*/
hydration.drink('#app')
