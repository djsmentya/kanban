<template>
  <div id="app">
    <app-header></app-header>
   <router-view class="container"></router-view>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader'
  export default {
    name: 'app',
    components: { AppHeader }
  }
</script>

<style>
  body {
    min-height: 75rem;
    padding-top: 4.5rem;
  }
</style>
