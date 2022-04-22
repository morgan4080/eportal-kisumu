<script setup lang="ts">
import { pinia } from "../stores"
import { useMainStore } from "../stores/main-store"
const mainStore = useMainStore(pinia)
</script>
<template>
  <main>
    <!-- Hero card -->
    <div class="relative">
      <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
      <div class="relative sm:overflow-hidden">
        <div class="absolute inset-0">
          <img class="h-full w-full object-cover object-top" src="../assets/Kisumu-city-view-from-Kisumu-Beach-Resort top.png" alt="People working on laptops">
<!--          <div class="absolute inset-0 bg-white mix-blend-multiply"></div>-->
        </div>
        <div class="relative max-w-6xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:pt-32 lg:pb-48 lg:px-8">
          <h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            <span class="block text-blue-titleBlue">Welcome to Kisumu</span>
            <span class="block text-blue-titleBlue">eResidence Portal</span>
          </h1>
          <div v-if="!mainStore.getLoggedInState" class="mt-10 max-w-sm sm:max-w-none sm:flex">
            <div class="max-w-3xl w-full space-y-4 flex flex-col sm:items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around">
              <input type="text" class="grow items-center px-3.5 py-3 border border-transparent text-base leading-4 font-medium rounded-full shadow-sm text-gray-900 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300" placeholder="What can we do for you today?">

              <button @click="$router.push('/login')" type="button" class="inline-flex justify-center flex-none sm:ml-4 items-center px-3.5 py-3 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-blue-titleBlue bg-yellow-300 hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300">
                <svg class="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Sign In
              </button>

              <button type="button" class="inline-flex justify-center flex-none sm:ml-4 items-center px-3.5 py-3 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-blue-600 bg-white hover:bg-blue-buttonBlue hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-buttonBlue">
                <svg class="-ml-0.5 mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
                Create Account
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white sm:pb-16">
      <div class="max-w-6xl mx-auto my-10 lg:-my-16 px-4 sm:px-6 lg:px-8">
        <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          <li class="relative cursor-help">
            <div class="transition ease-in-out delay-150 h-58 group block px-2 pt-6 sm:py-10 w-full rounded-lg bg-white hover:bg-amber-300 shadow-2xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-amber-500 overflow-hidden">
              <h3 class="text-center text-blue-titleBlue opacity-95 text-sm sm:text-base font-normal">Packing Management</h3>
              <img class="block h-12 sm:h-16 w-auto mx-auto my-8 group-hover:hidden" src="../assets/car-front.svg" alt="Packing Management">
              <p class="transition ease-in-out delay-150 mt-4 px-4 text-center prose prose-blue text-blue-titleBlue opacity-95 text-xs sm:text-sm hidden group-hover:block">
                Pay for parking or clamping fees, including in bulk & manage your vehicles.
              </p>
              <button type="button" class="transition ease-in-out delay-150 mx-auto px-2 py-1.5 mt-6 hidden opacity-0 group-hover:block group-hover:opacity-100 bg-blue-titleBlue text-white rounded-full text-xs font-normal">Access Service</button>
            </div>
          </li>
          <li class="relative cursor-help">
            <div class="transition ease-in-out delay-150 h-58 group block px-2 pt-6 sm:py-10 w-full rounded-lg bg-white hover:bg-amber-300 shadow-2xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-amber-500 overflow-hidden">
              <h3 class="text-center text-blue-titleBlue opacity-95 text-sm sm:text-base font-normal">Business Licences</h3>
              <img class="block h-12 sm:h-16 w-auto mx-auto my-8 group-hover:hidden" src="../assets/news.svg" alt="Business Licences">
              <p class="transition ease-in-out delay-150 mt-4 px-4 text-center prose prose-blue text-blue-titleBlue opacity-95 text-xs sm:text-sm hidden group-hover:block">
                Apply and pay for business permit, advertisement permit and many more.
              </p>
              <button type="button" class="transition ease-in-out delay-150 mx-auto px-2 py-1.5 mt-6 hidden opacity-0 group-hover:block group-hover:opacity-100 bg-blue-titleBlue text-white rounded-full text-xs font-normal">Access Service</button>
            </div>
          </li>
          <li class="relative cursor-help">
            <div class="transition ease-in-out delay-150 h-58 group block px-2 pt-6 sm:py-10 w-full rounded-lg bg-white hover:bg-amber-300 shadow-2xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-amber-500 overflow-hidden">
              <h3 class="text-center text-blue-titleBlue opacity-95 text-sm sm:text-base font-normal">Land & Urban Planning</h3>
              <img class="block h-12 sm:h-16 w-auto mx-auto my-8 group-hover:hidden" src="../assets/landscape.svg" alt="Land & Urban Planning">
              <p class="transition ease-in-out delay-150 mt-4 px-4 text-center prose prose-blue text-blue-titleBlue opacity-95 text-xs sm:text-sm hidden group-hover:block">
                Pay your annual land rates, print statement, or register a new property.
              </p>
              <button type="button" class="transition ease-in-out delay-150 mx-auto px-2 py-1.5 mt-6 hidden opacity-0 group-hover:block group-hover:opacity-100 bg-blue-titleBlue text-white rounded-full text-xs font-normal">Access Service</button>
            </div>
          </li>
          <li class="relative cursor-help">
            <div class="transition ease-in-out delay-150 h-58 group block px-2 pt-6 sm:py-10 w-full rounded-lg bg-white hover:bg-amber-300 shadow-2xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-amber-500 overflow-hidden">
              <h3 class="text-center text-blue-titleBlue opacity-95 text-sm sm:text-base font-normal">Essential Services</h3>
              <img class="block h-12 sm:h-16 w-auto mx-auto my-8 group-hover:hidden" src="../assets/home_repair_service.svg" alt="Essential Services">
              <p class="transition ease-in-out delay-150 mt-4 px-4 text-center prose prose-blue text-blue-titleBlue opacity-95 text-xs sm:text-sm hidden group-hover:block">
                Pay for other seasonal services, print statements, from education to roads, and many more.
              </p>
              <button type="button" class="transition ease-in-out delay-150 mx-auto px-2 py-1.5 mt-6 hidden opacity-0 group-hover:block group-hover:opacity-100 bg-blue-titleBlue text-white rounded-full text-xs font-normal">Access Service</button>
            </div>
          </li>
          <li class="relative cursor-help">
            <div class="transition ease-in-out delay-150 h-58 group block px-2 pt-6 sm:py-10 w-full rounded-lg bg-white hover:bg-amber-300 shadow-2xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-amber-500 overflow-hidden">
              <h3 class="text-center text-blue-titleBlue opacity-95 text-sm sm:text-base font-normal">Other Health Services</h3>
              <img class="block h-12 sm:h-16 w-auto mx-auto my-8 group-hover:hidden" src="../assets/Group%202159.svg" alt="Other Health Services">
              <p class="transition ease-in-out delay-150 mt-4 px-4 text-center prose prose-blue text-blue-titleBlue opacity-95 text-xs sm:text-sm hidden group-hover:block">
                Pay your annual land rates, print statement, or register a new property.
              </p>
              <button type="button" class="transition ease-in-out delay-150 mx-auto px-2 py-1.5 mt-6 hidden opacity-0 group-hover:block group-hover:opacity-100 bg-blue-titleBlue text-white rounded-full text-xs font-normal">Access Service</button>
            </div>
          </li>
          <li class="relative cursor-help">
            <div class="transition ease-in-out delay-150 h-58 group block px-2 pt-6 sm:py-10 w-full rounded-lg bg-white hover:bg-amber-300 shadow-2xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-amber-500 overflow-hidden">
              <h3 class="text-center text-blue-titleBlue opacity-95 text-sm sm:text-base font-normal">Advertisement Services</h3>
              <img class="block h-12 sm:h-16 w-auto mx-auto my-8 group-hover:hidden" src="../assets/Group%202163.svg" alt="Advertisement Services">
              <p class="transition ease-in-out delay-150 mt-4 px-4 text-center prose prose-blue text-blue-titleBlue opacity-95 text-xs sm:text-sm hidden group-hover:block">
                Pay your annual land rates, print statement, or register a new property.
              </p>
              <button type="button" class="transition ease-in-out delay-150 mx-auto px-2 py-1.5 mt-6 hidden opacity-0 group-hover:block group-hover:opacity-100 bg-blue-titleBlue text-white rounded-full text-xs font-normal">Access Service</button>
            </div>
          </li>
          <li class="relative cursor-help">
            <div class="transition ease-in-out delay-150 h-58 group block px-2 pt-6 sm:py-10 w-full rounded-lg bg-white hover:bg-amber-300 shadow-2xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-amber-500 overflow-hidden">
              <h3 class="text-center text-blue-titleBlue opacity-95 text-sm sm:text-base font-normal">Property Services</h3>
              <img class="block h-12 sm:h-16 w-auto mx-auto my-8 group-hover:hidden" src="../assets/Group%202161.svg" alt="Property Services">
              <p class="transition ease-in-out delay-150 mt-4 px-4 text-center prose prose-blue text-blue-titleBlue opacity-95 text-xs sm:text-sm hidden group-hover:block">
                Pay your annual land rates, print statement, or register a new property.
              </p>
              <button type="button" class="transition ease-in-out delay-150 mx-auto px-2 py-1.5 mt-6 hidden opacity-0 group-hover:block group-hover:opacity-100 bg-blue-titleBlue text-white rounded-full text-xs font-normal">Access Service</button>
            </div>
          </li>
          <li class="relative cursor-help">
            <div class="transition ease-in-out delay-150 h-58 group block px-2 pt-6 sm:py-10 w-full rounded-lg bg-white hover:bg-amber-300 shadow-2xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-amber-500 overflow-hidden">
              <h3 class="text-center text-blue-titleBlue opacity-95 text-sm sm:text-base font-normal">Other Services</h3>
              <img class="transition ease-in-out delay-150 block h-12 sm:h-16 w-auto mx-auto my-8 group-hover:hidden group-hover:opacity-0" src="../assets/Group%202165.svg" alt="Other Services">
              <p class="transition ease-in-out delay-150 mt-4 px-4 text-center prose prose-blue text-blue-titleBlue opacity-95 text-xs sm:text-sm hidden group-hover:block">
                Pay your annual land rates, print statement, or register a new property.
              </p>
              <button type="button" class="transition ease-in-out delay-150 mx-auto px-2 py-1.5 mt-6 hidden opacity-0 group-hover:block group-hover:opacity-100 bg-blue-titleBlue text-white rounded-full text-xs font-normal">Access Service</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
