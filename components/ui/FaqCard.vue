<template>
  <div class="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden transition-all duration-300 hover:border-primary-500/50">
    <!-- Header da pergunta -->
    <div 
      class="p-6 cursor-pointer flex items-center justify-between"
      @click="toggleExpanded"
    >
      <div class="flex-1">
        <h3 class="text-lg font-semibold text-white pr-4">{{ pergunta }}</h3>
      </div>
      
      <!-- Ícone de expansão -->
      <div class="text-gray-400 transition-transform duration-300 flex-shrink-0" :class="{ 'rotate-180': isExpanded }">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
    
    <!-- Resposta expansível -->
    <div 
      class="overflow-hidden transition-all duration-300"
      :class="isExpanded ? 'max-h-screen' : 'max-h-0'"
    >
      <div class="px-6 pb-6">
        <div class="pt-2 border-t border-gray-700">
          <p class="text-gray-300 leading-relaxed mt-4">{{ resposta }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Props do componente
const props = defineProps({
  pergunta: {
    type: String,
    required: true
  },
  resposta: {
    type: String,
    required: true
  }
})

// Estado local
const isExpanded = ref(false)

// Métodos
const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}
</script>