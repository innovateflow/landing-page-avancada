<template>
  <div class="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-primary-500 transition-all duration-300 hover:transform hover:scale-105 group">
    <!-- Ícone -->
    <div class="mb-6">
      <div class="w-16 h-16 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 group-hover:border-primary-500/40 transition-all duration-300">
        <div class="w-8 h-8" v-html="iconSVG"></div>
      </div>
    </div>
    
    <!-- Título -->
    <h3 class="text-xl font-semibold text-white mb-4">{{ titulo }}</h3>
    
    <!-- Descrição -->
    <p class="text-gray-400 leading-relaxed">
      {{ descricao }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  titulo: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    required: true
  }
})

const iconSVG = computed(() => getIconSVG(props.tipo))

// Componente de ícone baseado no tipo
const iconComponent = computed(() => {
  const icons = {
    gestao: 'svg',
    chat: 'svg', 
    delivery: 'svg',
    saude: 'svg',
    financeiro: 'svg',
    ecommerce: 'svg',
    educacional: 'svg',
    social: 'svg'
  }
  
  // Retorna SVG inline baseado no tipo
  return {
    template: getIconSVG(props.icone)
  }
})

function getIconSVG(tipo) {
  const svgs = {
    gestao: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path>
    </svg>`,
    chat: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8m0 0V6a2 2 0 00-2-2H7a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586"></path>
    </svg>`,
    delivery: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path>
    </svg>`,
    saude: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
    </svg>`,
    financeiro: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
    </svg>`,
    ecommerce: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L6 5H3m4 8v6a2 2 0 002 2h6a2 2 0 002-2v-6m-10 4h10"></path>
    </svg>`,
    educacional: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l-6.16-3.422a12.083 12.083 0 00-.665 6.479A11.952 11.952 0 0012 20.055"></path>
    </svg>`,
    social: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3 5.197V9a3 3 0 00-3-3H9m1.5-2-3 3 3 3"></path>
    </svg>`
  }
  
  return svgs[tipo] || svgs.gestao
}
</script>