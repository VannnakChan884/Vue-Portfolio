<template>
    <!-- Contact Section -->
    <div class="absolute top-0 right-0 py-6 pb-32 w-full md:w-3/4 lg:w-4/5 xl:w-5/6 bg-white dark:bg-gray-900 px-6">
        <div class="md:ml-6 lg:ml-6 xl:ml-6">
            <div class="max-w-4xl mx-auto mb-12">
                <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-200 text-center">Get In Touch</h2>
                <p class="max-w-full mx-auto mt-2 mb-4 text-center text-sm text-gray-500 dark:text-gray-300">I'll create
                    high-quality linkable content and build at least 40 high-authority links to each asset, paving the
                    way
                    for you to grow your rankings, improve brand.</p>
            </div>
            <div
                class="max-w-4xl mx-auto bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 p-3 rounded-2xl shadow-md">
                <div class="grid md:grid-cols-2 gap-x-6 gap-y-6">
                    <!-- Contact Info -->
                    <div class="relative bg-gray-100 dark:bg-gray-900 p-6 rounded-lg overflow-hidden">
                        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-200">Contact
                            Information</h4>
                        <p class="max-w-full mx-auto mt-2 mb-4 text-justify text-sm text-gray-500 dark:text-gray-300">
                            I'll create high-quality linkable content and build at least 40 high-authority.</p>
                        <div class="flex flex-col md:space-y-2 mt-6 z-50">
                            <div class="flex items-center">
                                <div class="w-10 h-10 flex items-center justify-start">
                                    <i class="fa-solid fa-phone text-lg"></i>
                                </div>
                                <span class="text-sm no-underline">(+855) 96 26 65 240<br>(+855) 88 600 4544</span>
                            </div>
                            <div class="flex items-center">
                                <div class="w-10 h-10 flex items-center justify-start">
                                    <i class="fa-brands fa-telegram text-lg"></i>
                                </div>
                                <a href="https://t.me/vannak_IT" target="_blank">Vannak</a>
                            </div>
                            <div class="flex items-center">
                                <div class="w-10 h-10 flex items-center justify-start">
                                    <i class="fa-brands fa-linkedin text-lg"></i>
                                </div>
                                <a href="https://www.linkedin.com/in/chan-vannak/" target="_blank">Chan Vannak</a>
                            </div>
                            <div class="flex items-center">
                                <div class="w-10 h-10 flex items-center justify-start">
                                    <i class="fa-brands fa-github text-lg"></i>
                                </div>
                                <a href="https://github.com/VannnakChan884" target="_blank">Chan Vannak</a>
                            </div>
                            <div class="flex items-center">
                                <div class="w-10 h-10 flex items-center justify-start">
                                    <i class="fa-solid fa-envelope text-lg"></i>
                                </div>
                                <a href="#" class="text-sm">vannakchan884@gmail.com</a>
                            </div>
                            <div class="flex items-center">
                                <div class="w-10 h-10 flex items-center justify-start">
                                    <i class="fa-solid fa-location-dot text-lg"></i>
                                </div>
                                <span class="text-sm">Takeo, Cambodia</span>
                            </div>
                        </div>
                        <div
                            class="w-64 h-64 bg-gray-400/30 dark:bg-gray-600/40 blur-3xl absolute -bottom-20 -right-20 rounded-full z-10">
                        </div>
                    </div>

                    <!-- Contact Form -->
                    <form class="my-8">
                        <div class="grid lg:grid-cols-2 gap-x-6">
                            <div class="mb-6">
                                <label for="name" class="text-sm font-medium mb-1">Your Name</label>
                                <input type="text" id="name" name="name" placeholder="Your name here" required
                                    class="w-full pb-2 bg-transparent dark:bg-gray-700 dark:border-gray-600 border-b border-gray-300 focus:border-gray-500 dark:focus:border-gray-200 outline-none">
                            </div>
                            <div class="mb-6">
                                <label for="email" class="text-sm font-medium mb-1">
                                    Your Email
                                </label>
                                <input type="email" id="email" name="email" placeholder="example@gmail.com" required
                                    class="w-full pb-2 bg-transparent dark:bg-gray-700 dark:border-gray-600 border-b border-gray-300 focus:border-gray-500 dark:focus:border-gray-200 outline-none">
                            </div>
                        </div>
                        <div class="mb-6">
                            <label for="subject" class="text-sm font-medium mb-1">Your Subject</label>
                            <input type="text" name="subject" id="subject" placeholder="Your subject here" required
                                class="w-full pb-2 bg-transparent dark:bg-gray-700 dark:border-gray-600 border-b border-gray-300 focus:border-gray-500 dark:focus:border-gray-200 outline-none">
                        </div>
                        <div class="mb-6">
                            <label for="message" class="text-sm font-medium mb-1">
                                Your Message
                            </label>
                            <textarea rows="4" id="message" name="message" placeholder="Your message here" required
                                class="w-full pb-2 bg-transparent dark:bg-gray-700 dark:border-gray-600 border-b border-gray-300 focus:border-gray-500 dark:focus:border-gray-200 outline-none"></textarea>
                        </div>
                        <div>
                            <button type="submit"
                                class="w-full bg-gray-800 hover:bg-blue-700 dark:bg-gray-900 dark:hover:bg-gray-800 text-gray-200 font-medium py-3 px-4 rounded-md btn">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>