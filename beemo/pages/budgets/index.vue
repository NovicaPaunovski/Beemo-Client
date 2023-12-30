<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products" :key="p.id">
                <NuxtLink :to="`/budgets/${p.id}`">{{ p.title }}</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
  useHead({
    title: 'Beemo | Budgets',
    meta: [
        { name: 'description', content: 'Beemo Budgets' }
    ]
  })

  // Fetch data from an API
  const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped>

</style>