<script setup lang="ts">
const { data: obsidianNav } = await useAsyncData('obsidianNav', () => queryCollectionNavigation('obsidian'))
const { data: obsidian } = await useAsyncData('obsidianNav', () => queryCollection('obsidian'))
</script>

<template>
  <div>
    <h1>Popo</h1>
    <h2>Navigation:</h2>
    <pre>{{ obsidianNav }}</pre>
    <h2>Content:</h2>
    <pre>{{ obsidian }}</pre>
  </div>
</template>
