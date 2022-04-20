import { defineStore } from 'pinia'
import {MainState, SignInFormType, OtpFormType, RegisterFormType} from '../types'
import {stat} from "fs";

export const useMainStore = defineStore('main', {
    state: (): MainState => ({
        user: null,
        isLoggedIn: false,
    }),
    getters: {
        isReady(state) {
            return !!state.user
        },
        getLoggedInState(state) {
            return state.isLoggedIn
        }
    },
    actions: {
        initialize(): void {
            // if user already exists stop initialization
            if (this.isReady) return
            // check jwt from local storage and fetch user credentials
            // set user state
            // change isLoggedIn state to true

            // this.isLoggedIn = true
        },
        async sendOTP(payload: OtpFormType): Promise<boolean> {
            // send credentials to server
            // update isLoggedIn and add user to user state
            // pop toast notification
            // return boolean if server validated true | false to redirect to profile page
            return new Promise((resolve, reject) => {
                this.isLoggedIn = true
                resolve(true)
            })
        },
        async register(payload: RegisterFormType): Promise<boolean> {
            return new Promise((resolve, reject) => {
                resolve(true)
            })
        },
        async login(payload: SignInFormType): Promise<boolean> {
            // send credentials to server
            // store jwt token to localStorage
            // pop toast notification
            // return boolean if server validated true | false to redirect to verify OTP if user exists
            return new Promise((resolve, reject) => {
                this.user = {
                    id: 1,
                    firstName: 'Jane',
                    lastName: 'Doe',
                }
                resolve(true)
            })
        },
        logOut(): boolean {
            // delete token from local storage
            // clear user object
            // set isLoggedIn to false
            // clear jwt token from localstorage
            // pop toast notification
            // return boolean response to trigger redirect to login page
            this.user = null
            this.isLoggedIn = false
            return true
        }
    },
})
