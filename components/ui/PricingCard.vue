<template>
  <div class="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700 p-8 text-center">
    <!-- Preço Normal -->
    <div class="mb-8">
      <p class="text-gray-400 text-sm mb-2">Preço normal após finalização</p>
      <div>
        <span class="text-4xl font-bold text-gray-500 line-through">R$ 1.497,00</span>
      </div>
    </div>

    <!-- Seta para baixo -->
    <div class="flex justify-center mb-8">
      <svg class="w-8 h-8 text-secondary-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 22l8-8h-5V4H9v10H4z"/>
      </svg>
    </div>

    <!-- Card de Preço Especial -->
    <div class="bg-secondary-500/10 border-2 border-secondary-500 rounded-xl p-6 relative">
      <!-- Badge de Desconto -->
      <div class="absolute -top-3 -right-3 bg-secondary-500 text-primary-900 font-bold px-3 py-1 rounded-full text-sm">
        67% OFF
      </div>

      <!-- Título -->
      <h3 class="text-secondary-500 font-semibold mb-4">Preço de Pré-Lançamento</h3>

      <!-- Preço Principal -->
      <div class="mb-6">
        <span class="text-5xl font-bold text-white">R$ 497</span>
        <span class="text-2xl text-gray-300">,00</span>
      </div>

      <!-- Parcelamento -->
      <div class="bg-secondary-600/20 border border-secondary-500/30 rounded-lg p-4">
        <p class="text-secondary-400 font-medium">
          ou 12x de <span class="text-white font-bold">R$ 49,57</span>
        </p>
        <p class="text-gray-400 text-sm mt-1">no cartão de crédito</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Componente de pricing sem props necessárias
</script>