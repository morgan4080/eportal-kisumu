<script setup lang="ts">
import {ref, watch} from "vue"
import {useMainStore} from "../stores/main-store"
import {pinia} from "../stores"

const mainStore = useMainStore(pinia)

const open = ref(<boolean> false)

const open1 = ref(<boolean> false)

const mobileMenuOpen = ref(<boolean> false)

const refDropDown = ref(<HTMLDivElement><unknown>null)

const refDropDown1 = ref(<HTMLDivElement><unknown>null)

const toggle = () => open.value = !open.value

const toggle1 = () => open1.value = !open1.value

const onMouseDown = (e:any) => {
  if (open.value) e.preventDefault()
}
const onMouseDown1 = (e:any) => {
  if (open1.value) e.preventDefault()
}

const onClickAway = (ref: any, handler: any) => {
  const listener = (event: any) => {
    if (!ref || ref.contains(event.target)) {
      return;
    }
    handler(event);
  };
  document.addEventListener("mousedown", listener);
  document.addEventListener("touchstart", listener);
  return () => {
    document.removeEventListener("mousedown", listener);
    document.removeEventListener("touchstart", listener);
  };
}

watch(open, () => {
  onClickAway(refDropDown.value, () => open.value = false)
})

watch(open1, () => {
  onClickAway(refDropDown1.value, () => open1.value = false)
})

</script>

<template>
  <nav class="bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-center h-16">
        <div class="flex justify-between items-center w-full">
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-8 w-auto" src="../assets/logo.svg" alt="Kisumu Residence Portal">
            <img class="hidden lg:block h-8 w-auto" src="../assets/logo.svg" alt="Kisumu Residence Portal">
          </div>
          <div class="hidden md:ml-6 md:flex md:space-x-8">
            <router-link to="/" class="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"> Home </router-link>
            <div class="relative flex">
                <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
              <button @click="toggle" @mousedown="onMouseDown($event)" type="button" :class="{'text-gray-900': open, 'text-gray-500': !(open)}" class="group hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium" :aria-expanded="open.toString()">
                Services
                <svg :class="{ 'text-gray-600': open, 'text-gray-400': !(open) }" class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              <transition
                  enter-active-class="transition ease-out duration-200"
                  leave-active-class="transition ease-in duration-150"
                  enter-class="transform opacity-0 translate-y-1"
                  enter-to-class="transform opacity-100 translate-y-0"
                  leave-class="transform opacity-100 translate-y-0"
                  leave-to-class="transform opacity-0 translate-y-1"
              >
                <div ref="refDropDown" v-show="open" class="absolute -ml-4 mt-16 transform z-10 px-2 w-screen max-w-5xl sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="relative flex flex-col space-y-12 bg-white px-10 py-12">
                      <div class="grid grid-cols-4 gap-4">
                        <div class="-m-3 p-1 flex items-start rounded-lg">
                          <div class="ml-4">
                            <p class="text-base font-medium text-gray-900">Parking Management</p>
                            <ul class="mt-1 text-xs text-gray-500 space-y-1.5">
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Daily Parking</a></li>
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Seasonal Parking</a></li>
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Reserved Parking</a></li>
                            </ul>
                          </div>
                        </div>

                        <div class="-m-3 p-1 flex items-start rounded-lg">
                          <div class="ml-4">
                            <p class="text-base font-medium text-gray-900">Property Management</p>
                            <ul class="mt-1 text-xs text-gray-500 space-y-1.5">
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Payment of County Properties</a></li>
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Tenancy Application</a></li>
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Tenancy Transfer</a></li>
                            </ul>
                          </div>
                        </div>

                        <div class="-m-3 p-1 flex items-start rounded-lg">
                          <div class="ml-4">
                            <p class="text-base font-medium text-gray-900">Business Licencing</p>
                            <ul class="mt-1 text-xs text-gray-500 space-y-1.5">
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Single Business Permits</a></li>
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Liquor Licencing</a></li>
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Weights and Measures</a></li>
                            </ul>
                          </div>
                        </div>

                        <div class="-m-3 p-1 flex items-start rounded-lg">
                          <div class="ml-4">
                            <p class="text-base font-medium text-gray-900">Health Services</p>
                            <ul class="mt-1 text-xs text-gray-500 space-y-1.5">
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Health Certificates & Other licences</a></li>
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Other Health Services</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="grid grid-cols-4 gap-4">

                        <div class="-m-3 p-1 flex items-start rounded-lg">
                          <div class="ml-4">
                            <p class="text-base font-medium text-gray-900">Land & Urban Planning</p>
                            <ul class="mt-1 text-xs text-gray-500 space-y-1.5">
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Rate Search</a></li>
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Add Land Record (LR)</a></li>
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Land Service Application</a></li>
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Land Transfer</a></li>
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Land Survey</a></li>
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Land Clearance</a></li>
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Ground Rent/SDR</a></li>
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Property Development Applications</a></li>
                            </ul>
                          </div>
                        </div>

                        <div class="-m-3 p-1 flex items-start rounded-lg">
                          <div class="ml-4">
                            <p class="text-base font-medium text-gray-900">Social Services</p>
                            <ul class="mt-1 text-xs text-gray-500 space-y-1.5">
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Hire of County Grounds</a></li>
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Hire of County Halls</a></li>
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Hire of School Facilities</a></li>
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Hire of County Equipments</a></li>
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Hire of Stadium</a></li>
                            </ul>
                          </div>
                        </div>

                        <div class="-m-3 p-1 flex items-start rounded-lg">
                          <div class="ml-4">
                            <p class="text-base font-medium text-gray-900">Essential Services</p>
                            <ul class="mt-1 text-xs text-gray-500 space-y-1.5">
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Education</a></li>
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Environment</a></li>
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Roads, Public works & Transport</a></li>
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Agriculture (Fisheries & Vet Services)</a></li>
                              <li><a href="#" class="text-gray-500 hover:text-gray-700">Cooperatives</a></li>
                            </ul>
                          </div>
                        </div>

                        <div class="grid grid-cols-1">
                          <div class="-m-3 p-1 flex items-start rounded-lg">
                            <div class="ml-4">
                              <p class="text-base font-medium text-gray-900">Market Cess</p>
                              <ul class="mt-1 text-xs text-gray-500 space-y-1.5">
                                <li><a href="#" class="text-gray-500 hover:text-gray-700">Market Cess</a></li>
                              </ul>
                            </div>
                          </div>

                          <div class="-m-3 p-1 flex items-start rounded-lg">
                            <div class="ml-4">
                              <p class="text-base font-medium text-gray-900">Outdoor Advertisement</p>
                              <ul class="mt-1 text-xs text-gray-500 space-y-1.5">
                                <li><a href="#" class="text-gray-500 hover:text-gray-700">Advertisement (Small Format)</a></li>
                                <li><a href="#" class="text-gray-500 hover:text-gray-700">Advertisement (Large Format)</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>

            </div>
            <router-link to="/contact-us" class="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"> Contact </router-link>
            <router-link to="/faqs" class="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"> FAQs </router-link>
          </div>
          <div v-if="!mainStore.isLoggedIn" class="hidden space-x-4 md:flex md:items-center">
            <button @click="$router.push('/signin')" type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-blue-buttonBlue border-2 hover:bg-white hover:text-blue-600 hover:border-blue-buttonBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-buttonBlue">Sign In</button>
            <button @click="$router.push('/register')" type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-blue-titleBlue bg-transparent border-2 border-blue-buttonBlue hover:bg-blue-buttonBlue hover:border-blue-buttonBlue hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-buttonBlue">Create Account</button>
          </div>
          <div v-if="mainStore.isLoggedIn" class="hidden md:ml-6 md:flex md:items-center">

            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <div @click="toggle1" @mousedown="onMouseDown1($event)" class="flex items-center cursor-pointer space-x-2">
                <div class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                </div>
                <div class="flex items-center space-x-0.5">
                  <div class="text-xs">{{ mainStore.user ? mainStore.user.firstName + " " + mainStore.user.lastName : '' }}</div>
                  <svg :class="{ 'text-gray-600': open1, 'text-gray-400': !(open1) }" class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>

              <transition
                  enter-active-class="transition ease-out duration-200"
                  leave-active-class="transition ease-in duration-75"
                  enter-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
              >
                <div ref="refDropDown1" v-show="open1" class="z-50 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                  <!-- Active: "bg-gray-100", Not Active: "" -->
                  <router-link to="/profile" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</router-link>
                  <button @click="mainStore.logOut()" type="button" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</button>
                </div>
              </transition>
            </div>
          </div>
        </div>

        <div class="-mr-2 flex items-center md:hidden">
          <!-- Mobile menu button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>

            <svg :class="{ 'hidden' : mobileMenuOpen, 'block' : !mobileMenuOpen }" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <svg :class="{ 'hidden' : !mobileMenuOpen, 'block' : mobileMenuOpen }" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-show="mobileMenuOpen" class="md:hidden" id="mobile-menu">
      <div class="pt-2 pb-3 space-y-1">
        <!-- Current: "bg-blue-50 border-blue-500 text-blue-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
        <router-link to="/" class="bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Home</router-link>
        <a href="#" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Services</a>
        <router-link to="/contact" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Contact</router-link>
        <router-link to="/faqs" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">FAQs</router-link>
      </div>
      <div v-if="mainStore.isLoggedIn" class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800">Tom Cook</div>
            <div class="text-sm font-medium text-gray-500">tom@example.com</div>
          </div>
          <button type="button" class="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <span class="sr-only">View notifications</span>
            <!-- Heroicon name: outline/bell -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
        <div class="mt-3 space-y-1">
          <a href="#" class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Your Profile</a>
          <a href="#" class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Settings</a>
          <a href="#" class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Sign out</a>
        </div>
      </div>

    </div>
  </nav>
</template>

<style scoped>

</style>
