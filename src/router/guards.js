import AuthAPI from '@/api/AuthAPI'

export async function authGuard(to, from, next) {
  const requiresAuth = to.matched.some((url) => url.meta.requiresAuth)

  if (requiresAuth) {
    try {
      await AuthAPI.getUser()
      next()
    } catch (error) {
      next({ name: 'login' })
    }
  } else {
    next()
  }
}
