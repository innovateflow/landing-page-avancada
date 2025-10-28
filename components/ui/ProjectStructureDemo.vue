<template>
  <div class="w-full max-w-md aspect-square bg-[#2a2a2a] rounded-lg border border-secondary-500 overflow-hidden shadow-2xl">
    <!-- Header do projeto -->
    <div class="bg-[#1e1e1e] p-3 border-b border-gray-600 flex items-center justify-between">
      <!-- Botões do macOS -->
      <div class="flex space-x-2">
        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      
      <!-- Nome do projeto -->
      <div class="flex-1 text-center">
        <span class="text-white text-sm">project-structure</span>
      </div>
      
      <!-- Status organizado -->
      <div class="bg-secondary-500 px-2 py-1 rounded text-black text-xs font-medium">
        ● Organizado
      </div>
    </div>

    <!-- Estrutura de pastas -->
    <div class="flex h-full">
      <!-- Sidebar com estrutura -->
      <div class="w-1/2 bg-[#2a2a2a] p-4 border-r border-gray-600">
        <div class="space-y-2 text-sm font-mono">
          <!-- Components folder -->
          <div class="flex items-center space-x-2">
            <div class="w-3 h-3 bg-gray-600 rounded-sm"></div>
            <span class="text-gray-300">Components</span>
          </div>
          
          <!-- BaseButton.vue -->
          <div class="flex items-center space-x-2 ml-4">
            <div class="w-3 h-3 bg-secondary-500 rounded-sm"></div>
            <span class="text-secondary-400">BaseButton.vue</span>
          </div>
          
          <!-- BaseInput.vue -->
          <div class="flex items-center space-x-2 ml-4">
            <div class="w-3 h-3 bg-secondary-500 rounded-sm"></div>
            <span class="text-secondary-400">BaseInput.vue</span>
          </div>
          
          <!-- Composables folder -->
          <div class="flex items-center space-x-2">
            <div class="w-3 h-3 bg-gray-600 rounded-sm"></div>
            <span class="text-gray-300">composables</span>
          </div>
          
          <!-- UseCustomer.ts -->
          <div class="flex items-center space-x-2 ml-4">
            <div class="w-3 h-3 bg-blue-500 rounded-sm"></div>
            <span class="text-blue-400">UseCustomer.ts</span>
          </div>
          
          <!-- app.vue -->
          <div class="flex items-center space-x-2">
            <div class="w-3 h-3 bg-secondary-500 rounded-sm"></div>
            <span class="text-secondary-400">app.vue</span>
          </div>
          
          <!-- package.json -->
          <div class="flex items-center space-x-2">
            <div class="w-3 h-3 bg-yellow-500 rounded-sm"></div>
            <span class="text-yellow-400">package.json</span>
          </div>
        </div>
      </div>

      <!-- Preview do código -->
      <div class="w-1/2 bg-[#1e1e1e] p-4">
        <div class="text-xs font-mono space-y-1">
          <!-- Header do arquivo -->
          <div class="flex items-center space-x-2 mb-3">
            <div class="w-2 h-2 bg-secondary-500 rounded-full"></div>
            <span class="text-white text-xs">app.vue</span>
          </div>
          
          <!-- Código -->
          <div class="space-y-1">
            <div class="text-purple-400">&lt;script setup&gt;</div>
            <div class="text-blue-400">const customer = <span class="text-yellow-400">UseCustomer</span>()</div>
            <div class="text-purple-400">&lt;/script&gt;</div>
            <div class="text-purple-400">&lt;template&gt;</div>
            <div class="text-white pl-2">&lt;main&gt;</div>
            <div class="text-secondary-400 pl-4">&lt;BaseInput</div>
            <div class="text-gray-400 pl-6">v-model="customer.name"</div>
            <div class="text-secondary-400 pl-4">/&gt;</div>
            <div class="text-secondary-400 pl-4">&lt;BaseButton</div>
            <div class="text-gray-400 pl-6">@click="customer.save()"</div>
            <div class="text-secondary-400 pl-4">&gt;</div>
            <div class="text-white pl-6">Salvar</div>
            <div class="text-secondary-400 pl-4">&lt;/BaseButton&gt;</div>
            <div class="text-white pl-2">&lt;/main&gt;</div>
            <div class="text-purple-400">&lt;/template&gt;</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Componente que demonstra estrutura de projeto organizada
</script>

<style scoped>
/* Sombra do componente */
.w-full.max-w-md {
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06),
    0 0 0 1px rgba(255, 255, 255, 0.05);
}
</style>