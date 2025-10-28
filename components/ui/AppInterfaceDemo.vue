<template>
  <div class="w-full max-w-md aspect-square bg-[#2a3441] rounded-lg border border-gray-600 overflow-hidden shadow-2xl">
    <!-- Janela do Aplicativo -->
    <div class="h-full flex flex-col">
      <!-- Header da janela -->
      <div class="bg-[#323b47] p-2 border-b border-gray-600 flex items-center justify-between">
        <!-- Logo/Ícone verde -->
        <div class="flex items-center space-x-3">
          <div class="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
            <div class="w-3 h-3 bg-white rounded-sm"></div>
          </div>
          <!-- Botões nav -->
          <div class="flex space-x-2">
            <div class="w-8 h-4 bg-gray-500 rounded"></div>
            <div class="w-8 h-4 bg-gray-500 rounded"></div>
            <div class="w-8 h-4 bg-gray-500 rounded"></div>
          </div>
        </div>
        <!-- Botão direito verde -->
        <div class="w-16 h-5 bg-green-500 rounded"></div>
      </div>

      <!-- Layout principal com sidebar -->
      <div class="flex-1 flex">
        <!-- Sidebar esquerda -->
        <div class="w-1/3 bg-[#2a3441] p-3 border-r border-gray-600">
          <!-- Elemento azul lateral -->
          <div class="w-2 h-16 bg-blue-500 rounded-r mb-3"></div>
          
          <!-- Conteúdo da sidebar -->
          <div class="space-y-2">
            <div class="w-full h-3 bg-gray-500 rounded"></div>
            <div class="w-4/5 h-3 bg-gray-600 rounded"></div>
            <div class="w-3/4 h-3 bg-gray-600 rounded"></div>
          </div>

          <!-- Botões -->
          <div class="flex space-x-1 mt-4">
            <div class="w-8 h-5 bg-gray-600 rounded"></div>
            <div class="w-8 h-5 bg-gray-600 rounded"></div>
          </div>
        </div>

        <!-- Área principal -->
        <div class="flex-1 p-3 space-y-3">
          <!-- Área destacada central verde -->
          <div class="relative">
            <div class="w-full h-20 bg-[#1a4a3a] border-2 border-dashed border-green-500 rounded flex flex-col items-center justify-center animate-pulse-subtle">
              <div class="w-6 h-4 bg-green-500 rounded mb-1 animate-bounce-gentle"></div>
              <div class="w-16 h-2 bg-green-400 rounded animate-width-pulse"></div>
            </div>
          </div>

          <!-- Cards inferiores -->
          <div class="grid grid-cols-3 gap-2">
            <div 
              v-for="(card, index) in cards" 
              :key="card.id"
              :class="['h-14 bg-[#404a57] rounded border border-gray-600 flex flex-col items-center justify-center p-2 transition-all duration-700 ease-in-out', card.highlight ? 'border-green-500 bg-[#2a4a3a]' : '']"
              :style="{ transform: `translateX(${card.offset}px)` }"
            >
              <div :class="['w-4 h-2 rounded mb-1', card.highlight ? 'bg-green-400' : 'bg-gray-400']"></div>
              <div :class="['w-6 h-1 rounded', card.highlight ? 'bg-green-300' : 'bg-gray-500']"></div>
            </div>
          </div>

          <!-- Barra inferior -->
          <div class="w-full h-3 bg-gray-600 rounded mt-2"></div>
          <div class="w-4/5 h-2 bg-gray-700 rounded"></div>

          <!-- Botões inferiores -->
          <div class="flex justify-between items-center mt-2">
            <div class="w-12 h-4 bg-gray-600 rounded"></div>
            <div class="w-12 h-4 bg-green-500 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Componente que simula interface de aplicativo com animação
const cards = ref([
  { id: 1, offset: 0, highlight: false },
  { id: 2, offset: 0, highlight: true },
  { id: 3, offset: 0, highlight: false }
])

let animationInterval = null

const animateCards = () => {
  // Rotaciona as posições dos cards
  const firstCard = cards.value[0]
  cards.value[0] = cards.value[1]
  cards.value[1] = cards.value[2]
  cards.value[2] = firstCard
  
  // Atualiza qual card está destacado
  cards.value.forEach((card, index) => {
    card.highlight = index === 1 // Sempre destaca o card do meio
  })
}

onMounted(() => {
  // Inicia a animação com intervalo de 2.5 segundos
  animationInterval = setInterval(animateCards, 2500)
})

onUnmounted(() => {
  // Limpa o intervalo quando o componente é desmontado
  if (animationInterval) {
    clearInterval(animationInterval)
  }
})
</script>

<style scoped>
/* Adiciona um efeito de brilho sutil */
.w-full.max-w-md {
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06),
    0 0 0 1px rgba(255, 255, 255, 0.05);
}

/* Animações customizadas */
@keyframes pulse-subtle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

@keyframes bounce-gentle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}

@keyframes width-pulse {
  0%, 100% { width: 4rem; }
  50% { width: 3rem; }
}

.animate-pulse-subtle {
  animation: pulse-subtle 3s ease-in-out infinite;
}

.animate-bounce-gentle {
  animation: bounce-gentle 2s ease-in-out infinite;
}

.animate-width-pulse {
  animation: width-pulse 2.5s ease-in-out infinite;
}

/* Transições suaves para os cards */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>