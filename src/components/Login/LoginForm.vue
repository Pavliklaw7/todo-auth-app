<template>
  <form @submit.prevent="authorize" class="form main-wrapper__form">
    <div class="form__container">
      <label for="login" class="form__label">
        <span>Name</span>
        <input type="text" class="form__input" v-model.trim="loginData.login" />
      </label>
      <label for="login" class="form__label">
        <span>Password</span>

        <input
          :type="passwordCheck ? 'text' : 'password'"
          class="form__input"
          v-model.trim="loginData.password"
        />
        <div class="form__err" v-show="authorizeFailed">
          wrong login or password.
        </div>
      </label>

      <button class="form__btn">LOGIN</button>
      <span class="form__link primary">Forgot Password</span>
    </div>

    <div class="form__footer">
      <span class="form__link">Register now</span>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      loginData: {
        login: "",
        password: "",
      },
      passwordCheck: false,
      authorizeFailed: false,
    };
  },
  methods: {
    authorize() {
      if (
        this.loginData.login === "Admin" &&
        this.loginData.password === "12345"
      ) {
        localStorage.setItem("todo-user", this.loginData.login);
        this.$router.push("todo");
      } else {
        this.authorizeFailed = true;
      }
    },
  },
};
</script>
