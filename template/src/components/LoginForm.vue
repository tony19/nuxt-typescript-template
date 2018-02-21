<template>
  <v-layout>
    <v-flex text-xs-center xs12 sm6 offset-sm3>
      <h2 class="title">Sign In with Google</h2>
     <v-btn class="signIn mb-2" primary @click.native="googleSignUp">Google Sign In</v-btn>
    </v-flex>
  </v-layout>

</template>

<script lang="ts">
import 'vuex'
import Vue from 'vue'
import Component from 'nuxt-class-component'

@Component({})
export default class LoginForm extends Vue {
  formEmail = ''
  formPassword = ''

  async emailLogin () {
    try {
      await this.$store.dispatch('signInWithEmail', {
        email: this.formEmail,
        password: this.formPassword
      })
      this.formEmail = ''
      this.formPassword = ''
    } catch (e) {
      console.log(e.message);
    }
  }

  async googleSignUp () {
    try {
      await this.$store.dispatch('signInWithGoogle')
      console.log('inside then statement on login')
    } catch (e) {
      console.log(e.message);
    }
  }
}
</script>

<style lang="css">
.signIn {

}
</style>
