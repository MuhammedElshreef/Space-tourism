<script setup lang="js">
import { ref } from 'vue'
import navBar from './components/NavBar.vue'

import homePage from './components/HomePage.vue'
import technologyPage from './components/TechnologyPage.vue'
import crewPage from './components/CrewPage.vue'
import destinationPage from './components/DestinationPage.vue'
const activeTap = ref('homePage')
const tabs = {
  homePage,
  destinationPage,
  crewPage,
  technologyPage
}
function toggleTaps(e) {
  activeTap.value = e
}
</script>
<template>
  <div>
    <transition name="slide-fade">
      <component :is="tabs[activeTap]" @active-tap="toggleTaps">
        <template v-slot:navBar><navBar @active-tap="toggleTaps" /></template>
      </component>
    </transition>
  </div>
</template>
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
