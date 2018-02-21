<template>
  <section class="">
    <h2 class="title">Admin Dashboard for Child Routes</h2>
    <h5 class="subheading">The index page inside the admin folder</h5>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

@Component({})
export default class AdminIndexPage extends Vue {
}
</script>

<style>
.avatar {
  max-width: 100px;
}
.avatar img {
  max-width: 100%;
}
</style>
