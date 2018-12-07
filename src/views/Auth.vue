<template>
  <div class="">
    <h2>Welcome to Mage Warz. Please login or register below.</h2>
    <login-form v-if="showLoginForm" />
    <register-form v-if="!showLoginForm" />
    <button @click="showLoginForm = !showLoginForm">{{showLoginForm ? 'Click to Regiser': 'Click to Login'}}</button>
  </div>
</template>

<script>
  import LoginForm from '@/components/auth/LoginForm.vue'
  import RegisterForm from '@/components/auth/RegisterForm.vue'

  export default {
    name: 'Auth',
    beforeCreate() {
      if (this.$store.state.user._id) {
        this.$router.push({ name: 'home' })
      }
    },
    data() {
      return {
        showLoginForm: true

      }
    },
    computed: {},
    methods: {},
    components: {
      LoginForm,
      RegisterForm
    }
  }

</script>

<style>


</style>