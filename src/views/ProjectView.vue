<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const projects = ref([])
const isLoading = ref(true)
const error = ref(null)

const lang = 'en' // Or get it from your store/route


onMounted(async () => {
  try {
<<<<<<< HEAD
    const res = await axios.get(`http://localhost/portfolio-backend/api/projects.php`, {
=======
    const res = await axios.get(`http://localhost:81/portfolio-backend/api/projects.php`, {
>>>>>>> 5386990dc32ab0e8b30ca35ee36375f15b9d5150
      params: { lang }
    })
    projects.value = res.data
  } catch (err) {
    error.value = err.message
  } finally {
    isLoading.value = false
  }
})

</script>
<template>
    <!-- Projects Section -->
    <div class="w-full md:w-2/3 lg:w-3/4 xl:w-5/6 absolute top-0 right-0 pt-4 px-6 pb-24 bg-white dark:bg-gray-900">
        <div class="md:ml-6 lg:ml-6 xl:ml-6">
            <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-6">
                Projects
            </h2>
            <div v-if="isLoading">Loading...</div>
            <div v-else-if="error" class="text-red-600">Error: {{ error }}</div>
            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div v-for="project in projects" :key="project.id" class="project-card bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
                    <div class="md:h-64 overflow-hidden">
<<<<<<< HEAD
                        <img v-if="project.image" :src='`http://localhost/portfolio-backend/${project.image}`' :alt="`${project.image}`"
=======
                        <img v-if="project.image" :src='`http://localhost:81/portfolio-backend/${project.image}`' :alt="`${project.image}`"
>>>>>>> 5386990dc32ab0e8b30ca35ee36375f15b9d5150
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div class="p-4 md:h-full">
                        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{{ project.title }}</h3>
                        <p class="text-gray-800 text-sm dark:text-gray-300 mb-3">{{ project.description}}</p>
                        <a href="#" class="bg-gray-800 text-gray-200 dark:bg-white dark:text-gray-800 text-xs px-2 py-1 rounded">
                            View
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
