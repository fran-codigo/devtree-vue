<script setup>
import { FormKit } from '@formkit/vue'
</script>

<template>
  <h1 class="text-title">Crear Cuenta</h1>

  <FormKit
    type="form"
    :actions="false"
    incomplete-message="No se pudo enviar, revisa las notificaciones"
    classes="bg-white px-5 py-20 rounded-lg space-y-10 mt-10"
  >
    <FormKit
      type="text"
      label="Nombre"
      name="name"
      placeholder="Escribe tu nombre"
      validation="required"
      :validation-messages="{ required: 'El nombre es obligatorio' }"
    />

    <FormKit
      type="text"
      label="Handle"
      name="handle"
      placeholder="Escribe un handle"
      validation="required"
      :validation-messages="{ required: 'El handle es obligatorio' }"
    />

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
      validation="required|length:8"
      :validation-messages="{
        required: 'La contraseña es obligatoria',
        length: 'La contraseña debe tener al menos 8 caracteres',
      }"
    />

    <FormKit
      type="password"
      label="Repetir Contraseña"
      name="password_confirm"
      placeholder="Repite tu contraseña"
      validation="required|confirm"
      :validation-messages="{
        required: 'La contraseña es obligatoria',
        confirm: 'Las contraseñas no son iguales',
      }"
    />

    <FormKit type="submit">Crear Cuenta</FormKit>
  </FormKit>

  <nav class="mt-10">
    <RouterLink :to="{ name: 'login' }" class="text-center text-white text-lg block"
      >¿Ya tienes una cuenta? Inicia sesión</RouterLink
    >
  </nav>
</template>
