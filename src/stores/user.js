import { defineStore } from 'pinia'

export default defineStore('user', {
    state: () => {
        return {
            user: null,
        }
    },
    actions: {
        getUser(user) {
            this.user = user
        },
    }
})