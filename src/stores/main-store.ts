import { defineStore } from 'pinia'

interface MainState {
    user: Record<string, any> | null
    isLoggedIn: boolean
}

export const useMainStore = defineStore('main', {
    state: (): MainState => ({
        user: null,
        isLoggedIn: false,
    }),
    getters: {
        isReady(state) {
            return !!state.user
        },
    },
    actions: {
        initialize() {
            if (this.isReady) return
            this.user = {
                id: 1,
                firstName: 'Jane',
                lastName: 'Doe',
            }
            this.isLoggedIn = true
        },
        logOut() {
            // delete token from local storage
            // clear user object
            // set isLoggedIn to false
            // logout

            this.user = null
            this.isLoggedIn = false
            window.location.reload()
        }
    },
})
