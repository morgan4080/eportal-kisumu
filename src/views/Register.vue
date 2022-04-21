<script setup lang="ts">
import { ref, watch } from "vue"
import { useRouter } from "vue-router"
import { useMainStore } from "../stores/main-store"
import { pinia } from "../stores"
import { RegisterFormType } from '../types'
const mainStore = useMainStore(pinia)

const router = useRouter()

// if mainStore.getLoggedInState state is true redirect to profile always

if (mainStore.getLoggedInState) {
  router.push("/profile")
}

const currentTab = ref(<number> 1)

const currentStep = ref(<number> 1)

const passwordRef = ref(<HTMLInputElement><unknown> null)

const registerForm = ref(<RegisterFormType>{})

registerForm.value.citizenship = "Kenyan"

const revealPass = () => {
  passwordRef.value.type = 'text'
  setTimeout(() => {
    passwordRef.value.type = 'password'
  }, 2000)
}

const submitReg = async (userType: string) => {
  if (userType === 'business') {
    // check if business step one is fully filled
    console.log("incrementing business step")
    if (currentStep.value === 2) {
      if (confirm("Are you sure your detail are correct to proceed")) {
        try {
          const { success, userId } = await mainStore.register(registerForm.value)
          if (success) {
            if (userId) await router.push(`/verify-otp/${userId}`)
          }
        } catch (e: any) {
          alert(e.message)
        }
      }
      return
    }
    currentStep.value += 1
  }

  if (userType === 'individual') {
    // check if individual step one is fully filled
    console.log("incrementing individual step")
    if (currentStep.value === 4) {
      if (confirm("Are you sure your detail are correct to proceed")) {
        try {
          const { success, userId } = await mainStore.register(registerForm.value)
          if (success) {
            if (userId) await router.push(`/verify-otp/${userId}`)
          }
        } catch (e: any) {
          alert(e.message)
        }
      }
      return
    }
    currentStep.value += 1
  }
}

watch(currentTab, () => {
  currentStep.value = 1
})

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
                  <h1 class="text-2xl text-blue-titleBlue font-normal tracking-wide">Register / Activate Account</h1>
                  <p v-if="currentStep === 1" class="text-gray-900 text-sm pt-1">Account Type</p>
                </div>
              </div>
              <div class="relative py-4 px-4 sm:py-6 sm:px-6 lg:px-8 lg:max-w-5xl lg:pb-8 lg:pt-4 lg:grid lg:grid-cols-2">
                <div class="lg:pl-8">
                  <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                    <div v-if="currentStep === 1">
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

                    <!--Start of individuals' forms-->

                    <form v-if="currentTab === 1 && currentStep === 1" @submit.prevent="submitReg('individual')" class="mt-6">

                      <div class="grid grid-cols-12 gap-y-6 gap-x-4">

                        <div class="sm:col-span-6">
                          <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                          <div class="mt-1">
                            <input v-model="registerForm.firstName" id="first-name" type="text" class="block w-full shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md">
                          </div>
                        </div>

                        <div class="sm:col-span-6">
                          <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                          <div class="mt-1">
                            <input v-model="registerForm.lastName" id="first-name" type="text" class="block w-full shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md">
                          </div>
                        </div>

                        <div class="col-span-full">
                          <label for="id-number" class="block text-sm font-medium text-gray-700">Your National ID</label>
                          <div class="mt-1">
                            <input v-model="registerForm.idNumber" type="text" id="id-number" name="id-number" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm">
                          </div>
                        </div>

                        <div class="col-span-full">
                          <label for="citizen" class="block text-sm font-medium text-gray-700">Citizenship</label>
                          <div class="mt-1 relative">
                            <input :value="registerForm.citizenship" disabled type="text" id="citizen" name="citizen" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm">
                            <div class="absolute inset-y-0 right-0 flex items-center">
                              <hr class="rotate-90 h-0.5 bg-gray-500 w-5">
                              <label for="currency" class="sr-only">Citizenship</label>
                              <select v-model="registerForm.citizenship" id="currency" name="currency" class="focus:ring-amber-500 focus:border-amber-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                                <option value="Kenyan">CITIZEN</option>
                                <option value="Other">OTHER</option>
                              </select>
                            </div>
                          </div>
                        </div>

                      </div>

                      <button type="submit" class="w-1/3 mt-12 bg-green-600 border border-transparent rounded-full shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        Next
                      </button>

                      <p class="flex justify-start text-sm font-medium text-gray-500 mt-6">
                        Already have an account? &nbsp;<router-link class="text-amber-400 underline" to="/login">Log In</router-link>
                      </p>
                    </form>

                    <form v-show="currentTab === 1 && currentStep === 2" @submit.prevent="submitReg('individual')" class="mt-6">

                      <div class="grid grid-cols-12 gap-y-6 gap-x-4">
                        <div class="col-span-full">
                          <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
                          <div class="mt-1">
                            <input v-model="registerForm.phoneNumber" type="number" id="phone" name="phone" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm">
                          </div>
                        </div>

                        <div class="col-span-full">
                          <label for="kra-pin" class="block text-sm font-medium text-gray-700">Enter KRA PIN</label>
                          <div class="mt-1">
                            <input @input="registerForm.kraPin = registerForm.kraPin.toUpperCase()" v-model="registerForm.kraPin" type="text" id="kra-pin" name="kra-pin" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm">
                          </div>
                        </div>
                      </div>

                      <div class="mt-12 flex justify-between">
                        <button @click="currentStep--" type="button" class="w-1/3 bg-gray-300 border border-transparent rounded-full shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                          Previous
                        </button>
                        <button type="submit" class="w-1/3 bg-green-600 border border-transparent rounded-full shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                          Next
                        </button>
                      </div>

                      <p class="flex justify-start text-sm font-medium text-gray-500 mt-6">
                        Already have an account? &nbsp;<router-link class="text-amber-400 underline" to="/login">Log In</router-link>
                      </p>
                    </form>

                    <form v-show="currentTab === 1 && currentStep === 3" @submit.prevent="submitReg('individual')" class="mt-6">
                      <div class="grid grid-cols-12 gap-y-6 gap-x-4">
                        <div class="col-span-full">
                          <label for="kra-pin" class="block text-sm font-medium text-gray-700">KRA PIN</label>
                          <div class="mt-1">
                            <input @input="registerForm.kraPin = registerForm.kraPin.toUpperCase()" v-model="registerForm.kraPin" disabled type="text" id="kra-pin" name="kra-pin" class="block w-full border border-gray-500 bg-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm">
                          </div>
                        </div>

                        <div class="col-span-full">
                          <h1 class="text-xl text-gray-900 opacity-80 font-medium tracking-tight">Create password</h1>
                        </div>

                        <div class="col-span-full">
                          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                          <div class="mt-1 relative">
                            <input v-model="registerForm.password"  ref="passwordRef" type="password" id="password" name="password" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm">
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

                        <div class="col-span-full">
                          <label for="password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                          <div class="mt-1 relative">
                            <input v-model="registerForm.confirmPassword"  ref="passwordRef" type="password" id="password" name="password" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm">
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

                      <div class="flex justify-between mt-6">
                        <button @click="currentStep--" type="button" class="w-1/3 mt-6 bg-gray-300 border border-transparent rounded-full shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                          Previous
                        </button>
                        <button type="submit" class="w-1/3 mt-6 bg-green-600 border border-transparent rounded-full shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                          Register
                        </button>
                      </div>

                      <p class="flex justify-start text-sm font-medium text-gray-500 mt-6">
                        Already have an account? &nbsp;<router-link class="text-amber-400 underline" to="/login">Log In</router-link>
                      </p>
                    </form>

                    <form v-show="currentTab === 1 && currentStep === 4" @submit.prevent="submitReg('individual')" class="mt-6">
                      <div class="grid grid-cols-12 gap-y-4 gap-x-4">

                        <div class="col-span-full">
                          <div class="block text-lg font-medium text-gray-500">Continue to register account for?</div>
                        </div>

                        <div v-if="registerForm.firstName" class="col-span-full">
                          <div class="block text-lg font-medium text-gray-500">Name:</div>
                          <div class="mt-2">
                            <p class="text-lg font-normal text-gray-900">{{ registerForm.firstName + " " + registerForm.lastName }}</p>
                          </div>
                        </div>

                        <div v-if="registerForm.idNumber" class="col-span-full">
                          <div class="block text-lg font-medium text-gray-500">ID Number:</div>
                          <div class="mt-2">
                            <p class="text-lg font-normal text-gray-900">{{ registerForm.idNumber }}</p>
                          </div>
                        </div>

                        <div v-if="registerForm.kraPin" class="col-span-full">
                          <div class="block text-lg font-medium text-gray-500">KRA Pin:</div>
                          <div class="mt-2">
                            <p class="text-lg font-normal text-gray-900">{{ registerForm.kraPin }}</p>
                          </div>
                        </div>

                        <div v-if="registerForm.phoneNumber" class="col-span-full">
                          <div class="block text-lg font-medium text-gray-500">We will send you a SMS with a verification code (OTP) on:</div>
                          <div class="mt-2 flex items-center justify-between">
                            <p class="text-lg font-normal text-gray-900">{{ registerForm.phoneNumber }}</p>
                            <div class="flex items-center space-x-4">
                              <p class="text-xs font-semibold text-blue-titleBlue">Change Phone Number</p>
                              <div class="flex text-xs font-semibold items-center text-blue-titleBlue">
                                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                <span class="-ml-1">_</span>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>

                      <div class="flex justify-between mt-6">
                        <button @click="currentStep--" type="button" class="w-1/3 mt-6 bg-gray-300 border border-transparent rounded-full shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                          Previous
                        </button>
                        <button type="submit" class="w-1/3 mt-6 bg-green-600 border border-transparent rounded-full shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                          Continue
                        </button>
                      </div>

                      <p class="flex justify-start text-sm font-medium text-gray-500 mt-6">
                        Already have an account? &nbsp;<router-link class="text-amber-400 underline" to="/login">Log In</router-link>
                      </p>
                    </form>

                    <!--end of individuals' forms-->

                    <!--start of businesses' forms-->

                    <form v-show="currentTab === 2 && currentStep === 1" @submit.prevent="submitReg('business')" class="mt-6">

                      <div class="grid grid-cols-12 gap-y-6 gap-x-4">
                        <div class="col-span-full">
                          <label for="business-name" class="block text-sm font-medium text-gray-700">Business Name</label>
                          <div class="mt-1">
                            <input v-model="registerForm.businessName" type="text" id="business-name" name="business-name" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm">
                          </div>
                        </div>

                        <div class="col-span-full">
                          <label for="kra-pin" class="block text-sm font-medium text-gray-700">Enter your organisation KRA PIN</label>
                          <div class="mt-1">
                            <input @input="registerForm.kraPin = registerForm.kraPin.toUpperCase()" v-model="registerForm.kraPin" type="text" id="kra-pin" name="kra-pin" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm">
                          </div>
                        </div>

                        <div class="col-span-full">
                          <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
                          <div class="mt-1">
                            <input v-model="registerForm.phoneNumber" type="number" id="phone" name="phone" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm">
                          </div>
                        </div>
                      </div>

                      <button type="submit" class="w-1/3 mt-6 bg-green-600 border border-transparent rounded-full shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        Next
                      </button>

                      <p class="flex justify-start text-sm font-medium text-gray-500 mt-6">
                        Already have an account? &nbsp;<router-link class="text-amber-400 underline" to="/login">Log In</router-link>
                      </p>
                    </form>

                    <form v-show="currentTab === 2 && currentStep === 2" @submit.prevent="submitReg('business')" class="mt-6">
                      <div class="grid grid-cols-12 gap-y-4 gap-x-4">

                        <div class="col-span-full">
                          <div class="block text-lg font-medium text-gray-500">Continue to register account for?</div>
                        </div>

                        <div class="col-span-full">
                          <div class="block text-lg font-medium text-gray-500">Business Name:</div>
                          <div class="mt-2">
                            <p class="text-lg font-normal text-gray-900">Mimo Branding & Supplies Ltd</p>
                          </div>
                        </div>

                        <div class="col-span-full">
                          <div class="block text-lg font-medium text-gray-500">KRA Pin:</div>
                          <div class="mt-2">
                            <p class="text-lg font-normal text-gray-900">{{ registerForm.kraPin }}</p>
                          </div>
                        </div>

                        <hr class="bg-gray-300 h-0.5 col-span-full">

                        <div class="col-span-full">
                          <label for="citizen" class="block text-sm font-medium text-gray-700">Citizenship</label>
                          <div class="mt-1 relative">
                            <input :value="registerForm.citizenship" disabled type="text" id="citizen" name="citizen" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm">
                            <div class="absolute inset-y-0 right-0 flex items-center">
                              <hr class="rotate-90 h-0.5 bg-gray-500 w-5">
                              <label for="currency" class="sr-only">Citizenship</label>
                              <select v-model="registerForm.citizenship" id="currency" name="currency" class="focus:ring-amber-500 focus:border-amber-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                                <option value="Kenyan">CITIZEN</option>
                                <option value="Other">OTHER</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div class="col-span-full">
                          <label for="idNumber" class="block text-sm font-medium text-gray-700">Enter your ID Serial Number if you are the appointed representative/agent</label>
                          <div class="mt-1">
                            <input v-model="registerForm.idNumber" type="number" id="idNumber" name="idNumber" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm">
                          </div>
                        </div>

                      </div>

                      <div class="flex justify-between mt-4">
                        <button @click="currentStep--" type="button" class="w-1/3 mt-6 bg-gray-300 border border-transparent rounded-full shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                          Previous
                        </button>
                        <button type="submit" class="w-1/3 mt-6 bg-green-600 border border-transparent rounded-full shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                          Continue
                        </button>
                      </div>

                      <p class="flex justify-start text-sm font-medium text-gray-500 mt-6">
                        Already have an account? &nbsp;<router-link class="text-amber-400 underline" to="/login">Log In</router-link>
                      </p>
                    </form>

                    <!--end of businesses' forms-->

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
