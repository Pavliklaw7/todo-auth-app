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
          <router-link class="link" to="/login">Back to login page</router-link>
        </div>
      </div>
    </section>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  name: "Login",
  components: { TheHeader, TheFooter },
  data() {
    return {
      title: "The page not Found",
    };
  },
};
</script>

<style scoped>
.link {
  position: relative;
  bottom: 2rem;
  display: block;
  color: #fff;
}
</style>
