<script setup>
import { ref, onMounted } from 'vue'

const texts = [
  "IT Support",
  "Graphic Design",
  "Web Development"
]

const displayText = ref('')
const textWidth = ref(0)
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
  }

  setTimeout(typeEffect, isDeleting ? 60 : 100)
}

onMounted(() => {
  typeEffect()
})
</script>

<template>
  <!-- Hero Section -->
  <div
    class="absolute right-0 w-full md:flex justify-center items-center md:w-3/4 lg:w-4/5 xl:w-5/6 h-[92vh] md:h-[100vh] px-6 pt-6 bg-white dark:bg-gray-900">
    <div class="md:ml-12 lg:ml-6 xl:ml-0">
      <div class="flex flex-col md:flex-row space-x-6 items-center pb-24">
        <div class="mb-8 md:mb-0 flex justify-center">
          <div
            class="w-4/5 h-4/5 md:w-56 md:h-56 rounded-3xl overflow-hidden border-4 border-gray-300 dark:border-gray-800 shadow-lg">
            <img src="../assets/avatar.jpg" alt="Vannak's Profile Photo" class="w-full h-full object-cover">
          </div>
        </div>
        <div class="text-left">
          <h1 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">Hello,</h1>
          <h1
            class="text-4xl text-gray-800 text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-semibold text-gray-800 dark:text-gray-200">
            I'm
            <mark class="font-bold px-1">Chan Vannak</mark>
          </h1>
          <div class="text-lg md:text-md lg:text-2xl text-gray-700 dark:text-gray-300 my-2 font-medium">
            <span>My skills: </span>
            <span class="font-bold text-green-700 uppercase" :style="{ width: textWidth + 'ch' }">
              {{ displayText }}
            </span>
          </div>
          <p class="text-gray-800 dark:text-gray-300 mb-4 md:text-sm font-light text-justify">
            Bridging technology and creativity to deliver seamless digital experiences and robust IT solutions.
          </p>
          <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <RouterLink to="/project"
              class="bg-yellow-500 hover:bg-gray-700 transition text-white text-center p-3 rounded-lg inline-block btn">
              View Work</RouterLink>
            <button id="downloadResume"
              class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center btn">
              <i class="fa-solid fa-download mr-2"></i>
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>