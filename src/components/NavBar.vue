<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'

// Dark mode theme
const isDark = useDark()
const toggleDark = useToggle(isDark)

// Sidebar expand/collapse
const isOpen = ref(true)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

// Route detection
const route = useRoute()
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
          class="w-8 h-8 p-2 flex justify-center items-center hover:bg-gray-700/20 hover:dark:bg-white/80 text-gray-700 dark:text-white/80 hover:dark:text-gray-700 rounded-lg transition duration-300 ease-in-out">
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
          <!-- Homepage -->
          <RouterLink to="/" :class="[
            baseClass,
            isOpen ? 'md:justify-start md:px-4' : 'md:justify-center',
            route.path === '/' ? activeClass : inactiveClass
          ]">
            <span class="md:w-12 md:h-12 flex items-center justify-center">
              <i class="fa-solid fa-house icon"></i>
            </span>
            <span class="textVisibility" :class="isOpen ? 'visible' : 'hidden'">Home</span>
          </RouterLink>

          <!-- About page -->
          <RouterLink to="/about" :class="[
            baseClass,
            isOpen ? 'md:justify-start md:px-4' : 'md:justify-center',
            route.path === '/about' ? activeClass : inactiveClass
          ]">
            <span class="md:w-12 md:h-12 flex items-center justify-center">
              <i class="fa-solid fa-user icon"></i>
            </span>
            <span class="textVisibility" :class="isOpen ? 'visible' : 'hidden'">About</span>
          </RouterLink>

          <!-- Skill page -->
          <RouterLink to="/skill" :class="[
            baseClass,
            isOpen ? 'md:justify-start md:px-4' : 'md:justify-center',
            route.path === '/skill' ? activeClass : inactiveClass
          ]">
            <span class="md:w-12 md:h-12 flex items-center justify-center">
              <i class="fa-solid fa-pen-nib icon"></i>
            </span>
            <span class="textVisibility" :class="isOpen ? 'visible' : 'hidden'">Skills</span>
          </RouterLink>

          <!-- Project page -->
          <RouterLink to="/project" :class="[
            baseClass,
            isOpen ? 'md:justify-start md:px-4' : 'md:justify-center',
            route.path === '/project' ? activeClass : inactiveClass
          ]">
            <span class="md:w-12 md:h-12 flex items-center justify-center">
              <i class="fa-solid fa-list-check icon"></i>
            </span>
            <span class="textVisibility" :class="isOpen ? 'visible' : 'hidden'">Projects</span>
          </RouterLink>

          <!-- Contact page -->
          <RouterLink to="/contact" :class="[
            baseClass,
            isOpen ? 'md:justify-start md:px-4' : 'md:justify-center',
            route.path === '/contact' ? activeClass : inactiveClass
          ]">
            <span class="md:w-12 md:h-12 flex items-center justify-center">
              <i class="fa-solid fa-envelope icon"></i>
            </span>
            <span class="textVisibility" :class="isOpen ? 'visible' : 'hidden'">Contact</span>
          </RouterLink>

          <!-- Mobile Screen -->
          <div class="md:hidden h-14 md:h-20 relative group">
            <button class="language-btn">
              <i class="fa-solid fa-language text-base md:text-4xl"></i>
              <span class="textVisibility" :class="isOpen ? 'visible' : 'hidden'">Language</span>
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
          <button @click="toggleDark()" class="theme-btn">
            <span class="text-base md:text-4xl">
              {{ isDark ? "🌜" : "🔆" }}
            </span>
            <span class="textVisibility" :class="isOpen ? 'visible' : 'hidden'">
              {{ isDark ? "Dark" : "Light" }}
            </span>
          </button>

          <hr class="hidden md:flex border-1 border-gray-300 mt-4">

          <!-- Desktop Screen -->
          <div class="grid grid-rows-2 gap-2 md:mt-4">
            <button @click="toggleDark()"
              class="hidden md:flex h-14 md:h-20 bg-green-400/50 hover:bg-green-600/50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white/80 font-medium rounded-xl flex items-center justify-center transition"
              :class="{ 'md:justify-start md:px-4': isOpen, 'md:justify-center': !isOpen }">
              <div class="icon-box">
                <span class="text-base md:text-3xl">
                  {{ isDark ? "🌜" : "🔆" }}
                </span>
              </div>
              <span class="textVisibility" :class="isOpen ? 'visible' : 'hidden'">
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
                <span class="textVisibility" :class="isOpen ? 'visible' : 'hidden'">Language</span>
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

<script>
const baseClass = 'h-14 md:h-20 hover:bg-green-600/50 dark:hover:bg-gray-700 dark:text-white/80 font-medium rounded-xl flex flex-col md:flex-row items-center justify-center transition';
const activeClass = 'bg-green-600/70 dark:bg-gray-700';
const inactiveClass = 'bg-green-400/50 dark:bg-gray-900';
</script>

<style scoped>
.icon-box {
  @apply md:w-12 md:h-12 flex items-center justify-center;
}

.icon {
  @apply text-green-800 dark:text-green-500 text-base md:text-3xl lg:text-4xl;
}

.textVisibility {
  @apply text-[7px] md:text-base lg:text-lg xl:text-xl md:ml-2 transition-all duration-300;
}

.textVisibility.hidden {
  @apply opacity-0 md:opacity-0 md:w-0 md:ml-0;
}

.textVisibility.visible {
  @apply opacity-100 md:opacity-100 md:w-auto;
}

.language-btn {
  @apply h-full w-full bg-green-400/50 hover:bg-green-600/50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white/80 font-medium rounded-xl flex flex-col items-center justify-center transition;
}

.theme-btn {
  @apply md:hidden h-14 md:h-20 bg-green-400/50 hover:bg-green-600/50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white/80 font-medium rounded-xl flex flex-col items-center justify-center transition;
}
</style>