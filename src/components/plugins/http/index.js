import axios from 'axios'
import { apiUrl } from '../../../config'

// allow use http client without Vue instance
export const http = axios.create({
  baseURL: apiUrl
})
