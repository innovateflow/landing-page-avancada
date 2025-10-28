<template>
  <div class="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700 p-6 hover:border-primary-500/50 transition-all duration-300 flex flex-col h-full">
    <!-- Header com plataforma -->
    <div class="flex items-center justify-between mb-4">
      <div class="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136C4.495 20.455 12 20.455 12 20.455s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      </div>
      <span class="text-gray-300 font-medium">{{ plataforma }}</span>
    </div>
    
    <!-- Conteúdo do depoimento -->
    <blockquote class="text-gray-100 leading-relaxed flex-1 text-lg italic">
      "{{ conteudo }}"
    </blockquote>
    
    <!-- Footer com autor - sempre na parte inferior -->
    <div class="flex items-center gap-3 mt-6">
      <div class="w-12 h-12 rounded-full overflow-hidden">
        <img 
          v-if="avatar" 
          :src="avatar" 
          :alt="autor"
          class="w-full h-full object-cover"
        />
        <div 
          v-else
          class="w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-lg"
        >
          {{ iniciais }}
        </div>
      </div>
      <div class="flex-1">
        <h4 class="text-white font-semibold">{{ autor }}</h4>
        <p class="text-gray-400 text-sm">{{ origem }}</p>
      </div>
      <div>
        <svg class="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v2a1 1 0 0 0 1 1h6.5l1-1.34.5-.66H14z"/>
          <path d="M23 9V5a3 3 0 0 0-3-3l-4 9v2a1 1 0 0 0 1 1h6.5l1-1.34.5-.66H23z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  plataforma: {
    type: String,
    required: true
  },
  conteudo: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  origem: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: false
  }
})

const iniciais = computed(() => {
  return props.autor
    .split(' ')
    .map(nome => nome[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})
</script>