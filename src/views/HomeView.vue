<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const home = ref({})

const colorClasses = [
  'text-yellow-600 dark:text-yellow-500',
  'text-red-600 dark:text-red-500',
  'text-green-600 dark:text-green-500'
]

const displayText = ref('')
const textWidth = ref(0)
const colorIndex = ref(0)
const isLoading = ref(true)
const error = ref(null)
const lang = 'en'

let textIndex = 0
let charIndex = 0
let isDeleting = false
let dynamicSkills = ref([])

function typeEffect() {
  if (!dynamicSkills.value.length) return
  const fullText = dynamicSkills.value[textIndex]


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
    textIndex = (textIndex + 1) % dynamicSkills.value.length
    colorIndex.value = textIndex
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120)
}

onMounted(async () => {
  try {
    const res = await axios.get(`http://localhost/portfolio-backend/api/home.php`, {
      params: { lang }
    })
    // console.log("API Result:", res.data)
    dynamicSkills.value = res.data.skills || ['No Skills Found']
    typeEffect()
    home.value = res.data
  } catch (err) {
    // console.error("Fetch error:", err)
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
      <div class="flex flex-col md:flex-row space-x-6 items-center pb-24">
        <div class="mb-8 md:mb-0 flex justify-center">
          <div
            class="w-4/5 h-4/5 md:w-72 md:h-80 rounded-3xl overflow-hidden border-4 border-gray-300 dark:border-gray-800 shadow-lg">
            <img :src="`http://localhost/portfolio-backend/${home?.profile_image || 'assets/default.png'}`"
              alt="Profile Photo" class="w-full h-full object-cover">
          </div>
        </div>

        <div class="text-left">
          <h1 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">Hello,</h1>
          <h1
            class="text-gray-800 text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-semibold dark:text-gray-200">
            I'm
            <mark class="font-bold px-1 text-gray-700">{{ home?.name || 'Your Name' }}</mark>
          </h1>
          <div class="text-lg md:text-md lg:text-2xl text-gray-700 dark:text-gray-300 my-2 font-medium">
            <span>My skills: </span>
            <span :class="['font-bold', 'animate-cursor', colorClasses[colorIndex]]" :style="{ width: textWidth }">
              {{ displayText }}
            </span>
          </div>

          <!-- <div v-if="home.skills?.length" class="flex flex-wrap gap-2 mb-2">
            <span v-for="(skill, i) in home.skills" :key="i"
              class="text-sm bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full">
              {{ skill }}
            </span>
          </div> -->

          <p class="text-gray-800 dark:text-gray-300 mb-4 md:text-sm font-light text-justify">
            {{ home?.bio || 'Welcome to my portfolio' }}
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