import { http } from '../../../components/plugins/http'

// send login data and retrive a new token
export const postLogin = ({ email, password }) =>
  http.post('/auth/login', { email, password })
