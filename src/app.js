/* global bottle, localStorage */
new Vue({ // eslint-disable-line
  el: '#app',
  data: {
    newTodo: '',
    todos: localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : [
        { text: 'item 1' },
        { text: 'item 2' },
        { text: 'item 3' },
        { text: 'item 4' },
        { text: 'item 5' },
        { text: 'item 6' },
        { text: 'item 7' },
        { text: 'item 8' },
        { text: 'item 9' },
        { text: 'item 10' }
      ]
  },
  ready: function () {
    console.log('Todo app is ready')
    // replaces fake content with live
    bottle.drink()
    document.getElementById('app').classList.remove('hidden')
  },
  methods: {
    save: function save () {
      localStorage.setItem('todos', JSON.stringify(this.todos))
      setTimeout(function () {
        // we should save the HTML after it has been rendered
        bottle.refill()
      }, 0)
    },
    addTodo: function () {
      var text = this.newTodo.trim()
      if (text) {
        this.todos.push({ text: text })
        this.newTodo = ''
      }
      this.save()
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1)
      this.save()
    }
  }
})
