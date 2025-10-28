<script setup>
import Badge from '~/components/ui/Badge.vue'
import MessyCodeDemo from '~/components/ui/MessyCodeDemo.vue'
</script>

<template>
  <!-- Problema Section -->
  <section class="py-20 px-4 bg-problem-gradient">
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Coluna Esquerda -->
        <div class="space-y-6 px-8 lg:px-16">
          <div>
            <Badge texto="Problema" />
          </div>
          <h2 class="text-4xl font-bold text-white leading-tight">
            Por que esta abordagem <span class="text-red-500">falha?</span>
          </h2>
          <div class="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              Esta abordagem falha porque a IA gera código sem considerar princípios fundamentais de arquitetura de software, como componentização, separação de responsabilidades e reutilização de código. Além disso, perde contexto facilmente, resultando em código ilegível, com vulnerabilidades de segurança, sujeito a falhas e extremamente difícil de manter no longo prazo.
            </p>
            <p>
              O desenvolvimento sem metodologia estruturada gera aplicações monolíticas, com código duplicado, dependências desnecessárias e baixa escalabilidade. O resultado são sistemas frágeis que se tornam pesadelos de manutenção conforme crescem em complexidade.
            </p>
          </div>
        </div>
        
        <!-- Coluna Direita -->
        <div class="flex justify-center px-8 lg:px-16">
          <MessyCodeDemo />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-problem-gradient {
  background: linear-gradient(180deg, #3f1a1a 0%, #5c2727 50%, #7a3333 100%);
}
</style>