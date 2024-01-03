<template>
    <div class="relative inline-block text-left">
      <div @click="toggleDropdown" class="cursor-pointer p-3 hover:bg-slate-50 hover:rounded-full transition ease-in-out duration-150 flex flex-row">
        <img src="~/assets/content/thumbnail.png" alt="User Profile" class="w-8 min-w-8 h-8 rounded-full thumbnail">
        <button class="rounded-full text-gray-500 button">
          <i class="material-icons">expand_more</i>
        </button>
      </div>
      <div v-if="isDropdownOpen"
        class="absolute z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg left-0 ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="py-1">
          <NuxtLink to="/dashboard" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</NuxtLink>
          <NuxtLink to="/profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</NuxtLink>
          <span @click="logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Log Out</span>
        </div>
      </div>
    </div>
  </template>

<script setup>
import { useAuthStore } from "~/store/authentication";

const isDropdownOpen = ref(false)
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const router = useRouter();
const { logUserOut } = useAuthStore();
const logout = () => {
  logUserOut();
  router.push("/");
}
</script>

<style scoped>
</style>