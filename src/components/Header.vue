<template>
  <div
    class="h-12 bg-black text-white py-2 px-4 flex items-center justify-between transition-all duration-300 ease-in-out"
  >
    <div class="flex items-center justify-start gap-4">
      <Icon
        @click="toggle"
        :icon="!active ? 'grommet-icons:menu' : 'ri:menu-2-fill'"
        style="font-size: 30px"
        class="cursor-pointer p-1 border border-white rounded shadow shadow-white"
      />
      <h1 class="uppercase font-semibold text-nowrap">{{ $t('appname') }}</h1>
    </div>

    <select
      @change="handlechangeLanguage"
      v-model="selectValue"
      class="text-black px-2 py-1 rounded"
    >
      <option value="" hidden>Vietnamese</option>
      <option value="vi">Vietnamese</option>
      <option value="en">English</option>
    </select>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { sidebarStore } from '@/stores/sidebar.js'
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'

const sidebar_store = sidebarStore()

const selectValue = ref('')

const handlechangeLanguage = () => {
  locale.value = selectValue.value
}
const { locale } = useI18n()
//const active = computed(() => sidebar_store.active)
const { active } = storeToRefs(sidebar_store)
const { toggle } = sidebar_store
</script>

<style lang="scss" scoped></style>
