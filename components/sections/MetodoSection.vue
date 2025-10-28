<script setup>
import Badge from '~/components/ui/Badge.vue'
import ChatDemoLeft from '~/components/ui/ChatDemoLeft.vue'
</script>

<template>
  <!-- Método Componentização Extrema Section -->
  <section class="py-20 px-4 bg-method-gradient">
    <div class="container mx-auto max-w-4xl">
      <!-- Conteúdo centralizado -->
      <div class="text-center space-y-8">
        <!-- Badge -->
        <div class="flex justify-center">
          <Badge texto="Método" />
        </div>
        
        <!-- Título -->
        <h2 class="text-5xl font-bold text-white leading-tight">
          Método <span class="text-secondary-500">Componentização Extrema</span>
        </h2>
        
        <!-- Descrição -->
        <p class="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          A metodologia estruturada que transforma o desenvolvimento com IA em um processo organizado, escalável e eficiente
        </p>
        
        <!-- Chat Demo centralizado -->
        <div class="flex justify-center pt-8">
          <div class="w-full max-w-2xl">
            <ChatDemoLeft 
              titulo="Componentização Extrema" 
              texto="Crie um componente chamado BaseButton e um componente BaseInput, coloque os componentes no Index e ao ser clicado o button execute a função principal que está no UseCustomer..." 
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-method-gradient {
  background: linear-gradient(180deg, #0a2e1a 0%, #0f3d23 50%, #144d2b 100%);
}
</style>