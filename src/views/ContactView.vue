<template>
    <!-- Contact Section -->
    <div
        class="absolute top-0 right-0 pt-4 px-6 w-full md:w-3/4 lg:w-4/5 xl:5/6 bg-white dark:bg-gray-900">
        <div class="md:ml-6 lg:ml-6 xl:ml-0">
            <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-12 uppercase">
                contact_title
            </h2>
            <div
                class="max-w-2xl mx-auto bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 p-8 rounded-lg shadow-md">
                <form class="space-y-6">
                    <div>
                        <label for="name" class="block text-sm font-medium mb-1">
                            name
                        </label>
                        <input type="text" required
                            class="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent">
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block text-sm font-medium mb-1">
                            email
                        </label>
                        <input type="email" required
                            class="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent">
                    </div>
                    <div class="mb-6">
                        <label for="message" class="block text-sm font-medium mb-1">
                            message
                        </label>
                        <textarea rows="5" required
                            class="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"></textarea>
                    </div>
                    <div>
                        <button type="submit"
                            class="w-full bg-gray-800 hover:bg-blue-700 dark:bg-gray-900 dark:hover:bg-gray-800 text-gray-200 font-medium py-3 px-4 rounded-md btn">
                            submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>