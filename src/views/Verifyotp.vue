<script setup lang="ts">
import { ref, watch } from "vue"
import { useMainStore } from "../stores/main-store"
import { pinia } from "../stores"
import { OtpFormType } from "../types"
import { useRouter } from "vue-router"
const mainStore = useMainStore(pinia)

const router = useRouter()

// if mainStore.getLoggedInState state is true redirect to profile always

if (mainStore.getLoggedInState) {
  router.push("/profile")
}

const countdown = ref(<number> 115)

const resendOTP = ref(<boolean> false)

const otpForm = ref(<OtpFormType> {})

let theInterval: any = null

const countdownInterval = (): void => {
  theInterval = setInterval(() => {
    countdown.value--
  }, 1000)
}

countdownInterval()

watch(countdown, () => {
  if (countdown.value === 0 && theInterval) {
    clearInterval(theInterval)
    resendOTP.value = true
  }
})

const doResendOTP = (): void => {
  clearInterval(theInterval)
  countdown.value = 115
  theInterval = null
  resendOTP.value = false
  countdownInterval()
}

const verifyOTP = async () => {
  try {
    const response = await mainStore.sendOTP(otpForm.value)
    if (response) {
      await router.push('/profile')
    }
  } catch (e: any) {
    console.log(e.message)
  } finally {
    clearInterval(theInterval)
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
                  <h1 class="text-xl text-blue-titleBlue font-medium tracking-tight">Verify OTP Code</h1>
                  <p class="text-gray-900 font-light text-xs pt-2">We have sent you an sms with a verification code (OTP)<br> on:</p>
                </div>
              </div>
              <div class="relative py-4 px-4 sm:py-6 sm:px-6 lg:px-8 lg:max-w-5xl lg:pb-8 lg:pt-4 lg:grid lg:grid-cols-2">
                <div class="lg:pl-8">
                  <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">

                    <form @submit.prevent="verifyOTP" class="mt-6">
                      <div class="grid grid-cols-12 gap-y-6 gap-x-4">
                        <div class="col-span-full">
                          <div class="block text-sm font-medium text-gray-700 relative">
                            072*****89
                            <div class="absolute inset-y-0 right-0 flex items-center">
                              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div class="col-span-full">
                          <label for="id-number" class="block text-sm font-medium text-gray-700">Enter Verification Code</label>
                          <div class="mt-1">
                            <input type="text" id="id-number" name="id-number" class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm">
                          </div>
                        </div>

                      </div>

                      <button v-if="!resendOTP" type="submit" class="w-1/3 mt-6 flex items-center bg-green-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg>
                        Verify Code
                      </button>

                      <button v-else @click="doResendOTP" type="button" class="w-1/3 mt-6 flex items-center bg-green-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                        </svg>
                        Resend OTP
                      </button>
                      <p class="font-light text-xs mt-2">Resend OTP after: {{ countdown }} sec</p>
                      <p class="flex justify-start text-sm font-medium text-gray-500 mt-4">
                        <router-link class="text-gray-800 underline" to="/login">Click to go back</router-link>
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
