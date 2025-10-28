<template>
  <div class="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-orange-500/30 overflow-hidden transition-all duration-300 hover:border-orange-500/50 relative">
    <!-- Ribbon "Em Gravação" - Versão menor -->
    <div class="absolute top-0 right-0 w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-orange-500 border-t-[25px] border-t-orange-500"></div>
    
    <!-- Header do Card -->
    <div 
      class="p-6 cursor-pointer flex items-center justify-between"
      @click="toggleExpanded"
    >
      <div class="flex items-center gap-4">
        <!-- Número do módulo -->
        <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          {{ numero }}
        </div>
        
        <!-- Conteúdo principal -->
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-2">
            <h3 class="text-xl font-semibold text-white">{{ titulo }}</h3>
            <span class="px-3 py-1 bg-orange-500 text-white text-sm rounded-full font-medium">
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
        <!-- Aviso de conteúdo em produção -->
        <div class="flex items-center gap-3 p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
          <div class="w-5 h-5 text-orange-500">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div>
            <h4 class="text-orange-400 font-medium mb-1">Conteúdo sendo produzido - Disponível em breve!</h4>
          </div>
        </div>
        
        <!-- Módulos futuros -->
        <div 
          v-for="(modulo, index) in modulos" 
          :key="index"
          class="flex items-start gap-3 p-4 bg-gray-800/30 rounded-lg opacity-75"
        >
          <!-- Ícone de relógio -->
          <div class="w-5 h-5 bg-orange-500/50 rounded-full flex items-center justify-center mt-0.5">
            <svg class="w-3 h-3 text-orange-300" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
            </svg>
          </div>
          
          <div>
            <h4 class="text-gray-300 font-medium mb-1">{{ modulo.titulo }}</h4>
            <p class="text-gray-500 text-sm">{{ modulo.descricao }}</p>
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