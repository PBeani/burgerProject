import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://beani-burger-app.firebaseio.com/'
})

export default instace