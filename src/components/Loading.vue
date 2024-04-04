<template>
  <div
    v-show="isLoading"
    class="fixed top-0 left-0 w-screen h-screen bg-black/60 flex items-center justify-center"
  >
    <Icon icon="mingcute:loading-fill" class="text-3xl animate-spin text-white font-semibold" />
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { loadingStore } from '@/stores/loading.js'
import { storeToRefs } from 'pinia'

const loading_store = loadingStore()

const { isLoading } = storeToRefs(loading_store)
</script>

<style lang="scss" scoped></style>
