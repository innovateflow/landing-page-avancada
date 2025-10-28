<script setup>
import Badge from '~/components/ui/Badge.vue'
import ProjectStructureDemo from '~/components/ui/ProjectStructureDemo.vue'
import CtaButton from '~/components/ui/CtaButton.vue'
</script>

<template>
  <!-- Resultado Section -->
  <section class="py-20 px-4 bg-result-gradient">
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Coluna Esquerda -->
        <div class="space-y-6 px-8 lg:px-16">
          <div>
            <Badge texto="Resultado" />
          </div>
          <h2 class="text-4xl font-bold text-white leading-tight">
            Por que a <span class="text-secondary-500">Componentização Extrema</span> funciona?
          </h2>
          <div class="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              Com o método de Componentização Extrema, você desenvolve componentes de forma isolada, definindo claramente suas responsabilidades, métodos, funções e propriedades. Cada componente é então importado e composto dentro de outros componentes, construindo o aplicativo de forma modular e organizada.
            </p>
            <p>
              Esta abordagem segue rigorosamente os princípios fundamentais de design de código e arquitetura de software, garantindo que seu código permaneça limpo, escalável, seguro e, principalmente, completamente sob seu controle.
            </p>
          </div>
        </div>
        
        <!-- Coluna Direita -->
        <div class="flex justify-center px-8 lg:px-16">
          <ProjectStructureDemo />
        </div>
      </div>
      
      <!-- Botão centralizado -->
      <div class="flex justify-center mt-16">
        <CtaButton texto="Começar agora" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-result-gradient {
  background: linear-gradient(180deg, #0a2e1a 0%, #0f3d23 50%, #1a5c33 100%);
}
</style>