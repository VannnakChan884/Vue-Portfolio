<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <header
    class="w-full md:h-[91vh] md:w-1/4 lg:w-1/4 xl:w-1/5 backdrop-blur-sm bg-white/70 dark:bg-gray-800 fixed top-0 md:top-6 left-0 md:left-6 p-3 md:p-4 z-50 shadow-lg md:shadow-xl md:rounded-2xl">
    <div class="flex flex-col">
      <div class="hidden md:flex">
        <div class="w-full mx-auto">
          <div class="flex flex-col">
            <div class="rounded-xl overflow-hidden">
              <img src="../assets/avatar.jpg" alt="Vannak's Profile Photo" class="w-full h-full object-cover">
            </div>
            <div class="text-center">
              <h1 class="text-xl md:text-xl text-gray-700 dark:text-white/80 font-bold mt-2 uppercase mb-1">Chan Vannak</h1>
              <h2 class="text-xs text-gray-500 dark:text-white/70 mb-2">IT Support & Graphic Design</h2>
            </div>
          </div>
        </div>
      </div>
      <hr class="hidden md:flex border border-gray-400/50 mt-2">
      <nav class="grid grid-cols-7 md:grid-cols-2 gap-2 text-center md:mt-4 ">
        <RouterLink to="/"
          class="h-14 md:h-20 bg-green-400/50 hover:bg-green-600/50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white/80 font-medium rounded-xl flex flex-col items-center justify-center transition">
          <i class="fa-solid fa-house text-green-800 dark:text-green-500 text-base md:text-4xl"></i>
          <span class="text-[7px] font-bold md:text-sm">Home</span>
        </RouterLink>
        <RouterLink to="/about"
          class="h-14 md:h-20 bg-green-400/50 hover:bg-green-600/50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white/80 font-medium rounded-xl flex flex-col items-center justify-center transition">
          <i class="fa-solid fa-user text-base md:text-4xl"></i>
          <span class="text-[7px] md:text-sm">About</span>
        </RouterLink>
        <RouterLink to="/skill"
          class="h-14 md:h-20 bg-green-400/50 hover:bg-green-600/50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white/80 font-medium rounded-xl flex flex-col items-center justify-center transition">
          <i class="fa-solid fa-pen-nib text-base md:text-4xl"></i>
          <span class="text-[7px] md:text-sm">Skills</span>
        </RouterLink>
        <RouterLink to="/project"
          class="h-14 md:h-20 bg-green-400/50 hover:bg-green-600/50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white/80 font-medium rounded-xl flex flex-col items-center justify-center transition">
          <i class="fa-solid fa-list-check text-base md:text-4xl"></i>
          <span class="text-[7px] md:text-sm">Projects</span>
        </RouterLink>
        <RouterLink to="/contact"
          class="h-14 md:h-20 bg-green-400/50 hover:bg-green-600/50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white/80 font-medium rounded-xl flex flex-col items-center justify-center transition">
          <i class="fa-solid fa-envelope text-base md:text-4xl"></i>
          <span class="text-[7px] md:text-sm">Contact</span>
        </RouterLink>
        <button @click="toggleDark()"
          class="h-14 md:h-20 bg-green-400/50 hover:bg-green-600/50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white/80 font-medium rounded-xl flex flex-col items-center justify-center transition">
          <span class="text-base md:text-4xl">
            {{ isDark ? "🌜" : "🔆" }}
          </span>
        </button>
        <div class="h-14 md:h-20 relative group">
          <button
            class="h-full w-full bg-green-400/50 hover:bg-green-600/50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white/80 font-medium rounded-xl flex flex-col items-center justify-center transition">
            <i class="fa-solid fa-language text-base md:text-4xl"></i>
          </button>
          <div
            class="absolute right-0 left-0 w-20 bg-white rounded-lg overflow-hidden shadow-lg py-0 z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition">
            <a href="?lang=en" class="block w-full text-left px-4 py-1 hover:bg-gray-100">English</a>
            <a href="?lang=kh" class="block w-full text-left px-4 py-1 hover:bg-gray-100">ខ្មែរ</a>
            <a href="?lang=zh" class="block w-full text-left px-4 py-1 hover:bg-gray-100">中国</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
