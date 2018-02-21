<template>
  <v-container>
    <login-form></login-form>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
import LoginForm from '~/components/LoginForm.vue'

@Component({
  components: {
    LoginForm
  }
})
export default class LoginPage extends Vue {
}
</script>

<style lang="css">
</style>
