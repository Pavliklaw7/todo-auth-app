<template>
  <section class="todo">
    <span class="todo__exit" @click="logout">EXIT</span>
    <div class="todo__bg"></div>
    <div class="todo__container">
      <div class="todo__logo">
        <img src="@/assets/img/logo.svg" alt="logo" />
      </div>
      <div class="todo__inner">
        <h2 class="todo__title">Thank you {{ userName }}!</h2>
        <hr class="todo__line" />
        <AddTodo class="todo__add-todo" @add-todo="addTodo" />
        <select class="todo__filter" v-model="filter">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not-completed">Not Completed</option>
        </select>
        <hr />
        <Loader v-if="loading" />
        <TodoList
          v-else-if="filteredTodos.length"
          v-bind:todos="filteredTodos"
          @remove-todo="removeTodo"
        />
        <p class="todo__placeholder" v-else>No todos!</p>
      </div>
    </div>
  </section>
</template>

<script>
import TodoList from "@/components/Todo/TodoList";
import AddTodo from "@/components/Todo/AddTodo";
import Loader from "@/components/Ui/Loader";
export default {
  name: "app",
  data() {
    return {
      todos: [],
      loading: true,
      filter: "all",
      userName: "",
    };
  },
  mounted() {
    this.userName = localStorage.getItem("todo-user");

    fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          this.todos = json;
          this.loading = false;
        }, 1000);
      });
  },
  computed: {
    filteredTodos() {
      let filteredTodos = "";

      if (this.filter === "all") {
        filteredTodos = this.todos;
      }

      if (this.filter === "completed") {
        filteredTodos = this.todos.filter((t) => t.completed);
      }

      if (this.filter === "not-completed") {
        filteredTodos = this.todos.filter((t) => !t.completed);
      }

      return filteredTodos;
    },
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
    logout() {
      localStorage.removeItem("todo-user");
      this.$router.push("/");
    },
  },
  components: {
    TodoList,
    AddTodo,
    Loader,
  },
};
</script>

<style >
body {
  /* background-color: #e5e5e5; */
}
</style>
