<template>
    <div>
      <Head>
        <Title>Beemo | Budget {{ id }}</Title>
      </Head>
        <p>Budget for {{ id }}</p>
    </div>
</template>

<script setup>
  const { id } = useRoute().params

  if (isNaN(id)) {
    throw createError( { statusCode: 404, statusMessage: 'Budget not found', fatal: true})
  }

  definePageMeta({
    layout: 'budgets'
  })
</script>

<style scoped>

</style>