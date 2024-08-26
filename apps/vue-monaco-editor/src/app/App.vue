<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Txt</RouterLink>
      <RouterLink to="/html">Html</RouterLink>
      <RouterLink to="/js_ts">Js/Ts</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped lang="less">
</style>
