<template>
  <div class="w-full bg-cover bg-no-repeat flex flex-col">
    <SearchHeader />
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:px-4 px-2 sm:py-4 pb-28">
      <Wheather />
      <Map />
    </div>
  </div>
</template>

<script setup>
import Wheather from '@/components/search/Weather.vue'
import SearchHeader from '@/components/search/SearchHeader.vue'
import Map from '@/components/search/Map.vue'
</script>

<style lang="scss" scoped></style>
