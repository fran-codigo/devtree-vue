import api from '@/config/axios'

export default {
  register(data) {
    return api.post('/auth/register', data)
  },
  login(data) {
    return api.post('/auth/login', data)
  },
  getUser() {
    const token = localStorage.getItem('AUTH_TOKEN')
    return api.get('/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },
}
