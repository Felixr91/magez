<template>
  <div class="">
    <form @submit.prevent="register">
      <input type="text" name="name" v-model="creds.name" placeholder="Username">
      <input type="text" name="email" v-model="creds.email" placeholder="Email">
      <input type="password" v-model="creds.password" placeholder="Password">
      <button type="submit">Register</button>
      <button type="reset">Clear</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        creds: {
          name: '',
          email: '',
          password: ''
        }

      }
    },
    computed: {},
    methods: {
      register() {
        this.$store.dispatch('register', this.creds)
      }
    }
  }

</script>

<style>


</style>