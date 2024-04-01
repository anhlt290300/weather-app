<template>
  <div class="grid grid-cols-10">
    <SideBarVue />
    <router-view />
  </div>
</template>

<script setup>
import SideBarVue from '@/components/SideBar.vue'
</script>

<style lang="scss" scoped></style>
