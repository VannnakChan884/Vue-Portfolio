<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const texts = [
  "IT Support",
  "Graphic Design",
  "Web Development"
]

const colorClasses = [
  'text-yellow-600 dark:text-yellow-500',
  'text-red-600 dark:text-red-500',
  'text-green-600 dark:text-green-500'
]

const displayText = ref('')
const textWidth = ref(0)
const colorIndex = ref(0)
const home = ref([])
const isLoading = ref(true)
const error = ref(null)

const lang = 'en' // Or get it from your store/route

let textIndex = 0
let charIndex = 0
let isDeleting = false

function typeEffect() {
  const fullText = texts[textIndex]

  if (isDeleting) {
    charIndex--
    displayText.value = fullText.substring(0, charIndex)
  } else {
    charIndex++
    displayText.value = fullText.substring(0, charIndex)
  }

  textWidth.value = displayText.value.length

  if (!isDeleting && charIndex === fullText.length) {
    setTimeout(() => {
      isDeleting = true
      typeEffect()
    }, 1500)
    return
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false
    textIndex = (textIndex + 1) % texts.length
    colorIndex.value = textIndex
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120)
}

onMounted(async () => {
  typeEffect()
  try {
    const res = await axios.get(`http://localhost:81/portfolio-backend/api/home.php`, {
      params: { lang }
    })
    home.value = res.data
  } catch (err) {
    error.value = err.message
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <!-- Hero Section -->
  <div
    class="absolute right-0 w-full md:flex justify-center items-center md:w-3/4 lg:w-4/5 xl:w-5/6 h-[92vh] md:h-[100vh] px-6 pt-6 bg-white dark:bg-gray-900">
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error" class="text-red-600">Error: {{ error }}</div>
    <div v-else class="md:ml-12 lg:ml-6 xl:ml-0"> 
      <div v-for="home_view in home" :key="home_view.id" class="flex flex-col md:flex-row space-x-6 items-center pb-24">
        <div class="mb-8 md:mb-0 flex justify-center">
          
          <div
            class="w-4/5 h-4/5 md:w-72 md:h-80 rounded-3xl overflow-hidden border-4 border-gray-300 dark:border-gray-800 shadow-lg">
            <img v-if="home_view.profile_image" :src="`http://localhost:81/portfolio-backend/${home_view.profile_image}`" :alt="`${home_view.profile_image}`" class="w-full h-full object-cover">
          </div>
        </div>
        <div  class="text-left">
          <h1 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">Hello,</h1>
          <h1
            class="text-gray-800 text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-semibold dark:text-gray-200">
            I'm
            <mark class="font-bold px-1 text-gray-700">{{ home_view.name }}</mark>
          </h1>
          <div class="text-lg md:text-md lg:text-2xl text-gray-700 dark:text-gray-300 my-2 font-medium">
            <span>My skills: </span>
            <span :class="['font-bold', 'animate-cursor', colorClasses[colorIndex]]"
              :style="{ width: textWidth }">
              {{ displayText }}
            </span>
          </div>
          <p class="text-gray-800 dark:text-gray-300 mb-4 md:text-sm font-light text-justify">
            Bridging technology and creativity to deliver seamless digital experiences and robust IT solutions.
          </p>
          <div class="flex flex-row gap-3">
            <RouterLink to="/project/"
              class="flex items-center justify-center border-2 border-yellow-500 hover:bg-yellow-600 text-yellow-500 hover:text-gray-200 px-4 py-2 rounded-lg btn transition">
              <i class="fa-solid fa-eye mr-2"></i>
              View Work
            </RouterLink>
            <button id="downloadResume"
              class="flex items-center justify-center border-2 border-green-500 hover:bg-green-600 text-green-500 hover:text-gray-200 px-4 py-2 rounded-lg btn transition">
              <i class="fa-solid fa-download mr-2"></i>
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>