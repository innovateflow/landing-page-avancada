<template>
  <div class="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden transition-all duration-300 hover:border-primary-500/50">
    <!-- Header do Card -->
    <div 
      class="p-6 cursor-pointer flex items-center justify-between"
      @click="toggleExpanded"
    >
      <div class="flex items-center gap-4">
        <!-- Número do módulo -->
        <div class="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          {{ numero }}
        </div>
        
        <!-- Conteúdo principal -->
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-2">
            <h3 class="text-xl font-semibold text-white">{{ titulo }}</h3>
            <span class="px-3 py-1 bg-primary-500 text-white text-sm rounded-full font-medium">
              {{ status }}
            </span>
            <span class="text-gray-400 text-sm">{{ modulosCount }}</span>
          </div>
          <p class="text-gray-300">{{ descricao }}</p>
        </div>
      </div>
      
      <!-- Ícone de expansão -->
      <div class="text-gray-400 transition-transform duration-300" :class="{ 'rotate-180': isExpanded }">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
    
    <!-- Conteúdo expansível -->
    <div 
      class="overflow-hidden transition-all duration-300"
      :class="isExpanded ? 'max-h-screen' : 'max-h-0'"
    >
      <div class="px-6 pb-6 space-y-4">
        <div 
          v-for="(modulo, index) in modulos" 
          :key="index"
          class="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg"
        >
          <!-- Ícone de check -->
          <div class="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
            <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
          
          <div>
            <h4 class="text-white font-medium mb-1">{{ modulo.titulo }}</h4>
            <p class="text-gray-400 text-sm">{{ modulo.descricao }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  numero: {
    type: String,
    required: true
  },
  titulo: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  modulosCount: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  modulos: {
    type: Array,
    required: true
  }
})

const isExpanded = ref(false)

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}
</script>