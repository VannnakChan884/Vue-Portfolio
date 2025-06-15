<template>
    <!-- Projects Section -->
    <div class="w-full md:w-2/3 lg:w-3/4 xl:5/6 absolute top-0 right-0 py-28 px-6 bg-white dark:bg-gray-900">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-200 uppercase text-center mb-12">
                projects_title
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="project-card bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
                    <div class="md:h-56 overflow-hidden">
                        <img src="../assets/avatar.jpg" alt="project title"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">title</h3>
                        <p class="text-gray-800 text-sm dark:text-gray-300 mb-3">description</p>
                        <a href="#" class="bg-gray-800 text-gray-200 dark:bg-white dark:text-gray-800 text-xs px-2 py-1 rounded">
                            category
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
