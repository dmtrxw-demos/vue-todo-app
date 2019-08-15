Vue.component('create-todo-form', {
  data() {
    return {
      title: '',
      description: '',
    };
  },
  methods: {
    createTodo() {
      const newTodo = {
        title: this.title,
        description: this.description,
      };

      axios
        .post(`${serverUrl}/todos`, newTodo)
        .then(({ data }) => {
          this.title = '';
          this.description = '';
          this.$refs.title.focus();
          this.$emit('todo-created', data);
        })
        .catch(console.log);
    },
  },
  template: `
    <form class="form-inline mb-4" @submit.prevent="createTodo()">
      <label class="sr-only" for="title">Title</label>
      <input
        ref="title"
        v-model="title"
        type="text"
        class="form-control mb-2 mr-sm-2"
        id="title"
        placeholder="Enter title"
        autocomplete="off"
        autofocus>

      <label class="sr-only" for="description">Description</label>
      <input
        ref="description"
        v-model="description"
        type="text"
        class="form-control mb-2 mr-sm-2"
        id="description"
        placeholder="Enter description"
        autocomplete="off">

      <button type="submit" class="btn btn-primary mb-2">Submit</button>
    </form>
  `,
});
