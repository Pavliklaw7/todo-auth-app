<template>
  <div>
    <ul>
      <TodoItem
        v-for="(todo, index) in todos"
        :key="todo.title"
        :index="index"
        :todo="todo"
        @remove-todo="removeTodo"
        @get-todos="$emit('get-todos')"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "@/components/Todo/TodoItem";
export default {
  props: ["todos"],
  components: {
    TodoItem,
  },
  methods: {
    removeTodo(id) {
      this.$emit("remove-todo", id);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>