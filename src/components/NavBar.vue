<script setup>
import { useDark, useToggle } from "@vueuse/core"
import { ref } from 'vue'

// Dark mode theme
const isDark = useDark();
const toggleDark = useToggle(isDark);

// Expand/Collapse navbar
const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <header class="w-full md:h-[96vh] md:w-1/4 lg:w-1/5 xl:w-1/6 fixed md:top-4 bottom-0 md:p-4 z-50">
    <div
      class="w-full md:h-full p-2 md:p-4 flex flex-col absolute bottom-0 backdrop-blur-sm bg-gray-200/70 dark:bg-gray-800/70 rounded-t-2xl md:rounded-lg transition-all duration-300 ease-in-out"
      :class="{ 'h-14 md:w-32': !isOpen, 'h-auto md:w-full': isOpen }">
      <!-- Mobile Header (always visible on mobile) -->
      <div class="md:hidden flex justify-between items-center mb-2">
        <h1 class="text-xl text-gray-700 dark:text-white/80 font-bold">Vannak</h1>
        <button @click="toggleMenu"
          class="md:w-12 md:h-12 p-2 flex justify-center items-center hover:bg-gray-700 hover:dark:bg-white/80 hover:text-gray-200 text-gray-700 dark:text-white/80 hover:dark:text-gray-700 rounded-full transition duration-300 ease-in-out">
          <i class="fa-solid" :class="isOpen ? 'fa-xmark' : 'fa-bars-staggered'"></i>
        </button>
      </div>

      <!-- Desktop Header -->
      <div class="hidden md:flex mb-4 justify-between items-center">
        <h1 class="text-xl md:text-4xl text-gray-700 dark:text-white/80 font-bold transition-all duration-300 ease-in"
          :class="{ 'hidden': !isOpen, 'flex': isOpen }">Vannak
        </h1>
        <img src="../assets/avatar.jpg" alt="Avatar"
          class="md:w-12 md:h-12 object-cover rounded-lg transition duration-300 ease-in-out"
          :class="{ 'flex': !isOpen, 'hidden': isOpen }">
        <button @click="toggleMenu"
          class="w-8 h-8 p-2 flex justify-center items-center hover:bg-gray-700/20 hover:dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 rounded-lg transition duration-300 ease-in-out">
          <i class="fa-solid" :class="isOpen ? 'fa-chevron-left' : 'fa-chevron-right'"></i>
        </button>
      </div>

      <!-- Collapsible Content -->
      <div class="overflow-x-hidden overflow-y-auto transition-all duration-300 ease-in-out"
        :class="{ 'max-h-0 md:max-h-full': !isOpen, 'max-h-screen': isOpen }">
        <nav class="grid grid-cols-7 md:grid-cols-1 gap-2 text-center md:mt-0">
          <RouterLink to="/"
            class="h-14 md:h-20 bg-green-400/50 hover:bg-green-600/50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white/80 font-medium rounded-xl flex flex-col md:flex-row items-center justify-center transition"
            :class="{ 'md:justify-start md:px-4': isOpen, 'md:justify-center': !isOpen }">
            <span class="md:w-12 md:h-12 flex items-center justify-center">
              <i class="fa-solid fa-house text-green-800 dark:text-green-500 text-base md:text-3xl lg:text-4xl"></i>
            </span>
            <span class="text-[7px] font-bold md:text-base lg:text-md xl:text-lg md:ml-2 transition-all duration-300"
              :class="{ 'opacity-0 md:opacity-0 md:w-0 md:ml-0': !isOpen, 'opacity-100 md:opacity-100 md:w-auto': isOpen }">Home</span>
          </RouterLink>
          <RouterLink to="/about"
            class="h-14 md:h-20 bg-green-400/50 hover:bg-green-600/50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white/80 font-medium rounded-xl flex flex-col md:flex-row items-center justify-center transition"
            :class="{ 'md:justify-start md:px-4': isOpen, 'md:justify-center': !isOpen }">
            <span class="md:w-12 md:h-12 flex items-center justify-center">
              <i class="fa-solid fa-user text-base md:text-3xl lg:text-4xl"></i>
            </span>
            <span class="text-[7px] md:text-base lg:text-md xl:text-lg md:ml-2 transition-all duration-300"
              :class="{ 'opacity-0 md:opacity-0 md:w-0 md:ml-0': !isOpen, 'opacity-100 md:opacity-100 md:w-auto': isOpen }">About</span>
          </RouterLink>
          <RouterLink to="/skill"
            class="h-14 md:h-20 bg-green-400/50 hover:bg-green-600/50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white/80 font-medium rounded-xl flex flex-col md:flex-row items-center justify-center transition"
            :class="{ 'md:justify-start md:px-4': isOpen, 'md:justify-center': !isOpen }">
            <span class="md:w-12 md:h-12 flex items-center justify-center">
              <i class="fa-solid fa-pen-nib text-base md:text-3xl lg:text-4xl"></i>
            </span>
            <span class="text-[7px] md:text-base lg:text-md xl:text-lg md:ml-2 transition-all duration-300"
              :class="{ 'opacity-0 md:opacity-0 md:w-0 md:ml-0': !isOpen, 'opacity-100 md:opacity-100 md:w-auto': isOpen }">Skills</span>
          </RouterLink>
          <RouterLink to="/project"
            class="h-14 md:h-20 bg-green-400/50 hover:bg-green-600/50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white/80 font-medium rounded-xl flex flex-col md:flex-row items-center justify-center transition"
            :class="{ 'md:justify-start md:px-4': isOpen, 'md:justify-center': !isOpen }">
            <span class="md:w-12 md:h-12 flex items-center justify-center">
              <i class="fa-solid fa-list-check text-base md:text-3xl lg:text-4xl"></i>
            </span>
            <span class="text-[7px] md:text-base lg:text-md xl:text-lg md:ml-2 transition-all duration-300"
              :class="{ 'opacity-0 md:opacity-0 md:w-0 md:ml-0': !isOpen, 'opacity-100 md:opacity-100 md:w-auto': isOpen }">Projects</span>
          </RouterLink>
          <RouterLink to="/contact"
            class="h-14 md:h-20 bg-green-400/50 hover:bg-green-600/50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white/80 font-medium rounded-xl flex flex-col md:flex-row items-center justify-center transition"
            :class="{ 'md:justify-start md:px-4': isOpen, 'md:justify-center': !isOpen }">
            <span class="md:w-12 md:h-12 flex items-center justify-center">
              <i class="fa-solid fa-envelope text-base md:text-3xl lg:text-4xl"></i>
            </span>
            <span class="text-[7px] md:text-base lg:text-md xl:text-lg md:ml-2 transition-all duration-300"
              :class="{ 'opacity-0 md:opacity-0 md:w-0 md:ml-0': !isOpen, 'opacity-100 md:opacity-100 md:w-auto': isOpen }">Contact</span>
          </RouterLink>

          <!-- Mobile Screen -->
          <div class="md:hidden h-14 md:h-20 relative group">
            <button
              class="h-full w-full bg-green-400/50 hover:bg-green-600/50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white/80 font-medium rounded-xl flex flex-col items-center justify-center transition">
              <i class="fa-solid fa-language text-base md:text-4xl"></i>
              <span class="md:ml-2 transition-all duration-300"
                :class="{ 'opacity-0 md:opacity-0 md:w-0': !isOpen, 'text-[7px] opacity-100 md:opacity-100 md:w-auto': isOpen }">Language</span>
            </button>
            <div
              class="fixed right-16 bottom-[60%] w-24 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-lg overflow-hidden shadow-lg py-0 z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition">
              <a href="?lang=en"
                class="block w-full text-left px-4 py-1 dark:hover:bg-gray-700 hover:bg-gray-200">English</a>
              <a href="?lang=kh"
                class="block w-full text-left px-4 py-1 dark:hover:bg-gray-700 hover:bg-gray-200">ខ្មែរ</a>
              <a href="?lang=zh"
                class="block w-full text-left px-4 py-1 dark:hover:bg-gray-700 hover:bg-gray-200">中国</a>
            </div>
          </div>
          <button @click="toggleDark()"
            class="md:hidden h-14 md:h-20 bg-green-400/50 hover:bg-green-600/50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white/80 font-medium rounded-xl flex flex-col items-center justify-center transition">
            <span class="text-base md:text-4xl">
              {{ isDark ? "🌜" : "🔆" }}
            </span>
            <span class="md:ml-2 transition-all duration-300"
              :class="{ 'opacity-0 md:opacity-0 md:w-0': !isOpen, 'text-[7px] opacity-100 md:opacity-100 md:w-auto': isOpen }">
              {{ isDark ? "Dark" : "Light" }}
            </span>
          </button>

          <hr class="hidden md:flex border-1 border-gray-300 mt-4">

          <!-- Desktop Screen -->
          <div class="grid grid-rows-2 gap-2 md:mt-4">
            <button @click="toggleDark()"
              class="hidden md:flex h-14 md:h-20 bg-green-400/50 hover:bg-green-600/50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white/80 font-medium rounded-xl flex items-center justify-center transition"
              :class="{ 'md:justify-start md:px-4': isOpen, 'md:justify-center': !isOpen }">
              <div class="md:w-12 md:h-12 flex items-center justify-center">
                <span class="text-base md:text-3xl">
                  {{ isDark ? "🌜" : "🔆" }}
                </span>
              </div>
              <span class="ml-2 transition-all duration-300"
                :class="{ 'opacity-0 md:opacity-0 md:w-0 md:ml-0': !isOpen, 'opacity-100 md:opacity-100 md:w-auto': isOpen }">
                {{ isDark ? "Dark" : "Light" }}
              </span>
            </button>
            <div class="hidden md:flex relative group">
              <button
                class="h-full w-full bg-green-400/50 hover:bg-green-600/50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white/80 font-medium rounded-xl flex items-center justify-center transition"
                :class="{ 'md:justify-start md:px-4': isOpen, 'md:justify-center': !isOpen }">
                <span class="md:w-12 md:h-12 flex items-center justify-center">
                  <i class="fa-solid fa-language text-base md:text-3xl"></i>
                </span>
                <span class="ml-2 transition-all duration-300"
                  :class="{ 'opacity-0 md:opacity-0 md:w-0 md:ml-0': !isOpen, 'opacity-100 md:opacity-100 md:w-auto': isOpen }">Language</span>
              </button>
              <div
                class="fixed -right-[25%] bottom-[17%] w-24 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-lg overflow-hidden shadow-lg py-0 z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition">
                <a href="?lang=en"
                  class="block w-full text-left px-4 py-1 dark:hover:bg-gray-700 hover:bg-gray-200">English</a>
                <a href="?lang=kh"
                  class="block w-full text-left px-4 py-1 dark:hover:bg-gray-700 hover:bg-gray-200">ខ្មែរ</a>
                <a href="?lang=zh"
                  class="block w-full text-left px-4 py-1 dark:hover:bg-gray-700 hover:bg-gray-200">中国</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>