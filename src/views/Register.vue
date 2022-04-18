<script setup lang="ts">
import { ref } from "vue"

const currentTab = ref(<number> 1)

const passwordRef = ref(<HTMLInputElement><unknown> null)

const revealPass = () => {
  passwordRef.value.type = 'text'
  setTimeout(() => {
    passwordRef.value.type = 'password'
  }, 2000)
}

</script>
<template>
  <div>
    <div class="relative">
      <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
      <div class="relative sm:overflow-hidden">
        <div class="absolute inset-0">
          <img class="h-full w-full object-cover object-top" src="../assets/Kisumu-city-view-from-Kisumu-Beach-Resort.jpg" alt="People working on laptops">
        </div>
        <div class="relative max-w-6xl mx-auto py-48">

        </div>
      </div>
    </div>

    <div class="bg-white pb-80">
      <div class="max-w-6xl mx-auto -my-80 sm:-my-72 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1">
          <div class="relative">
            <div class="relative block w-full rounded-lg bg-white shadow-2xl overflow-hidden">
              <div class="lg:absolute lg:inset-0">
                <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                  <img class="h-56 w-full object-cover lg:absolute lg:h-full" src="https://images.unsplash.com/photo-1546803309-1f27c8ee1652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" alt="">
                </div>
              </div>
              <div class="relative px-4 sm:px-6 lg:px-8 lg:max-w-5xl">
                <div class="max-w-md mx-auto mt-12 sm:max-w-lg lg:mx-0 lg:pl-8 ">
                  <h1 class="text-xl text-blue-titleBlue font-medium tracking-tight">Register / Activate Account</h1>
                  <p class="text-gray-900 text-sm pt-2">Account Type</p>
                </div>
              </div>
              <div class="relative py-4 px-4 sm:py-6 sm:px-6 lg:px-8 lg:max-w-5xl lg:pb-8 lg:pt-4 lg:grid lg:grid-cols-2">
                <div class="lg:pl-8">
                  <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                    <div>
                      <div class="sm:hidden">
                        <label for="tabs" class="sr-only">Select a tab</label>
                        <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
                        <select id="tabs" name="tabs" class="block w-full focus:ring-amber-500 focus:border-amber-500 border-gray-300 rounded-md">
                          <option>Individual Account</option>

                          <option>Business Account</option>
                        </select>
                      </div>
                      <div class="hidden sm:block">
                        <nav class="flex space-x-4" aria-label="Tabs">
                          <!-- Current: "bg-amber-100 text-amber-700", Default: "text-gray-500 hover:text-gray-700" -->
                          <button type="button" @click="currentTab = 1" :class="{'text-white from-amber-500 to-amber-400': currentTab === 1}" class="bg-gradient-to-r text-gray-500 bg-gray-100 hover:text-white hover:from-amber-800 hover:to-amber-400 px-3 py-2 font-medium text-sm rounded-md">Individual Account</button>

                          <button type="button" @click="currentTab = 2" :class="{'text-white from-blue-500 to-green-400': currentTab === 2}" class="bg-gradient-to-r text-gray-500 bg-gray-100 hover:text-white hover:from-blue-800 hover:to-teal-400 px-3 py-2 font-medium text-sm rounded-md">Business Account</button>
                        </nav>
                      </div>
                    </div>

                    <form v-if="currentTab === 1" class="mt-6">
                      <div class="grid grid-cols-12 gap-y-6 gap-x-4">

                        <div class="col-span-full">
                          <label for="citizen" class="block text-sm font-medium text-gray-700">Citizenship</label>
                          <div class="mt-1 relative">
                            <input type="text" id="citizen" name="citizen" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm">
                            <div class="absolute inset-y-0 right-0 flex items-center">
                              <hr class="rotate-90 h-0.5 bg-gray-500 w-5">
                              <label for="currency" class="sr-only">Citizenship</label>
                              <select id="currency" name="currency" class="focus:ring-amber-500 focus:border-amber-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                                <option>CITIZEN</option>
                                <option>OTHER</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div class="col-span-full">
                          <label for="id-number" class="block text-sm font-medium text-gray-700">Your National ID</label>
                          <div class="mt-1">
                            <input type="text" id="id-number" name="id-number" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm">
                          </div>
                        </div>

                      </div>

                      <button type="submit" class="w-1/3 mt-6 bg-green-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                        Next
                      </button>

                      <p class="flex justify-start text-sm font-medium text-gray-500 mt-6">
                        Already have an account? &nbsp;<router-link class="text-amber-400 underline" to="/signin">Log In</router-link>
                      </p>
                    </form>

                    <form v-if="currentTab === 2" class="mt-6">
                      <div class="grid grid-cols-12 gap-y-6 gap-x-4">
                        <div class="col-span-full">
                          <label for="id-number" class="block text-sm font-medium text-gray-700">Enter your organisation KRA PIN</label>
                          <div class="mt-1">
                            <input type="text" id="id-number" name="id-number" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm">
                          </div>
                        </div>

                      </div>

                      <button type="submit" class="w-1/3 mt-6 bg-green-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                        Next
                      </button>

                      <p class="flex justify-start text-sm font-medium text-gray-500 mt-6">
                        Already have an account? &nbsp;<router-link class="text-amber-400 underline" to="/signin">Log In</router-link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
