<template>
  <!-- Hero Section -->
  <section id="home" class="h-[100vh] hero-pattern flex items-center justify-center">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <div
            class="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-4 border-primary dark:border-white shadow-lg">
            <img src="../assets/avatar.jpg" alt="Vannak's Profile Photo" class="w-full h-full object-cover">
          </div>
        </div>
        <div class="md:w-1/2 text-center md:text-left">
          <h1 class="text-4xl md:text-5xl font-bold text-primary dark:text-gray-600 mb-2">Chan Vannak</h1>
          <h2 class="text-xl md:text-2xl text-primary dark:text-gray-500 mb-6 font-medium">IT Support and Graphic Design
          </h2>
          <p class="text-primary dark:text-gray-500 mb-8 max-w-lg mx-auto md:mx-0 font-light">
            Bridging technology and creativity to deliver seamless digital experiences and robust IT solutions.
          </p>
          <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <RouterLink to="/project" class="bg-gray-800/50 hover:bg-gray-900/80  text-white text-center p-3 rounded-lg inline-block">View Work</RouterLink>

            <button id="downloadResume"
              class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
