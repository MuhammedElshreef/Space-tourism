<script setup lang="js">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()
const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
console.log(route.name)
</script>
<template>
  <div>
    <div class="container flex justify-between lg:hidden pt-5">
      <div
        v-show="isOpen === true"
        class="lg:hidden absolute bg-black min-h-screen right-0 w-[70%] z-20 -translate-y-5"
      >
        <ul class="flex flex-col gap-2 pt-24 text-secondary">
          <li class="flex gap-4">
            <button
              @click="router.push('/'), (isOpen = false)"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 w-full text-start"
              :class="{ 'border-b-2 border-white': route.name == 'home' }"
            >
              00 HOME
            </button>
          </li>
          <li class="flex gap-4">
            <button
              @click="router.push('/destination'), (isOpen = false)"
              class="inline-block w-full text-start p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-400"
              :class="{ 'border-b-2 border-white': route.name == 'destination' }"
            >
              01 DESTINATION
            </button>
          </li>
          <li class="flex gap-4">
            <button
              @click="router.push('/crew'), (isOpen = false)"
              class="inline-block w-full text-start p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              :class="{ 'border-b-2 border-white': route.name == 'crew' }"
            >
              02 CREW
            </button>
          </li>
          <li class="flex gap-4">
            <button
              @click="router.push('/technology'), (isOpen = false)"
              class="inline-block w-full text-start p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              :class="{ 'border-b-2 border-white': route.name == 'technology' }"
            >
              03 TECHNOLOGY
            </button>
          </li>
        </ul>
      </div>
      <img src="../assets/group-2.svg" class="w-10 h-10" alt="" />
      <label
        class="btn btn-circle swap swap-rotate bg-transparent border-none hover:bg-transparent z-30 text-primary pb-2"
      >
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" @change="toggleMenu" />

        <!-- hamburger icon -->
        <svg
          class="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        <!-- close icon -->
        <svg
          class="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon
            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
          />
        </svg>
      </label>
    </div>
    <div class="items-center pt-12 hidden lg:flex w-full justify-center gap-36">
      <div @click="router.push('/')">
        <img
          src="../assets/group-2.svg"
          class="text-white hover:cursor-pointer"
          alt="website logo"
        />
      </div>
      <div class="h-[1px] w-96 bg-gray-500 translate-x-40 z-10"></div>
      <div class="backdrop-blur w-fit py-7 px-7 flex">
        <ul class="flex items-center gap-12 text-secondary">
          <li class="flex gap-4">
            <button
              @click="router.push('/')"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              :class="{ 'border-b-2 border-white': route.name == 'home' }"
            >
              00 HOME
            </button>
          </li>
          <li class="flex gap-4">
            <button
              @click="router.push('/destination')"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              :class="{ 'border-b-2 border-white': route.name == 'destination' }"
            >
              01 DESTINATION
            </button>
          </li>
          <li class="flex gap-4">
            <button
              @click="router.push('/crew')"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              :class="{ 'border-b-2 border-white': route.name == 'crew' }"
            >
              02 CREW
            </button>
          </li>
          <li class="flex gap-4">
            <button
              @click="router.push('/technology')"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              :class="{ 'border-b-2 border-white': route.name == 'technology' }"
            >
              03 TECHNOLOGY
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
