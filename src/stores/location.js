import { i18n } from '@/i18n/index.js'
import { checkCityName } from '@/ultis/city'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loadingStore } from './loading'
import { weatherStore } from './weather'
export const locationStore = defineStore('location', () => {
  const current_locale = i18n.global.locale
  const loading_store = loadingStore()
  const weather_store = weatherStore()
  const location = ref()
  const city_ = ref()
  const error = ref('')

  const fetchData = (city_name) => {
    error.value = ''
    loading_store.turnOn()

    const response = checkCityName(city_name)
    //console.log(response)
    setTimeout(() => {
      loading_store.turnOff()
    }, 500)
    location.value = response

    //weather_store.fetchData(location.value)
  }

  return { fetchData, location, error, city_ }
})
