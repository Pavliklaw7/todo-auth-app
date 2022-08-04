<template>
  <li
    :class="{ done: todo.completed }"
    @click="!editable ? completeTodo() : null"
  >
    <input
      :class="!editable ? 'input' : 'input editable'"
      :disabled="!editable"
      :value="todo.title"
      @change="input"
    />
    <span>
      <img
        style="width: 15px"
        src="@/assets/img/ui/edit.svg"
        alt="edit"
        @click.stop="edit(todo.title)"
      />
      <img
        style="width: 15px"
        src="@/assets/img/ui/close.svg"
        alt="close"
        @click.stop="$emit('remove-todo', todo.id)"
      />
    </span>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  data() {
    return {
      todoTitle: "",
      editable: false,
    };
  },
  methods: {
    edit() {
      this.editable = !this.editable;
    },
    completeTodo() {
      console.log("completeTodo");
      let todos = JSON.parse(localStorage.getItem("todos"));
      todos[this.index].completed = !todos[this.index].completed;
      localStorage.setItem("todos", JSON.stringify(todos));
      this.$emit("get-todos");
    },
    input(e) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      todos[this.index].title = e.target.value;
      localStorage.setItem("todos", JSON.stringify(todos));
      this.$emit("get-todos");
    },
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    },
  },
};
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}

span {
  display: flex;
  align-items: center;
}

span img:first-child {
  margin-right: 1rem;
}

span img {
  cursor: pointer;
}

span.editable {
  border: 1px solid #000;
}

input {
  margin-right: 1rem;
}

.input {
  border: none;
  background-color: transparent;
  width: 100%;
}

.input.editable {
  border: 1px solid #000;
}

.done {
  background-color: lightgreen;
}
</style>
