<script setup lan="js">
import NavBar from '../components/NavBar.vue'

import DestinationNavBar from '../components/DesitnationNavBar.vue'
import MoonDestination from '../components/MoonDestination.vue'
import MarsDestination from '../components/MarsDestination.vue'
import EuropaDestination from '../components/EuropaDestination.vue'
import TitanDestination from '../components/TitanDestination.vue'
import { ref } from 'vue'
const selectedPlanet = ref('MoonDestination')
const taps = {
  MoonDestination,
  MarsDestination,
  EuropaDestination,
  TitanDestination
}
function toggleTaps(e) {
  selectedPlanet.value = e
}
</script>
<template>
  <div
    v-motion-fade
    class="bg-[url(../assets/images/destination/background-destination-desktop.jpg)] bg-no-repeat bg-cover"
  >
    <NavBar class="px-12" />
    <div class="container min-h-screen" v-motion-fade>
      <div class="flex gap-4 pb-12 justify-center lg:justify-start lg:text-3xl text-xl pt-12">
        <span class="text-primary/25 font-bold">01</span>
        <h2 class="text-secondary font-barlow-condensed font-normal">PICK YOUR DESTINATION</h2>
      </div>
      <div class="flex flex-col container">
        <DestinationNavBar
          @selected-planet="toggleTaps"
          class="lg:self-end self-center xl:pr-24 2xl:pr-56"
        />
        <component :is="taps[selectedPlanet]">
          <template v-slot:destinationNavBar> /></template>
        </component>
      </div>
    </div>
  </div>
</template>
<style></style>
