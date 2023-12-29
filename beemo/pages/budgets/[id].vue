<template>
    <div>
        <p>Budget for {{ id }}</p>
    </div>
</template>

<script setup>
  const { id } = useRoute().params

  definePageMeta({
    layout: 'budgets'
  })
</script>

<style scoped>

</style>