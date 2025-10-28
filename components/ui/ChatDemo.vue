<template>
  <div class="w-full max-w-4xl h-64 bg-[#2a2a2a] rounded-xl border-2 border-secondary-500 overflow-hidden shadow-2xl">
    <!-- Interface estilo VS Code com borda roxa -->
    <div class="h-full flex flex-col">
      <!-- Header com ícone e Autopilot -->
      <div class="bg-[#2a2a2a] p-4 flex items-center justify-between">
        <!-- Lado esquerdo com ícone -->
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-3">
            <span class="text-secondary-500 text-xl font-medium">Vibe Coding</span>
          </div>
          <div class="flex items-center space-x-3 text-gray-400">
            <span class="text-2xl">#</span>
            <div class="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
              <div class="w-4 h-4 border-2 border-gray-400 rounded-sm"></div>
            </div>
          </div>
        </div>
        
        <!-- Lado direito com Autopilot e seta -->
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-3">
            <span class="text-white text-lg font-medium">Autopilot</span>
            <!-- Toggle switch -->
            <div class="relative">
              <div class="w-12 h-6 bg-secondary-500 rounded-full flex items-center justify-end pr-1">
                <div class="w-5 h-5 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <!-- Seta para cima -->
          <div class="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- Campo de input -->
      <div class="bg-[#2a2a2a] p-4 border-t border-gray-700">
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-3 text-gray-400">
            <span class="text-xl">#</span>
            <div class="w-6 h-6 bg-yellow-500 rounded"></div>
          </div>
          <div class="flex-1 bg-[#1e1e1e] rounded-lg px-4 py-3 border border-gray-600">
            <span class="text-white text-base">{{ texto }}<span class="animate-blink text-white">|</span></span>
          </div>
          <div class="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
            <div class="w-4 h-4 border border-gray-400 rounded-sm"></div>
          </div>
        </div>
      </div>

      <!-- Área de resposta/geração de código -->
      <div class="bg-[#1e1e1e] p-4 border-t border-gray-700">
        <div class="flex items-center space-x-3 mb-3">
          <div class="w-6 h-6 bg-secondary-500 rounded-lg flex items-center justify-center">
            <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
          <span class="text-secondary-500 text-sm font-medium animate-pulse">● Gerando código...</span>
        </div>
        
        <!-- Barra de progresso -->
        <div class="w-full bg-gray-700 rounded-full h-1">
          <div class="bg-secondary-500 h-1 rounded-full animate-progress" style="width: 65%;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Props do componente
defineProps({
  titulo: {
    type: String,
    default: 'Chat com IA'
  },
  texto: {
    type: String,
    default: 'Digite sua mensagem...'
  }
})
</script>

<style scoped>
/* Animação do cursor piscando */
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.animate-blink {
  animation: blink 1s ease-in-out infinite;
}

/* Animação da barra de progresso */
@keyframes progress {
  0% { width: 0%; }
  100% { width: 65%; }
}

.animate-progress {
  animation: progress 3s ease-out infinite;
}

/* Sombra do componente */
.w-full.max-w-md {
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06),
    0 0 0 1px rgba(255, 255, 255, 0.05);
}
</style>