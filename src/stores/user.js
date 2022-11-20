import { API } from '@/api'
import { defineStore } from 'pinia'

export default defineStore('user', {
    state: () => {
        return {
            user: null,
        }
    },
    actions: {
        getUser() {
            return new Promise(resolve => {
                API.getUser().then(response => {
                    this.user = response.data
                    resolve(true)
                })
            })
        },
    }
})