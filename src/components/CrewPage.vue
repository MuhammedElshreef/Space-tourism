<script setup lan="js">
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
</script>
<template>
  <div
    class="bg-[url(../assets/images/crew/background-crew-desktop.jpg)] bg-no-repeat bg-cover flex flex-col justify-end"
  >
    <slot name="navBar"></slot>
    <div class="container min-h-screen">
      <div class="flex lg:justify-start justify-center gap-4 pb-12 lg:text-3xl text-xl">
        <span class="text-primary/25 font-bold">02</span>
        <h2 class="text-secondary font-barlow-condensed font-normal">PICK YOUR DESTINATION</h2>
      </div>
      <swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :spaceBetween="30"
        :navigation="false"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: false
        }"
        :pagination="{
          clickable: true
        }"
      >
        <swiper-slide
          ><div class="flex lg:flex-row flex-col">
            <div
              class="flex flex-col lg:items-start items-center lg:pt-36 pt-12 lg:gap-6 gap-2 lg:order-1 order-2 pr-4 lg:pr-0"
            >
              <span class="font-ballefair lg:text-3xl text-secondary">COMMANDER</span>
              <span class="lg:text-4xl text-2xl text-primary font-ballefair uppercase"
                >Douglas Hurley</span
              >
              <p class="text-secondary font-barlow text-lg text-center lg:text-start">
                Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former
                NASA astronaut. He launched into space for the third time as commander of Crew
                Dragon Demo-2.
              </p>
            </div>
            <div class="lg:order-2 order-1 flex justify-center pl-12 lg:pl-0">
              <img
                src="../assets/images/crew/image-douglas-hurley.png"
                class="lg:w-[600px] w-56"
                alt=""
              />
            </div></div
        ></swiper-slide>
        <swiper-slide
          ><div class="flex lg:flex-row flex-col">
            <div
              class="flex flex-col lg:items-start items-center lg:pt-36 pt-8 lg:gap-6 gap-2 lg:order-1 order-2 pr-4 lg:pr-0"
            >
              <span class="font-ballefair lg:text-3xl text-secondary">Mission Specialist </span>
              <span class="lg:text-4xl text-2xl text-primary font-ballefair uppercase"
                >MARK SHUTTLEWORTH</span
              >
              <p class="text-secondary font-barlow text-lg text-center lg:text-start">
                Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind
                the Linux-based Ubuntu operating system. Shuttleworth became the first South African
                to travel to space as a space tourist..
              </p>
            </div>
            <div class="lg:order-2 order-1 flex justify-center pt-8">
              <img
                src="../assets/images/crew/image-mark-shuttleworth.png"
                class="lg:w-full w-56 lg:h-full h-[280px] pr-6"
                alt=""
              />
            </div></div
        ></swiper-slide>

        <swiper-slide
          ><div class="flex lg:flex-row flex-col pt-6">
            <div
              class="flex flex-col lg:items-start items-center lg:pt-36 pt-14 lg:gap-6 gap-2 lg:order-1 order-2 pr-4 lg:pr-0"
            >
              <span class="font-ballefair lg:text-3xl text-secondary">PILOT</span>
              <span class="lg:text-4xl text-2xl text-primary font-ballefair uppercase"
                >Victor Glover</span
              >
              <p class="text-secondary font-barlow text-lg text-center lg:text-start">
                Pilot on the first operational flight of the SpaceX Crew Dragon to the International
                Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He
                was a crew member of Expedition 64, and served as a station systems flight engineer.
              </p>
            </div>
            <div class="lg:order-2 order-1 flex justify-center">
              <img
                src="../assets/images/crew/image-victor-glover.png"
                class="lg:w-[600px] w-56"
                alt=""
              />
            </div></div
        ></swiper-slide>
        <swiper-slide
          ><div class="flex lg:flex-row flex-col lg:pt-0 pt-16">
            <div
              class="flex flex-col lg:items-start items-center lg:pt-36 pt-12 lg:gap-6 gap-2 lg:order-1 order-2 pr-4 lg:pr-0"
            >
              <span class="font-ballefair lg:text-3xl text-secondary uppercase"
                >Flight Engineer</span
              >
              <span class="lg:text-4xl text-2xl text-primary font-ballefair uppercase"
                >Anousheh Ansari</span
              >
              <p class="text-secondary font-barlow text-lg text-center lg:text-start">
                Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
                Ansari was the fourth self-funded space tourist, the first self-funded woman to fly
                to the ISS, and the first Iranian in space.
              </p>
            </div>
            <div class="lg:order-2 order-1 flex justify-center">
              <img
                src="../assets/images/crew/image-anousheh-ansari.png"
                class="lg:w-[600px] w-56"
                alt=""
              />
            </div></div
        ></swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<style>
.swiper-pagination {
  @apply flex lg:pb-20 lg:translate-y-0 justify-center lg:justify-start -translate-y-[270px] pr-4 lg:pr-0;
}
.swiper-pagination-bullet {
  width: 15px;
  height: 15px;
  border-radius: 100%;
  color: #eee;
  opacity: 1;
  background: rgb(128, 128, 128, 0.2);
}
.swiper-pagination-bullet-active {
  color: #fff;
  background: white;
}
</style>
