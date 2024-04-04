import { defineStore } from 'pinia'
import { ref } from 'vue'

export const loadingStore = defineStore('loading', () => {
  const isLoading = ref(false)

  const turnOn = () => {
    isLoading.value = true
  }
  const turnOff = () => (isLoading.value = false)

  return { isLoading, turnOff, turnOn }
})
