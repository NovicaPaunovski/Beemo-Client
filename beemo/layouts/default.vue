<template>
    <div>
      <header class="shadow-sm bg-white">
          <nav class="container mx-auto p-4 flex justify-between items-center">
              <NuxtLink to="/" class="font-bold flex gap-2 items-center mr-5">
                <img class="w-48 min-w-24" src="../assets/content/logo.svg"/>
              </NuxtLink>
              <ul class="flex gap-4 items-center">
                  <li><NuxtLink to="/"><p class="text-lg">Home</p></NuxtLink></li>
                  <template v-if="authenticated">
                    <li><NuxtLink to="/budgets"><p class="text-lg">Budgets</p></NuxtLink></li>
                  </template>
                  <li class="border-l">
                    <template v-if="!authenticated">
                      <div class="flex">
                        <button class="btn ml-4 max-h-9" @click="() => open()"><p class="whitespace-nowrap">Log In</p></button>
                        <NuxtLink to="/sign-up" class="ml-2">
                          <button class="btn-secondary max-h-9"><p class="whitespace-nowrap">Sign Up</p></button>
                        </NuxtLink>
                      </div>
                    </template>
                    <template v-else>
                      <Dropdown class="ml-2"></Dropdown>
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
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/authentication";
import { ModalsContainer, useModal } from "vue-final-modal";
import LoginModal from "~/components/authentication/LoginModal.vue";
import Dropdown from "~/components/navbar/Dropdown.vue";

const { authenticated } = storeToRefs(useAuthStore());

const { open, close } = useModal({
    component: LoginModal,
    attrs: {
      onConfirm() {
        close()
      },
    },
  })
</script>