import axios from "axios";

export const instanceApi = axios.create({
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})


export const API = {
    signIn({username, password}) {

        return instanceApi.post('/login', 
        {
            username, password
        },
        {
            headers: {
                'Content-Type': "application/x-www-form-urlencoded",
            }
        })
    },
    signUp() {
        return instanceApi.post('/')
    },
    getUser() {
        return instanceApi.get('/user')
    }
}