<script></script>
<template>
  <div>
    <div class="flex lg:gap-8 font-barlow-condensed text-primary text-lg">
      <button
        @click="(selectedPlanet = 'MoonDestination'), $emit('selectedPlanet', selectedPlanet)"
        class="text-2xl inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
      >
        MOON
      </button>
      <button
        @click="(selectedPlanet = 'MarsDestination'), $emit('selectedPlanet', selectedPlanet)"
        class="text-2xl inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
      >
        MARS
      </button>
      <button
        @click="(selectedPlanet = 'EuropaDestination'), $emit('selectedPlanet', selectedPlanet)"
        class="text-2xl inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
      >
        EUROPA
      </button>
      <button
        @click="(selectedPlanet = 'TitanDestination'), $emit('selectedPlanet', selectedPlanet)"
        class="text-2xl inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
      >
        TITAN
      </button>
    </div>
  </div>
</template>
