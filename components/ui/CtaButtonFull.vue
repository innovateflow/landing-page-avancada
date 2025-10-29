<template>
  <button 
    class="w-full bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg"
  >
    {{ texto }}
  </button>
</template>

<script setup>
const props = defineProps({
  texto: {
    type: String,
    required: true
  }
})
</script>