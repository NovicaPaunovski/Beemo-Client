
import type { NuxtLink } from '#build/components';
<template>
    <VueFinalModal 
    class="confirm-modal"
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade">

    <div class="mt-7 max-w-sm mx-auto text-center card">
      <h1 class="text-xl mt-4">Login to Beemo</h1>
      <form @submit.prevent="login" class="mt-7 mx-4 px-4 rounded border-t">
        <div class="mt-4">
          <label for="username" class="block text-left text-gray-600">Username:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div class="mt-4">
          <label for="password" class="block text-left text-gray-600">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div class="flex justify-between items-center">
          <div class="mt-2 flex justify-start items-center">
            <input type="checkbox" class="w-4 h-4 checkbox"/>
            <label class="ml-2 text-gray-600">Remember me</label>
          </div>
          <button type="submit" class="btn mt-4">
            Login
          </button>
        </div>

      </form>
      <div class="flex border-t justify-center items-center mt-4 mb-4">
        <NuxtLink to="/account-recovery" class="mt-4" @click="emit('confirm')">
            <span class="cursor-pointer text-blue-500 text-base mt-4">Forgot Password?</span>
        </NuxtLink>
        <NuxtLink to="/sign-up" class="ml-10 mt-4" @click="emit('confirm')">
          <span class="cursor-pointer text-blue-500 text-base">New here? Sign Up</span>
        </NuxtLink>
      </div>
    </div>

    </VueFinalModal>
</template> 

<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';
import { useMainStore } from "~/store";

const store = useMainStore();

const username = ref('');
const password = ref('');

const emit = defineEmits<{
  (e: 'confirm'): void
}>()

const login = () => {
  // Implement your login logic here
  console.log('Logging in with', username.value, password.value);

  // Close the modal after login
  emit('confirm');
};
</script>

<style scoped>
</style>