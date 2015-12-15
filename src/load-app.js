// loads scripts in parallel but makes sure they
// are executed in order
// http://www.html5rocks.com/en/tutorials/speed/script-loading/
[
  'https://cdn.jsdelivr.net/vue/1.0.11/vue.js',
  'src/app.js'
].forEach(function (src) {
  var script = document.createElement('script')
  script.src = src
  script.async = false
  document.head.appendChild(script)
})
