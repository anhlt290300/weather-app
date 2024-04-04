<template>
  <div
    class="w-full h-full bg-cover bg-no-repeat flex items-center justify-center"
    :style="{ backgroundImage: 'url(' + background + ')' }"
  >
    <h1 class="text-2xl font-bold">{{ $t('welcome') }}</h1>
  </div>
</template>

<script setup>
import background from '@/assets/pictures/background.jpg'
import axios from 'axios'
</script>

<style lang="scss" scoped></style>
