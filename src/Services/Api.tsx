import axios from 'axios'


const api = axios.create({
  baseURL: 'https://develop.egssistemas.com.br/'
})

export default api