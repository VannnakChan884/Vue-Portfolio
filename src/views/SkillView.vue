<template>
    <!-- Skills Section -->
    <div class="absolute top-0 right-0 py-28 px-6 w-full md:w-3/4 lg:w-4/5 xl:5/6 bg-white dark:bg-gray-900">
        <div class="md:ml-6 lg:ml-6 xl:ml-0">
            <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-12 uppercase">skills_title
            </h2>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Design Skills -->
                <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                    <div class="flex items-center mb-4">
                        <div class="bg-blue-100 p-3 rounded-full mr-4">
                            <i class="fa-solid fa-palette text-accent text-xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-primary dark:text-white">design_skills</h3>
                    </div>
                    <div class="space-y-3">
                        <div class="flex items-center">
                            <div class="w-2 h-2 bg-accent rounded-full mr-3"></div>
                            <span class="text-gray-600 dark:text-white">design_skills</span>
                        </div>
                    </div>
                </div>

                <!-- IT Skills -->
                <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                    <div class="flex items-center mb-4">
                        <div class="bg-blue-100 p-3 rounded-full mr-4">
                            <i class="fa-solid fa-network-wired text-accent text-xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-primary dark:text-white">it_skills</h3>
                    </div>
                    <div class="space-y-3">
                        <div class="flex items-center">
                            <div class="w-2 h-2 bg-accent rounded-full mr-3"></div>
                            <span class="text-gray-600 dark:text-white">it_skills</span>
                        </div>
                    </div>
                </div>

                <!-- Coding Skills -->
                <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                    <div class="flex items-center mb-4">
                        <div class="bg-blue-100 p-3 rounded-full mr-4">
                            <i class="fa-solid fa-code text-accent text-xl"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-primary dark:text-white">code_skills</h3>
                    </div>
                    <div class="space-y-3">
                        <div class="flex items-center">
                            <div class="w-2 h-2 bg-accent rounded-full mr-3"></div>
                            <span class="text-secontext-gray-600 dark:text-white">code_skills</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>