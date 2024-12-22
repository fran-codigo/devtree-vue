<script setup>
import { inject } from 'vue'
import AuthAPI from '@/api/AuthAPI'

const toast = inject('toast')

const handleSubmit = async (formData) => {
  try {
    const { data } = await AuthAPI.login(formData)
    localStorage.setItem('AUTH_TOKEN', data)
  } catch (error) {
    toast.open({
      message: error.response.data.error,
      type: 'error',
    })
  }
}
</script>

<template>
  <h1 class="text-title">Iniciar Sesión</h1>

  <FormKit
    id="login-form"
    type="form"
    :actions="false"
    incomplete-message="No se pudo enviar, revisa los mensajes"
    @submit="handleSubmit"
    classes="bg-white px-5 py-20 rounded-lg space-y-10 mt-10"
  >
    <FormKit
      type="email"
      label="Correo Electrónico"
      name="email"
      placeholder="Tu correo"
      validation="required|email"
      :validation-messages="{
        required: 'El correo es obligatorio',
        email: 'El correo no es válido',
      }"
    />

    <FormKit
      type="password"
      label="Contraseña"
      name="password"
      placeholder="Tu contraseña"
      validation="required"
      :validation-messages="{
        required: 'La contraseña es obligatoria',
      }"
    />

    <FormKit type="submit">Iniciar Sesión</FormKit>
  </FormKit>

  <nav class="mt-10">
    <RouterLink :to="{ name: 'register' }" class="text-center text-white text-lg block"
      >¿No tienes una cuenta? Crear cuenta</RouterLink
    >
  </nav>
</template>
