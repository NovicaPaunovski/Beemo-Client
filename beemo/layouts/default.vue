<template>
    <div>
      <header class="shadow-sm bg-white">
          <nav class="container mx-auto p-4 flex justify-between items-center">
              <NuxtLink to="/" class="font-bold flex gap-2 items-center"><img class="w-16" src="../assets/content/logo.svg"/><span class="router-link-exact-active">BEEMO</span></NuxtLink>
              <ul class="flex gap-4 align-middle">
                  <li><NuxtLink to="/">Home</NuxtLink></li>
                  <li><NuxtLink to="/about">About</NuxtLink></li>
                  <li><NuxtLink to="/budgets">Budgets</NuxtLink></li>
              </ul>
          </nav>
      </header>

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