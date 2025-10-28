<script setup>
import Badge from '~/components/ui/Badge.vue'
import ChatDemo from '~/components/ui/ChatDemo.vue'
</script>

<template>
  <!-- Vibe Coding Section -->
  <section class="py-20 px-4 bg-gray-dark-gradient">
    <div class="container mx-auto max-w-4xl">
      <!-- Conteúdo centralizado -->
      <div class="text-center space-y-8">
        <!-- Badge -->
        <div class="flex justify-center">
          <Badge texto="Método Tradicional" />
        </div>
        
        <!-- Título com gradiente -->
        <h2 class="text-5xl font-bold text-white leading-tight">
          Vibe <span class="text-secondary-500">Coding</span>
        </h2>
        
        <!-- Descrição -->
        <p class="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          O método tradicional onde desenvolvedores enviam prompts aleatórios para IA, sem estrutura ou metodologia definida
        </p>
        
        <!-- Chat Demo centralizado -->
        <div class="flex justify-center pt-8">
          <div class="w-full max-w-2xl">
            <ChatDemo 
              titulo="Vibe Coding" 
              texto="Crie um aplicativo completo de gestão" 
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-gray-dark-gradient {
  background: linear-gradient(180deg, #1f2937 0%, #374151 50%, #4b5563 100%);
}
</style>