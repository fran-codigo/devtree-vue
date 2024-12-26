import api from '@/config/axios'

export default {
  register(data) {
    return api.post('/auth/register', data)
  },
  login(data) {
    return api.post('/auth/login', data)
  },
  getUser() {
    return api.get('/user')
  },
  updateProfile(data) {
    return api.patch('/user', data)
  },
}
