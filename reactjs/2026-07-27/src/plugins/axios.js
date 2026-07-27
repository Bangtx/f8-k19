import axios from "axios";

const API_URL = 'https://fakestoreapi.com'

const api = axios.create({
  baseURL: API_URL
})

// api.interceptors.request.use(
//   function (config) {
//     const localStorage = 'fake token'
//
//     config.headers.authorization = `Bearer ${localStorage}`
//
//     // Do something before request is sent
//     return config;
//   }
// )

export default api