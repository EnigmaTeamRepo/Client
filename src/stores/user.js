import { defineStore } from 'pinia'

export default defineStore('user', {
    state: () => {
        return {
            user: null,
        }
    },
    actions: {
        getUser(user) {
            return new Promise(resolve => {
                this.user = user
                resolve(true)
            })
        },
    }
})