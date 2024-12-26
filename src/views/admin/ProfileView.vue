<script setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const handleSubmit = async (formData) => {
  userStore.updateProfile(formData)
}
</script>

<template>
  <FormKit
    id="profile-form"
    type="form"
    :actions="false"
    incomplete-message="No se pudo enviar, revisa los mensajes"
    :value="userStore.user"
    @submit="handleSubmit"
    classes="bg-white p-10 rounded-lg space-y-5"
  >
    <FormKit
      type="text"
      label="Handle"
      name="handle"
      placeholder="Escribe un handle"
      validation="required"
      v-model="userStore.user.handle"
      :validation-messages="{ required: 'El handle es obligatorio' }"
    />

    <FormKit
      type="text"
      label="Descripción"
      name="description"
      placeholder="Tu descripción"
      v-model="userStore.user.description"
    />

    <FormKit type="file" label="Imagen" name="image" accept=".png,.jpg.jpeg" />

    <FormKit type="submit">Guardar Cambios</FormKit>
  </FormKit>
</template>
