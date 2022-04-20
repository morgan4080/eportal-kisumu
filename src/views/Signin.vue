<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useMainStore } from "../stores/main-store"
import { pinia } from "../stores"
const mainStore = useMainStore(pinia)
import { SignInFormType } from '../types'

const router = useRouter()
// if mainStore.getLoggedInState state is true redirect to profile always

if (mainStore.getLoggedInState) {
  router.push("/profile")
}

const currentTab = ref(<number> 1)

const passwordRef = ref(<HTMLInputElement><unknown> null)

const signInForm = ref(<SignInFormType> {})

const revealPass = () => {
  passwordRef.value.type = 'text'
  setTimeout(() => {
    passwordRef.value.type = 'password'
  }, 2000)
}

const submitLogin = async () => {
  try {
    const response = await mainStore.login(signInForm.value)
    if (response) {
      await router.push('/verify-otp')
    }
  } catch (e: any) {
    console.log(e)
  }
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
      <div class="max-w-6xl mx-auto -my-80 sm:-my-60 px-4 sm:px-6 lg:px-8">
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
                  <h1 class="text-xl text-blue-titleBlue font-medium tracking-tight">Hello, Welcome!</h1>
                  <p class="text-gray-900 text-sm pt-1">Account Type</p>
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

                    <form @submit.prevent="submitLogin" v-if="currentTab === 1" class="mt-6">
                      <div class="grid grid-cols-12 gap-y-6 gap-x-4">
                        <div class="col-span-full">
                          <label for="id-number" class="block text-sm font-medium text-gray-700">Your National ID / KRA PIN</label>
                          <div class="mt-1">
                            <input v-model="signInForm.idOrKraPin" type="text" id="id-number" name="id-number" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm">
                          </div>
                        </div>

                        <div class="col-span-full">
                          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                          <div class="mt-1 relative">
                            <input v-model="signInForm.password"  ref="passwordRef" type="password" id="password" name="password" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm">
                            <div class="absolute inset-y-0 right-0 flex items-center">
                              <button @click="revealPass" type="button" class="focus:ring-amber-500 focus:border-amber-500 h-full py-0 pl-2 pr-4 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>

                      </div>

                      <button type="submit" class="w-1/3 mt-6 flex items-center bg-green-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                        <svg class="w-6 h-6 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                        </svg>
                        Login
                      </button>

                      <p class="flex justify-start text-sm font-medium text-gray-500 mt-6">
                        Do you have an account? &nbsp;<router-link class="text-amber-400 underline" to="/register">Register</router-link>
                      </p>
                    </form>

                    <form @submit.prevent="submitLogin" v-if="currentTab === 2" class="mt-6">
                      <div class="grid grid-cols-12 gap-y-6 gap-x-4">
                        <div class="col-span-full">
                          <label for="id-number" class="block text-sm font-medium text-gray-700">KRA PIN</label>
                          <div class="mt-1">
                            <input v-model="signInForm.idOrKraPin"  type="text" id="id-number" name="id-number" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm">
                          </div>
                        </div>

                        <div class="col-span-full">
                          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                          <div class="mt-1 relative">
                            <input v-model="signInForm.password" ref="passwordRef" type="password" id="password" name="password" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm">
                            <div class="absolute inset-y-0 right-0 flex items-center">
                              <button @click="revealPass" type="button" class="focus:ring-amber-500 focus:border-amber-500 h-full py-0 pl-2 pr-4 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>

                      </div>

                      <button type="submit" class="w-1/3 mt-6 flex items-center bg-green-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                        <svg class="w-6 h-6 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                        </svg>
                        Login
                      </button>

                      <p class="flex justify-start text-sm font-medium text-gray-500 mt-6">
                        Do you have an account? &nbsp;<router-link class="text-amber-400 underline" to="/register">Register</router-link>
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
