import api from '@/config/axios'

export default {
  register(data) {
    return api.post('/auth/register', data)
  },
}
