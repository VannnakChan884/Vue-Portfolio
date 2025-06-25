<script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'

  const aboutList = ref([])
  const experiences = ref([])
  const lang = 'en' // or dynamic from user settings

  onMounted(async () => {
    try {
      const res = await axios.get(`http://localhost/portfolio-backend/api/about.php?lang=${lang}`)
      aboutList.value = res.data
    } catch (err) {
      console.error('Failed to fetch about data:', err)
    }
  })
</script>
<template>
  <!-- About Section -->
  <div
    class="absolute top-0 right-0 pt-4 px-6 pb-24 w-full md:w-3/4 lg:w-4/5 xl:w-5/6 bg-white dark:bg-gray-900">
    <div class="md:ml-6 lg:ml-6 xl:ml-6">
      <h2 class="text-gray-800 dark:text-gray-200 text-3xl font-bold text-center uppercase mb-8">About</h2>
      <div class="flex flex-col md:flex-row">
        <!-- Education & Career -->
        <div class="md:w-1/2 mb-8 md:mb-0">
          <h3 class="text-xl dark:text-gray-200 font-semibold mb-4">Education & Career</h3>
          <ul v-for="about in aboutList" :key="about.id" class="space-y-4 text-justify text-gray-700">
            <li class="flex items-start">
              <i class="fa-solid fa-graduation-cap dark:text-gray-200 mt-1 mr-3"></i>
              <div>
                <h4 class="dark:text-gray-200 font-medium">{{ about.title }}</h4>
                <p class="dark:text-gray-300 font-light">{{ about.description }}</p>
              </div>
            </li>
            <li v-for="exp in about.experiences" :key="exp.id" class="flex items-start">
              <i class="fa-solid fa-briefcase dark:text-gray-200 mt-1 mr-3"></i>
              <ul>
                <li class="mb-4">
                  <h3 class="font-bold">{{ exp.title }} - {{ exp.company }}</h3>
                  <small>{{ exp.start_date }} → {{ exp.end_date || 'Present' }}</small>
                  <p>{{ exp.description }}</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- My Journey -->
        <div v-for="about in aboutList" :key="about.id" class="md:w-1/2 md:pl-12 text-gray-700 text-justify">
          <h3 class="text-xl font-semibold dark:text-gray-200 mb-4">{{ about.title }}</h3>
          <p class="dark:text-gray-300 mb-4">{{ about.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
