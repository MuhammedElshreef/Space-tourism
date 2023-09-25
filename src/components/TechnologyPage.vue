<script setup lan="js">
import { ref, watch } from 'vue'

const isFirstBtnActive = ref(true)

const toggleFirstBtnActive = () => {
  isFirstBtnActive.value = !isFirstBtnActive.value
}

const firstButtonClass = ref('bg-white text-black')
watch(isFirstBtnActive, () => {
  if (isFirstBtnActive.value === true) {
    firstButtonClass.value = 'bg-white text-black'
    isSecondBtnActive.value = false
    isThirdBtnActive.value = false
  } else {
    firstButtonClass.value = ''
  }
})
// <===============================================>
const isSecondBtnActive = ref()

const toggleSecondBtnActive = () => {
  isSecondBtnActive.value = !isSecondBtnActive.value
}

const secondButtonClass = ref('')

watch(isSecondBtnActive, () => {
  if (isSecondBtnActive.value === true) {
    secondButtonClass.value = 'bg-white text-black'
    isFirstBtnActive.value = false
    isThirdBtnActive.value = false
  } else {
    secondButtonClass.value = ''
  }
})
// <===============================================>
const isThirdBtnActive = ref()

const toggleThirdBtnActive = () => {
  isThirdBtnActive.value = !isThirdBtnActive.value
}

const thirdButtonClass = ref('')

watch(isThirdBtnActive, () => {
  if (isThirdBtnActive.value === true) {
    thirdButtonClass.value = 'bg-white text-black'
    isFirstBtnActive.value = false
    isSecondBtnActive.value = false
  } else {
    thirdButtonClass.value = ''
  }
})
// <===============================================>
</script>
<template>
  <div
    class="bg-[url(../assets/images/technology/background-technology-desktop.jpg)] bg-no-repeat bg-cover flex flex-col justify-end"
  >
    <slot name="navBar"></slot>
    <div class="container min-h-screen">
      <div class="flex gap-4 pb-12 lg:justify-start justify-center">
        <span class="text-primary/25 text-3xl font-bold">03</span>
        <h2 class="text-secondary font-barlow-condensed text-3xl font-normal">SPACE LAUNCH 101</h2>
      </div>
      <div class="flex lg:justify-center gap-16 flex-col lg:flex-row">
        <div
          class="flex lg:flex-col flex-row gap-8 lg:order-1 order-2 pb-12 justify-center lg:justify-start"
        >
          <button
            class="w-16 h-16 rounded-full border-2 border-white"
            :class="firstButtonClass"
            @click="toggleFirstBtnActive"
          >
            1
          </button>
          <button
            class="w-16 h-16 rounded-full border-2 border-white"
            :class="secondButtonClass"
            @click="toggleSecondBtnActive"
          >
            2
          </button>
          <button
            class="w-16 h-16 rounded-full border-2 border-white"
            :class="thirdButtonClass"
            @click="toggleThirdBtnActive"
          >
            3
          </button>
        </div>
        <div class="flex lg:flex-row flex-col lg:order-2" v-show="isFirstBtnActive">
          <div class="flex flex-col gap-8 items-center lg:items-start lg:order-1 order-2">
            <span class="text-primary font-barlow">THE TERMINOLOGY…</span>

            <h2 class="text-secondary font-ballefair lg:text-5xl text-3xl">LAUNCH VEHICLE</h2>
            <p class="text-primary font-barlow text-lg lg:tracking-wide text-center lg:text-left">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
              payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X
              carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite
              an awe-inspiring sight on the launch pad!
            </p>
          </div>
          <img
            src="../assets/images/technology/image-launch-vehicle-portrait.jpg"
            class="lg:-translate-y-24 lg:translate-x-[125px] hidden lg:block lg:order-2 order-1"
            alt=""
          />
          <img
            src="../assets/images/technology/image-launch-vehicle-landscape.jpg"
            class="lg:-translate-y-24 lg:translate-x-[125px] lg:order-2 order-1 lg:hidden block pb-6"
            alt=""
          />
        </div>

        <div class="flex lg:flex-row flex-col lg:order-2" v-show="isSecondBtnActive">
          <div class="flex flex-col gap-8 items-center lg:items-start pb-8 lg:order-1 order-2">
            <span class="text-primary font-barlow">THE TERMINOLOGY…</span>

            <h2 class="text-secondary font-ballefair lg:text-5xl text-3xl">SPACEPORT</h2>
            <p class="text-primary font-barlow text-lg lg:tracking-wide text-center">
              A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by
              analogy to the seaport for ships or airport for aircraft. Based in the famous Cape
              Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation
              for launch.
            </p>
          </div>
          <img
            src="../assets/images/technology/image-spaceport-portrait.jpg"
            class="lg:-translate-y-24 lg:translate-x-[125px] hidden lg:block lg:order-2 order-1"
            alt=""
          />
          <img
            src="../assets/images/technology/image-spaceport-landscape.jpg"
            class="lg:-translate-y-24 lg:translate-x-[125px] lg:order-2 order-1 lg:hidden block pb-6"
            alt=""
          />
        </div>
        <div class="flex lg:flex-row flex-col lg:order-2" v-show="isThirdBtnActive">
          <div class="flex flex-col gap-8 items-center lg:items-start pb-8 lg:order-1 order-2">
            <span class="text-primary font-barlow">THE TERMINOLOGY…</span>

            <h2 class="text-secondary font-ballefair lg:text-5xl text-3xl">SPACE CAPSULE</h2>
            <p class="text-primary font-barlow text-lg lg:tracking-wide text-center">
              A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule
              to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend
              your time during the flight. It includes a space gym, cinema, and plenty of other
              activities to keep you entertained.
            </p>
          </div>
          <img
            src="../assets/images/technology/image-space-capsule-portrait.jpg"
            class="lg:-translate-y-24 lg:translate-x-[125px] hidden lg:block lg:order-2 order-1"
            alt=""
          />
          <img
            src="../assets/images/technology/image-space-capsule-landscape.jpg"
            class="lg:-translate-y-24 lg:translate-x-[125px] lg:order-2 order-1 lg:hidden block pb-6"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
