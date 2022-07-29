<template>
  <div>
    <TheHeader />
    <section class="login">
      <div class="login__intro">
        <img
          class="login__bg"
          src="@/assets/img/intro_bg.png"
          alt="background"
        />
        <div class="login__wrapper">
          <h2 class="login__title">{{ title }}</h2>
        </div>
      </div>
      <div class="login__wrapper">
        <LoginContent />
        <LoginForm />
      </div>
    </section>
    <TheFooter />
  </div>
</template>

<script>
import LoginContent from "../components/Login/LoginContent.vue";
import LoginForm from "../components/Login/LoginForm.vue";
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  name: "Login",
  components: { LoginContent, LoginForm, TheHeader, TheFooter },
  data() {
    return {
      title: "Welcome to Business Analytics Online",
    };
  },
};
</script>
