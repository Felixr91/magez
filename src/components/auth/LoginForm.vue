<template>
  <div class="">
    <form @submit.prevent="login">
      <input type="text" name="login" placeholder="Email" v-model="creds.email">
      <input type="password" name="password" placeholder="Password" v-model="creds.password">
      <button type="submit">Login</button>
      <button type="reset">Clear</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'LoginForm',
    data() {
      return {
        creds: {
          email: '',
          password: ''
        }

      }
    },
    computed: {},
    methods: {
      login() {
        this.$store.dispatch('login', this.creds)
      }
    }
  }

</script>

<style>


</style>