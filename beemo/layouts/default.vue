<template>
    <div>
      <header class="shadow-sm bg-white">
          <nav class="container mx-auto p-4 flex justify-between items-center">
              <NuxtLink to="/" class="font-bold flex gap-2 items-center"><img class="w-48" src="../assets/content/logo.svg"/></NuxtLink>
              <ul class="flex gap-4 items-center">
                  <li><NuxtLink to="/"><p>Home</p></NuxtLink></li>
                  <li><NuxtLink to="/about"><p>About</p></NuxtLink></li>
                  <li><NuxtLink to="/budgets"><p>Budgets</p></NuxtLink></li>
                  <li class="border-l">
                    <template v-if="!isAuthenticated">
                      <button class="btn ml-4" @click="() => open()">Login</button>
                      <NuxtLink to="/sign-up">
                        <button class="btn-secondary ml-2">Sign Up</button>
                      </NuxtLink>
                    </template>
                    <template v-else>
                    <!-- Render user profile thumbnail here -->
                    <img src="../assets/content/logo.svg" alt="User Profile" class="w-8 h-8 rounded-full ml-4">
                    </template>
                  </li>
              </ul>
          </nav>
      </header>
      <ModalsContainer />
      <div class="container mx-auto p-4">
        <slot />
      </div>
      
      <footer>

      </footer>
  </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
</style>

<script setup>
import { useMainStore } from "~/store";
import { ModalsContainer, useModal } from "vue-final-modal";
import LoginModal from "~/components/authentication/LoginModal.vue";

const { open, close } = useModal({
    component: LoginModal,
    attrs: {
      onConfirm() {
        close()
      },
    },
  })

const store = useMainStore();

const isAuthenticated = computed(() => {
  return store.isAuthenticated;
});
</script>