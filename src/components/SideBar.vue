<template>
  <div
    class="lg:px-2 px-4 py-2 lg:border-r border-black lg:h-full h-fit text-black flex flex-col gap-6 overflow-hidden transition-all duration-300 ease-in-out lg:relative fixed left-0 lg:top-0 bottom-0 z-50"
    :class="{ ' lg:w-24 w-full': !active, 'lg:w-72 w-full': active }"
  >
    <ul class="lg:flex flex-col lg:gap-1 gap-4 grid grid-cols-2">
      <router-link
        to="/"
        class="flex lg:justify-start justify-center items-center gap-1 py-1 rounded text-white font-semibold up hover:bg-black"
        :class="{
          'bg-black ': path === 'home',
          'bg-black/60': path !== 'home',
          'sm:flex-col sm:gap-[2px]': !active
        }"
      >
        <Icon icon="material-symbols:home-outline" style="font-size: 30px" />
        <span :class="{ 'sm:text-sm sm:font-thin': !active }">{{ $t('home') }}</span>
      </router-link>
      <router-link
        to="/search"
        class="flex lg:justify-start justify-center items-center gap-1 py-1 rounded text-white font-semibold up hover:bg-black"
        :class="{
          'bg-black ': path === 'search',
          'bg-black/60': path !== 'search',
          'sm:flex-col sm:gap-[2px]': !active
        }"
      >
        <Icon icon="material-symbols:search" style="font-size: 30px" />
        <span :class="{ 'sm:text-sm sm:font-thin': !active }">{{ $t('search') }}</span>
      </router-link>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { sidebarStore } from '@/stores/sidebar.js'
import { Icon } from '@iconify/vue'

const sidebar_store = sidebarStore()
const router = useRoute()
const active = computed(() => sidebar_store.active)
const path = computed(() => {
  return router.name
})
</script>

<style lang="scss" scoped></style>
