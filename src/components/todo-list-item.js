Vue.component('todo-list-item', {
  props: ['todo'],
  methods: {
    removeTodo(id) {
      axios
        .delete(`${serverUrl}/todos/${id}`)
        .then(({ data }) => {
          this.$emit('todo-removed', id);
        })
        .catch(console.log);
    },
  },
  template: `
    <transition name="fade" :duration="{ enter: 0 }">
      <div class="col-4 d-flex align-items-stretch mb-4">
        <div class="card w-100 bg-light">
          <div class="card-body">
            <h5 class="card-title">{{ todo.title }}</h5>
            <p class="card-text">{{ todo.description }}</p>
          </div>
          <div class="card-footer bg-light">
            <a
              @click.prevent="removeTodo(todo.id)"
              href="#"
              class="card-link text-danger">Remove</a>
          </div>
        </div>
      </div>
    </transition>
  `,
});
