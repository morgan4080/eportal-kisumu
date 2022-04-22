<script setup lang="ts">
import {useMainStore} from "../stores/main-store"
import {pinia} from "../stores"
import {reactive, ref} from "vue"

const mainStore = useMainStore(pinia)


const navigationData = reactive(<{name: string, href: string, current: boolean}[]>[
  { name: 'Unpaid Bills', href: '#', current: true },
  { name: 'Transaction History', href: '#', current: false },
  { name: 'Service Application', href: '#', current: false },
  { name: 'Obligations', href: '#', current: false },
  { name: 'Draft Application', href: '#', current: false },
])

const currentNavItemName = ref(<string> navigationData[0].name)

const setActiveNav = (index: number) => {
  navigationData.map((item, i) => {
    if (index === i) {
      currentNavItemName.value = item.name
    }
    return item.current = index === i
  })
}

</script>
<template>
  <main class="min-h-screen">
    <div class="relative">
      <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
      <div class="relative sm:overflow-hidden">
        <div class="absolute inset-0">
          <img class="h-full w-full object-cover object-top" src="../assets/Kisumu-city-view-from-Kisumu-Beach-Resort top.png" alt="People working on laptops">
        </div>
        <div class="relative max-w-6xl mx-auto py-48">

        </div>
      </div>
    </div>
    <div class="bg-white pb-80">
      <div class="max-w-6xl mx-auto -my-80 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1">
          <div class="relative space-y-10">
            <div class="relative block w-full rounded-2xl bg-gray-50 shadow-2xl overflow-hidden">
              <div class="py-6 px-8 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-12 :gap-6">
                <div class="sm:col-span-6 flex items-center space-x-4 lg:space-x-6">
                  <img class="w-16 h-16 rounded-full lg:w-20 lg:h-20" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="">
                  <div class="font-medium text-lg leading-6 space-y-1">
                    <h3>{{ mainStore.getLoggedInUser.firstName + " " + mainStore.getLoggedInUser.lastName }}</h3>
                    <p class="text-gray-400 font-light">{{ mainStore.getLoggedInUser.email }}</p>
                  </div>
                </div>
                <div class="sm:col-span-6 space-y-1 flex flex-col bg-gray-200 px-8 py-4 rounded-2xl">
                  <p class="text-gray-900 font-light">Outstanding Bill</p>
                  <div class="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
                    <p class="font-medium text-2xl text-gray-800">Ksh. 0.00</p>
                    <button type="button" class="bg-blue-titleBlue rounded-lg text-white px-3 py-1 hover:opacity-90">Download Bill</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative block w-full rounded-2xl bg-white shadow-2xl overflow-hidden">
              <div>
                <div class="hidden md:flex md:w-64 md:flex-col absolute top-0 h-full">
                  <div class="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto">
                    <div class="mt-5 flex-grow flex flex-col">
                      <nav class="flex-1 pb-4 space-y-1">
                        <a @click="setActiveNav(index)" v-for="(item, index) in navigationData" href="#" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-6 py-4 text-lg font-medium']" >
                          {{ item.name }}
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
                <div class="md:pl-64 flex flex-col flex-1">
                  <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
                    <button type="button" class="px-4 border-r border-gray-200 text-gray-500 md:hidden">
                      <span class="sr-only">Open sidebar</span>
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                      </svg>
                    </button>
                    <div class="flex-1 px-4 flex justify-between">
                      <div class="flex-1 flex">
                        <form class="w-full flex md:ml-0" action="#" method="GET">
                          <label for="search-field" class="sr-only">Search {{ currentNavItemName }}</label>
                          <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                            <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                              </svg>
                            </div>
                            <input id="search-field" class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm" :placeholder="`Search ${currentNavItemName}`" type="search" name="search">
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <main class="flex-1">
                    <div class="py-6">
                      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                        <div class="py-4">
                          <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
