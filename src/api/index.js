import axios from "axios";

export const instanceApi = axios.create({
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})
