<script setup lang="js"></script>
<template>
  <div class="flex flex-col justify-end" v-motion-fade>
    <div class="flex flex-col lg:flex-row">
      <div class="w-full flex-1 flex justify-center lg:block pb-12">
        <img
          src="../assets/images/destination/image-moon.png"
          class="animate-spin-slow w-52 h-52 lg:w-auto lg:h-auto"
          alt="moon image"
        />
      </div>
      <div class="flex-1 flex flex-col items-center lg:items-start gap-12 lg:pl-36">
        <span class="font-ballefair lg:text-8xl text-5xl text-secondary">MOON</span>
        <p class="text-primary font-barlow lg:text-lg tracking-wide text-center lg:text-left">
          See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain
          perspective and come back refreshed. While you’re there, take in some history by visiting
          the Luna 2 and Apollo 11 landing sites.
        </p>
        <div class="w-full h-[1px] bg-[#383B4B]"></div>
        <div class="flex flex-col lg:flex-row lg:gap-28 gap-8 pb-8">
          <div class="flex flex-col gap-6">
            <span class="font-barlow-condensed text-lg tracking-wide text-primary"
              >AVG. DISTANCE</span
            >
            <p class="text-secondary font-ballefair text-4xl">384,400 KM</p>
          </div>
          <div class="flex flex-col gap-6">
            <span class="font-barlow-condensed text-lg tracking-wide text-primary"
              >EST. TRAVEL TIME</span
            >
            <p class="text-secondary font-ballefair text-4xl">3 DAYS</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
