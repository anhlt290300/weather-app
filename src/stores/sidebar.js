import { defineStore } from 'pinia'
import { ref } from 'vue'

export const sidebarStore = defineStore('sidebar', () => {
  const active = ref(true)

  const toggle = () => {
    active.value = !active.value
  }

  return { active, toggle }
})
