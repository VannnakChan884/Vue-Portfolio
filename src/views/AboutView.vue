<script setup>
import { ref, onMounted } from "vue"
import axios from "axios"
import draggable from "vuedraggable"

const aboutList = ref([]);
const lang = "en"; // or dynamic from user settings

onMounted(async () => {
  try {
    const res = await axios.get(
      `http://localhost/portfolio-backend/api/about.php?lang=${lang}`
    );
    aboutList.value = res.data;
  } catch (err) {
    console.error("Failed to fetch about data:", err);
  }
});

const saveOrder = async (aboutId, experiences) => {
  const ids = experiences.map(exp => exp.id)
  try {
    await axios.post('http://localhost/portfolio-backend/api/update-experience-order.php', ids)
    console.log('Order saved!')
  } catch (err) {
    console.error('Failed to save order:', err)
  }
}
</script>
<template>
  <!-- About Section -->
  <div class="absolute top-0 right-0 pt-4 px-6 pb-24 w-full md:w-3/4 lg:w-4/5 xl:w-5/6 bg-white dark:bg-gray-900">
    <div class="md:ml-6 lg:ml-6 xl:ml-6">
      <h2 class="text-gray-800 dark:text-gray-200 text-3xl font-bold text-center uppercase mb-8">
        About
      </h2>
      <div class="flex flex-col md:flex-row space-x-24">
        <!-- Education & Career -->
        <div v-for="about in aboutList" :key="about.id" class="md:w-1/2 mb-8 md:mb-0">
          <h3 class="text-xl dark:text-gray-200 font-semibold mb-4">
            {{ about.title }}
          </h3>
          <draggable v-model="about.experiences" group="exp" item-key="id" class="space-y-4" ghost-class="bg-yellow-100"
            @end="() => saveOrder(about.id, about.experiences)">
            <template #item="{ element: exp }">
              <div
                class="flex items-start p-2 border dark:border-gray-700 rounded cursor-move bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition">
                <i class="fa-solid fa-grip-lines mt-1 mr-3 text-gray-400"></i>
                <div>
                  <h3 class="font-bold text-gray-800 dark:text-gray-200">
                    {{ exp.title }} at {{ exp.company }}
                  </h3>
                  <small class="text-gray-500 dark:text-gray-400">
                    {{ exp.start_date }} → {{ exp.end_date || "Present" }}
                  </small>
                  <p class="text-gray-600 dark:text-gray-300">
                    {{ exp.description }}
                  </p>
                </div>
              </div>
            </template>

          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>
