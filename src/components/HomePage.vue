<script setup lang="js"></script>
<template>
  <div
    class="lg:bg-[url(../assets/images/home/background-home-desktop.jpg)] bg-[url(../assets/images/home/background-home-mobile.jpg)] bg-no-repeat bg-cover"
  >
    <slot name="navBar"></slot>
    <img src="" alt="" />
    <div class="container grid lg:grid-cols-2 pt-24 justify-items-center min-h-screen lg:px-14">
      <div class="flex flex-col lg:gap-12 gap-6">
        <p
          class="text-primary lg:text-2xl text-base font-normal font-barlow-condensed text-center lg:text-left"
        >
          SO, YOU WANT TO TRAVEL TO
        </p>
        <span
          class="text-secondary lg:text-9xl text-5xl font-ballefair font-normal text-center lg:text-left"
          >SPACE</span
        >
        <p
          class="text-primary lg:text-2xl text-base font-normal font-barlow text-center lg:text-left"
        >
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
          truly out of this world experience!
        </p>
      </div>
      <div class="lg:pt-16 lg:translate-y-0 -translate-y-6">
        <button
          class="lg:h-72 lg:w-72 h-48 w-48 rounded-full bg-white transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500 font-ballefair lg:text-3xl font-normal text-black"
          @click="(activeTap = 'destinationPage'), $emit('activeTap', activeTap)"
        >
          EXPLORE
        </button>
      </div>
    </div>
  </div>
</template>
