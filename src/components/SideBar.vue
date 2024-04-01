<template>
  <div class="col-span-3 px-2 py-2 border-r border-black h-screen text-black flex flex-col gap-6">
    <h1 class="uppercase font-semibold">Wheather-App</h1>
    <ul class="flex flex-col gap-1">
      <router-link
        to="/"
        class="px-4 py-1 rounded bg-black/60 text-white font-semibold up hover:bg-black"
        >Home</router-link
      >
      <a
        href="/search"
        class="px-4 py-1 rounded bg-black/60 text-white font-semibold up hover:bg-black"
      >
        Wheather
      </a>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const a = ref(router.currentRoute.value.fullPath)
watch(a, (value, newValue) => {
  console.log(a.value)
})
const path = router.currentRoute.value.fullPath
</script>

<style lang="scss" scoped></style>
