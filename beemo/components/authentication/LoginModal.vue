
import type { NuxtLink } from '#build/components';
<template>
    <VueFinalModal 
    class="confirm-modal"
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade">

    <div class="mt-7 max-w-sm mx-auto text-center card">
      <div class="flex justify-between items-center mt-2">
          <h1 class="pl-24 text-xl">Login to Beemo</h1>
          <button
            class="p-1 mr-2 rounded-full text-gray-500 hover:text-black hover:bg-gray-200 transition ease-in-out duration-150"
            @click="emit('confirm')"
            >
              <i class="material-icons mt-1">close</i>
            </button>
        </div>
      <form @submit.prevent="handleLogin" class="mt-7 mx-4 px-4 rounded border-t">
        <template v-if="failed">
            <label class="block text-left text-red-600">Could not log in. Please check your credentials and try again.</label>
          </template>
        <div class="mt-4">
          <label for="username" class="block text-left text-gray-600">Username:</label>
          <input
            type="text"
            id="username"
            v-model="form.username"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div class="mt-4">
          <label for="password" class="block text-left text-gray-600">Password:</label>
          <input
            type="password"
            id="password"
            v-model="form.password"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div class="flex justify-between items-center">
          <div class="mt-2 flex justify-start items-center">
            <input type="checkbox" class="w-4 h-4 checkbox"/>
            <label class="ml-2 text-gray-600">Remember me</label>
          </div>
          <button :disabled="loading" type="submit" class="btn mt-4" :class="{
            'opacity-20 cursor-not-allowed': loading,
          }">
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
import { useAuthStore } from '~/store/authentication';

const { authenticateUser } = useAuthStore();
const { authenticated, loading } = storeToRefs(useAuthStore());

const failed = ref(false);
const form = ref({
  username: '',
  password: ''
})

const handleLogin = async () => {
  await authenticateUser(form.value);

  if (authenticated.value) {
    failed.value = false;
    emit('confirm');
    return;
  }

  failed.value = true;
};

const emit = defineEmits<{
  (e: 'confirm'): void
}>()
</script>

<style scoped>
</style>