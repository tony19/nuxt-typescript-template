<template>
  <section>
    <div>
      <h1 class="title">Settings Here</h1>
      <p>Some content will go here about this project.</p>
      <nuxt-link to="/admin">&lt; Admin Dashboard</nuxt-link>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

@Component({})
export default class AdminSettingsPage extends Vue {
}
</script>
