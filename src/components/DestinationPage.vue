<script setup lan="js">
import { ref } from 'vue'
import DestinationNavBar from './DesitnationNavBar.vue'
import MoonDestination from './MoonDestination.vue'
import MarsDestination from './MarsDestination.vue'
import EuropaDestination from './EuropaDestination.vue'
import TitanDestination from './TitanDestination.vue'
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
  <div>
    <component :is="taps[selectedPlanet]">
      <slot name="navBar"></slot>
      <template v-slot:destinationNavBar>
        <DestinationNavBar @selected-planet="toggleTaps"
      /></template>
    </component>
  </div>
</template>
<style></style>
