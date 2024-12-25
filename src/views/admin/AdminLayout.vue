<script setup>
import NavigationTabs from '@/components/admin/NavigationTabs.vue'
</script>

<template>
  <header class="bg-slate-800 py-5">
    <div class="mx-auto max-w-5xl flex flex-col md:flex-row items-center md:justify-between">
      <div class="w-full p-5 lg:p-0 md:w-1/3">
        <img src="/logo.svg" class="w-full block" />
      </div>
      <div class="md:w-1/3 md:flex md:justify-end">
        <button
          class="bg-lime-500 p-2 text-slate-800 uppercase font-black text-xs rounded-lg cursor-pointer"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  </header>

  <div class="bg-gray-100 min-h-screen py-10">
    <main class="mx-auto max-w-5xl p-10 md:p-0">
      <NavigationTabs />
      <div class="flex justify-end">
        <RouterLink
          class="font-bold text-right text-slate-800 text-2xl"
          target="_blank"
          rel="noreferrer noopener"
          :to="{ name: 'profile' }"
        >
          Visitar Mi Perfil
        </RouterLink>
      </div>

      <div class="flex flex-col md:flex-row gap-10 mt-10">
        <div class="flex-1">
          <RouterView />
        </div>
        <div class="w-full md:w-96 bg-slate-800 px-5 py-10 space-y-6"></div>
      </div>
    </main>
  </div>
</template>
