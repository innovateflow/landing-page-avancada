<script setup>
import Badge from '~/components/ui/Badge.vue'
import AppInterfaceDemo from '~/components/ui/AppInterfaceDemo.vue'
</script>

<template>
  <!-- Componentização Extrema Section -->
  <section class="py-20 px-4 bg-blue-dark-gradient">
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Coluna Esquerda -->
        <div class="space-y-6 px-8 lg:px-16">
          <div>
            <Badge texto="Método Exclusivo" />
          </div>
          <h2 class="text-4xl font-bold text-white leading-tight">
            Componentização Extrema
          </h2>
          <p class="text-lg text-gray-300 leading-relaxed">
            Desenvolva aplicativos com inteligência Artificial de forma segura, escalável com total controle sobre o código.
          </p>
        </div>
        
        <!-- Coluna Direita -->
        <div class="flex justify-center px-8 lg:px-16">
          <AppInterfaceDemo />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-blue-dark-gradient {
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #334155 100%);
}
</style>