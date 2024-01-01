<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
      <h1 class="text-xl mt-4">Sign up to Beemo</h1>
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
          <label for="email" class="block text-left text-gray-600">Email:</label>
          <input
            type="text"
            id="email"
            v-model="email"
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

        <div class="mt-4">
          <label for="confirm-password" class="block text-left text-gray-600">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            v-model="confirmPassword"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>  

        <div class="mt-4 flex justify-start">
            <input type="checkbox" class="mt-2 w-4 h-4 checkbox"/>
            <div class="ml-2 flex justify-start items-start text-left">
                <label class="text-gray-600">I have read and agree to the <span class="cursor-pointer text-blue-500 text-base mt-4">Beemo Terms and Conditions</span></label>
            </div>
        </div>

        <div class="flex justify-center mt-6">
          <button type="submit" class="btn-secondary">
            Sign Up
          </button>
        </div>
      </form>

      <div class="flex border-t justify-center items-center mt-4 mb-4">
        <NuxtLink to="/account-recovery" class="mt-4">
            <span class="cursor-pointer text-blue-500 text-base">Recover your existing account instead</span>
        </NuxtLink>
      </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>