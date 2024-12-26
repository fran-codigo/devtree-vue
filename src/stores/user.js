import { onMounted, ref, inject } from 'vue'
import { defineStore } from 'pinia'
import AuthAPI from '@/api/AuthAPI'

export const useUserStore = defineStore('user', () => {
  const toast = inject('toast')
  const user = ref({})

  onMounted(() => {
    getUser()
  })

  async function getUser() {
    try {
      const { data } = await AuthAPI.getUser()
      user.value = data
    } catch (error) {
      console.log(error)
    }
  }

  async function updateProfile(formData) {
    try {
      const { data } = await AuthAPI.updateProfile(formData)
      toast.open({
        message: data,
        type: 'success',
      })
      getUser()
    } catch (error) {
      getUser()
      toast.open({
        message: error.response.data.error,
        type: 'error',
      })
    }
  }

  return {
    user,
    getUser,
    updateProfile,
  }
})
