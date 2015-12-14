new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [
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
    hydration.drink('#app')
  },
  methods: {
    addTodo: function () {
      var text = this.newTodo.trim()
      if (text) {
        this.todos.push({ text: text })
        this.newTodo = ''
      }
      hydration.pour('#app')
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1)
    }
  }
})
