<template>
  <div class="">
    <form @submit.prevent="createSpellBook">
      <input v-model="newbook.name" name="name" type="text">
      <button>Submit</button>
    </form>
    <div v-for="spellbook in spellbooks">
      <router-link :to="{name: 'Book', params: {id: spellbook._id}}">{{spellbook.name}}</router-link>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Spellbooks',
    mounted() {
      this.$store.dispatch('getAllSpellBooks')
    },
    data() {
      return {
        newbook: {
          name: ''
        }
      }
    },
    computed: {
      spellbooks() {
        return this.$store.state.spellbooks
      }
    },
    methods: {
      createSpellBook() {
        this.$store.dispatch('createSpellBook', this.newbook)//newbook is an object//this is the export object
      }
    }
  }

</script>

<style>


</style>