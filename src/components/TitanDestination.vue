<script setup lang="js"></script>
<template>
  <div class="flex flex-col justify-end" v-motion-fade>
    <div class="flex flex-col lg:flex-row">
      <div class="w-full flex-1 flex justify-center lg:block pb-12">
        <img
          src="../assets/images/destination/image-titan.png"
          class="animate-spin-slow w-52 h-52 lg:w-auto lg:h-auto"
          alt="titan image"
        />
      </div>
      <div class="flex-1 flex flex-col items-center lg:items-start gap-12 lg:pl-36">
        <span class="font-ballefair lg:text-8xl text-5xl text-secondary">TITAN</span>
        <p class="text-primary font-barlow lg:text-lg tracking-wide text-center lg:text-left">
          The only moon known to have a dense atmosphere other than Earth, Titan is a home away from
          home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings
          of Saturn.
        </p>
        <div class="w-full h-[1px] bg-[#383B4B]"></div>
        <div class="flex flex-col lg:flex-row lg:gap-28 gap-8 pb-8">
          <div class="flex flex-col gap-6">
            <span class="font-barlow-condensed text-lg tracking-wide text-primary"
              >AVG. DISTANCE</span
            >
            <p class="text-secondary font-ballefair text-4xl">1.6 BIL. KM</p>
          </div>
          <div class="flex flex-col gap-6">
            <span class="font-barlow-condensed text-lg tracking-wide text-primary"
              >EST. TRAVEL TIME</span
            >
            <p class="text-secondary font-ballefair text-4xl">7 YEARS</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
