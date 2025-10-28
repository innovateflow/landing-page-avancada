<template>
  <div class="w-full max-w-md aspect-square bg-[#2a3441] rounded-lg border border-gray-600 overflow-hidden shadow-2xl">
    <!-- Janela do Aplicativo -->
    <div class="h-full flex flex-col">
      <!-- Header da janela -->
      <div class="bg-[#323b47] p-3 border-b border-gray-600 flex items-center justify-between">
        <!-- Logo/Ícone -->
        <div class="flex items-center space-x-2">
          <div class="w-6 h-6 bg-gray-500 rounded transform rotate-45"></div>
        </div>
        <!-- Botões da janela -->
        <div class="flex space-x-2">
          <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>
        <!-- Botão direito -->
        <div class="w-16 h-6 bg-gray-500 rounded"></div>
      </div>

      <!-- Conteúdo principal -->
      <div class="flex-1 p-4 space-y-4">
        <!-- Barra de navegação/título -->
        <div class="space-y-2">
          <div class="w-24 h-4 bg-gray-500 rounded"></div>
          <div class="w-full h-3 bg-gray-600 rounded"></div>
          <div class="w-3/4 h-3 bg-gray-600 rounded"></div>
        </div>

        <!-- Botões de ação -->
        <div class="flex space-x-2">
          <div class="w-16 h-6 bg-gray-600 rounded"></div>
          <div class="w-16 h-6 bg-gray-600 rounded"></div>
        </div>

        <!-- Área destacada (verde) -->
        <div class="relative">
          <div class="w-full h-16 bg-[#1a4a3a] border-2 border-dashed border-green-500 rounded flex items-center justify-center">
            <div class="text-green-400 text-xs opacity-70">Componente Destacado</div>
          </div>
        </div>
      </div>

      <!-- Cards inferiores -->
      <div class="p-4 pt-0">
        <div class="grid grid-cols-3 gap-2">
          <div class="h-12 bg-[#404a57] rounded border border-gray-600"></div>
          <div class="h-12 bg-[#404a57] rounded border border-gray-600"></div>
          <div class="h-12 bg-[#404a57] rounded border border-gray-600"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Componente que simula interface de aplicativo
</script>

<style scoped>
/* Adiciona um efeito de brilho sutil */
.w-full.max-w-md {
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06),
    0 0 0 1px rgba(255, 255, 255, 0.05);
}
</style>