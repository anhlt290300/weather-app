<template>
  <div class="w-full p-2 border border-black rounded flex items-center justify-center z-10">
    <div ref="mapContainer" class="w-full aspect-video border border-black/60"></div>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref, watch } from 'vue'
import leaflet from 'leaflet'
import { locationStore } from '@/stores/location.js'
import { storeToRefs } from 'pinia'
const lat = ref(0)
const lon = ref(0)
const map = ref()
const mapContainer = ref()
const location_store = locationStore()

const { city_ } = storeToRefs(location_store)
const clearMarker = ref(false)
const marker = ref([])
onBeforeMount(() => {
  if (navigator.geolocation) {
    // Retrieve current position
    navigator.geolocation.getCurrentPosition((position) => {
      lat.value = position.coords.latitude
      lon.value = position.coords.longitude
      map.value = leaflet.map(mapContainer.value).setView([lat.value, lon.value], 16)
      leaflet
        .tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        })
        .addTo(map.value)
      //markerLayer.value = leaflet.layerGroup().addTo(map.value)
      marker.value.push(leaflet.marker([lat.value, lon.value]).addTo(map.value))
    })
  }
})

watch(city_, (newValue, oldValue) => {
  if (newValue) {
    marker.value.forEach((e) => e.remove())
    lat.value = city_.value.lat
    lon.value = city_.value.lng
    map.value.setView([lat.value, lon.value])
    marker.value.push(leaflet.marker([lat.value, lon.value]).addTo(map.value))
  }
})
</script>

<style lang="scss" scoped></style>
