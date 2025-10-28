<template>
  <button
    class="px-8 py-4 rounded-lg bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-bold text-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2"
  >
    {{ texto }}
  </button>
</template>

<script setup>
defineProps({
  texto: { type: String, required: true }
})
</script>
