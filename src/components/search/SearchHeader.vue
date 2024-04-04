<template>
  <div class="w-full bg-gray-100 px-4 py-4 flex items-start justify-start flex-col gap-1">
    <form
      @submit.prevent="handleGet"
      class="flex items-center h-8 rounded border border-black group"
      :class="{
        ' open': open
      }"
    >
      <div class="relative">
        <input
          :placeholder="$t('text_search')"
          v-model="city"
          type="text"
          @focus="open = true"
          @blur="open = false"
          class="outline-none px-2 py-1 h-full"
        />
        <div
          v-if="cities && cities.length"
          class="absolute left-0 top-full pt-1 group-[.open]:block group-hover:block hidden"
        >
          <ul class="bg-black text-white border border-black">
            <li
              v-for="(city, index) in cities"
              :key="index"
              class="py-1 px-2 text-sm text-nowrap cursor-pointer hover:bg-white hover:text-black"
              @click="handleClick(city)"
            >
              {{ city.city }} , <span v-show="city.admin_name !== ''">{{ city.admin_name }} ,</span
              >{{ city.country }}
            </li>
          </ul>
        </div>
      </div>
      <button
        type="submit"
        class="h-full bg-black/60 hover:bg-black text-white font-semibold px-3 py-1"
      >
        {{ $t('btn_search') }}
      </button>
    </form>
    <p v-show="errorText !== ''" class="text-red-700 font-semibold flex items-center gap-1">
      <span> {{ errorText && $t(errorText) }}</span>
      <Icon icon="material-symbols:error-outline" class="text-xl" />
    </p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { locationStore } from '@/stores/location.js'
import { loadingStore } from '@/stores/loading.js'
import { storeToRefs } from 'pinia'
import { Icon } from '@iconify/vue'
import { weatherStore } from '@/stores/weather'
const open = ref(false)
const location_store = locationStore()
const weather_store = weatherStore()
const loading_store = loadingStore()

const { fetchData } = location_store

const { error, location } = storeToRefs(location_store)
const { isLoading } = storeToRefs(loading_store)
const city = ref('')
const errorText = ref('')

const cities = ref([])
const handleGet = () => {
  if (!isLoading.value) {
    if (!city.value) errorText.value = 'errortext_notnull'
    else if (errorText.value) {
    } else fetchData(city.value)
  }
}

const handleClick = (l) => {
  open.value = false
  location_store.city_ = l
  weather_store.fetchData(l)
}

watch(error, (newValue, oldValue) => {
  console.log(newValue, oldValue)
  if (newValue) errorText.value = newValue
})

watch(city, (newValue, oldValue) => {
  if (city && errorText.value) errorText.value = ''
})

watch(location, (newValue, oldValue) => {
  if (newValue) {
    cities.value = newValue
  }
})
</script>

<style lang="scss" scoped></style>
