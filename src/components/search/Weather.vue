<template>
  <div v-if="isData" class="flex flex-col">
    <div class="flex items-center justify-start gap-2 text-xl">
      <Icon icon="ion:location" class="xl:text-lg lg:text-base text-base text-nowrap" />
      <p class="font-semibold">{{ city_?.city }}({{ city_?.admin_name }}), {{ city_?.country }}</p>
    </div>
    <div class="w-full flex flex-col items-center justify-start gap-3">
      <div class="flex items-center justify-center gap-3">
        <img
          :src="`https://openweathermap.org/img/wn/${weather.weather.icon}@2x.png`"
          alt="weather icon"
        />
        <div class="flex flex-col gap-1">
          <h1 class="text-3xl font-semibold">{{ weather.main.temp }}&deg;C</h1>
          <p class="text-gray-600 italic">
            ({{ weather.main.temp_min }}&deg;C - {{ weather.main.temp_max }}&deg;C)
          </p>
        </div>
      </div>
      <h1 class="text-2xl capitalize font-medium">{{ weather.weather.description }}</h1>
      <div class="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-3 gap-2 w-full">
        <div class="grid grid-cols-1 gap-2 text-start w-full">
          <div class="flex items-center gap-1">
            <Icon icon="lets-icons:rain" class="text-2xl" />
            <h2 class="xl:text-lg lg:text-base text-base text-nowrap">{{ $t('rain') }}</h2>
          </div>
          <b>
            <span class="text-lg" v-if="weather.rain['1h']">{{ weather.rain['1h'] }}</span>
            <span class="text-lg" v-else>0</span>mm
          </b>
        </div>
        <div class="grid grid-cols-1 gap-2 text-start">
          <div class="flex items-center gap-1">
            <Icon icon="ic:outline-cloud" class="text-2xl" />
            <h2 class="xl:text-lg lg:text-base text-base text-nowrap">{{ $t('clouds') }}</h2>
          </div>
          <b>
            <span class="text-lg" v-if="weather.clouds.all">{{ weather.clouds.all }}</span>
            <span class="text-lg" v-else>0</span>%
          </b>
        </div>
        <div class="grid grid-cols-1 gap-2 text-start">
          <div class="flex items-center gap-1">
            <Icon icon="lets-icons:pressure-light" class="text-2xl" />
            <h2 class="xl:text-lg lg:text-base text-base text-nowrap">{{ $t('atm') }}</h2>
          </div>
          <b>
            <span class="text-lg">{{ weather.main.pressure }}</span
            >nPa
          </b>
        </div>

        <div class="grid grid-cols-1 gap-2 text-start">
          <div class="flex items-center gap-1">
            <Icon icon="lets-icons:humidity" class="text-2xl" />
            <h2 class="xl:text-lg lg:text-base text-base text-nowrap">{{ $t('humidity') }}</h2>
          </div>
          <b>
            <span class="text-lg">{{ weather.main.humidity }}</span
            >%
          </b>
        </div>
        <div class="grid grid-cols-1 gap-2 text-start">
          <div class="flex items-center gap-1">
            <Icon icon="ph:wind" class="text-2xl" />
            <h2 class="xl:text-lg lg:text-base text-base text-nowrap">{{ $t('w_speed') }}</h2>
          </div>
          <b>
            <span class="text-lg">{{ weather.wind.speed }}</span
            >m/s
          </b>
        </div>
        <div class="grid grid-cols-1 gap-2 text-start">
          <div class="flex items-center gap-1">
            <Icon icon="fluent-mdl2:wind-direction" class="text-2xl -rotate-[150deg]" />
            <h2 class="xl:text-lg lg:text-base text-base text-nowrap">{{ $t('w_dir') }}</h2>
          </div>
          <b>
            <span class="text-lg">{{ weather.wind.deg }}</span
            >&deg;
          </b>
        </div>
      </div>
    </div>
  </div>
  <div v-else>{{ $t('errortext_nodata') }}</div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { weatherStore } from '@/stores/weather.js'
import { locationStore } from '@/stores/location.js'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'

const weather_store = weatherStore()
const location_store = locationStore()

const { weather } = storeToRefs(weather_store)
const { location, city_ } = storeToRefs(location_store)

const isData = computed(() => {
  if (weather.value !== undefined) return true
  return false
})
</script>
