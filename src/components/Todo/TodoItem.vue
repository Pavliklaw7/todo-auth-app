<template>
  <li
    :class="{ done: todo.completed }"
    @click="todo.completed = !todo.completed"
  >
    <span>
      {{ todo.title | uppercase }}
    </span>

    <img
      style="width: 15px"
      src="@/assets/img/ui/close.svg"
      alt="close"
      v-on:click="$emit('remove-todo', todo.id)"
    />
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
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

input {
  margin-right: 1rem;
}

.done {
  background-color: lightgreen;
}
</style>
