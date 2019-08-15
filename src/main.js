const serverUrl = 'http://localhost:3000';

new Vue({
  el: '#app',
  data: {
    todos: [],
  },
  created() {
    axios
      .get(`${serverUrl}/todos`)
      .then(({ data }) => {
        this.todos = data;
      })
      .catch(console.log);
  },
  methods: {
    pushTodoToState(todo) {
      this.todos.push(todo);
    },
    removeTodoFromState(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
  },
});
