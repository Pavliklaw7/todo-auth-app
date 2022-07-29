<template>
  <div class="add-todo">
    <form class="add-todo__form" @submit.prevent="onSubmit">
      <input class="add-todo__input" type="text" v-model="title" />
      <button class="add-todo__btn btn" type="submit">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false,
        };

        this.$emit("add-todo", newTodo);
        this.title = "";
      }
    },
  },
};
</script>
