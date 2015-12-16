'use strict'

/* global localStorage, bottle */
var savedValue = localStorage.getItem('hydrate') === 'true'
var el = document.getElementById('hydrate')
el.checked = savedValue
window.hydrate = el.checked

el.addEventListener('click', function () {
  console.log('should hydrate next time', el.checked)
  localStorage.setItem('hydrate', el.checked)
  if (el.checked) {
    bottle.refill()
  } else {
    bottle.recycle()
  }
})
