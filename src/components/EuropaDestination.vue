<script setup lang="js"></script>
<template>
  <div class="flex flex-col justify-end" v-motion-fade>
    <div class="flex flex-col lg:flex-row">
      <div class="w-full flex-1 flex justify-end lg:block pb-12">
        <img
          class="animate-spin-slow w-52 h-52 lg:w-auto lg:h-auto"
          src="../assets/images/destination/image-europa.png"
          alt="europa image"
        />
      </div>
      <div class="flex-1 flex flex-col items-center lg:items-start gap-12 lg:pl-36">
        <span class="font-ballefair lg:text-8xl text-5xl text-secondary">EUROPA</span>
        <p class="text-primary font-barlow lg:text-lg tracking-wide text-center lg:text-left">
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s
          dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or
          simple relaxation in your snug wintery cabin.
        </p>
        <div class="w-full h-[1px] bg-[#383B4B] p"></div>
        <div class="flex flex-col lg:flex-row lg:gap-28 gap-8 pb-8">
          <div class="flex flex-col gap-6">
            <span class="font-barlow-condensed text-lg tracking-wide text-primary"
              >AVG. DISTANCE</span
            >
            <p class="text-secondary font-ballefair text-4xl">628 MIL. kM</p>
          </div>
          <div class="flex flex-col gap-6">
            <span class="font-barlow-condensed text-lg tracking-wide text-primary"
              >EST. TRAVEL TIME</span
            >
            <p class="text-secondary font-ballefair text-4xl">3 YEARS</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
