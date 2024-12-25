<script setup>
import { useRouter, useRoute } from 'vue-router'
import { BookmarkSquareIcon, UserIcon } from '@heroicons/vue/20/solid'
const tabs = [
  {
    name: 'linktree',
    text: 'LinkTree',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'profile',
    text: 'Perfil',
    icon: UserIcon,
  },
]
const router = useRouter()
const route = useRoute()
</script>

<template>
  <div class="mb-5">
    <div class="sm:hidden">
      <label htmlFor="tabs" class="sr-only"> Select a tab </label>
      <select
        id="tabs"
        name="tabs"
        class="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        @change="router.push({ name: $event.target.value })"
      >
        <option v-for="tab in tabs" :value="tab.name" :key="tab.name">{{ tab.text }}</option>
      </select>
    </div>

    <div class="hidden sm:block">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <RouterLink
            v-for="tab in tabs"
            :key="tab.name"
            :to="{ name: tab.name }"
            class="whitespace-nowrap font-medium sm group inline-flex items-center border-b-2 py-4 px-1 text-xl"
            :class="{ 'border-blue-500 text-blue-500': route.name === tab.name }"
          >
            <component
              :is="tab.icon"
              :class="[
                route.name === tab.name
                  ? 'text-blue-500'
                  : 'text-gray-400 group-hover:text-gray-500',
                '-ml-0.5 mr-2 h-5 w-5',
              ]"
              aria-hidden="true"
            />
            <span>{{ tab.text }}</span>
          </RouterLink>
        </nav>
      </div>
    </div>
  </div>
</template>
