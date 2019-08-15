Vue.component('todo-list', {
  props: ['todos'],
  template: `
    <div class="row">
      <todo-list-item
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @todo-removed="$emit('todo-removed', $event)"
      ></todo-list-item>
    </div>
  `,
});
