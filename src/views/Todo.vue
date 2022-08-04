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
          :todos="filteredTodos"
          @get-todos="getTodos"
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

    this.getTodos();
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
    getTodos() {
      const todos = localStorage.getItem("todos");

      if (!JSON.parse(todos)) {
        this.fetchTodos();
      } else {
        console.log("else");
        this.todos = JSON.parse(todos);
        this.loading = false;
      }
    },
    async fetchTodos() {
      const todos = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=3"
      )
        .then((response) => response.json())
        .then((json) => {
          setTimeout(() => {
            this.todos = json;
            this.loading = false;
          }, 1000);

          localStorage.setItem("todos", JSON.stringify(json));
        });

      console.log("todos", todos);
    },
    removeTodo(id) {
      const todos = localStorage.getItem("todos");
      const filtered = JSON.parse(todos).filter((t) => t.id !== id);

      this.todos = filtered;
      localStorage.setItem("todos", JSON.stringify(filtered));
    },
    addTodo(todo) {
      // this.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify([...this.todos, todo]));
      const newTodos = localStorage.getItem("todos");
      this.todos = JSON.parse(newTodos);
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
