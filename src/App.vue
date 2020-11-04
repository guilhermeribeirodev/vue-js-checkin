<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/beer1.png" />
    <h1>Welcome to the pub</h1>
    <base-card>
      <UserSignInForm />
    </base-card>
  </div>
</template>

<script>
import UserSignInForm from "@/components/UserSignInForm.vue";
import BaseCard from "@/components/BaseCard.vue";

export default {
  name: "App",
  components: {
    UserSignInForm,
    BaseCard,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
