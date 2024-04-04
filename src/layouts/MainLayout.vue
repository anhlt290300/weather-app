<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <Header />

    <div class="w-full flex h-full">
      <SideBar />

      <div class="w-full h-full overflow-x-hidden">
        <router-view v-slot="{ Component }">
          <Transition mode="out-in" name="slide-right">
            <component :is="Component" />
          </Transition>
        </router-view>
      </div>
    </div>
    <Loading />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import SideBar from '@/components/SideBar.vue'
import Loading from '@/components/Loading.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.7s ease-in-out;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(-70%, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(100%, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(70%, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(-100%, 0);
}
</style>
