<template>
  <div class="">
    <h1>Spellbook View!</h1>
    {{book}}
  </div>
</template>

<script>
  export default {
    name: '',
    mounted() {
      this.$store.dispatch("getSpellBook", this.$route.params.id)
    },
    data() {
      return {

      }
    },
    computed: {
      book() {
        return this.$store.state.activeSpellBook
      }
    },
    methods: {}
  }

</script>

<style>


</style>