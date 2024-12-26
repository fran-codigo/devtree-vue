import { ref } from 'vue'
import { defineStore } from 'pinia'
import AuthAPI from '@/api/AuthAPI'

export const useUserStore = defineStore('user', () => {
  const user = ref({})

  async function getUser() {
    try {
      const { data } = await AuthAPI.getUser()
      user.value = data
    } catch (error) {
      console.log(error)
    }
  }

  return {
    user,
    getUser,
  }
})
