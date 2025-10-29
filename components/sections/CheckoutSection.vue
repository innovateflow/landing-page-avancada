<script setup>
import Badge from '@/components/ui/Badge.vue'
import PricingCard from '@/components/ui/PricingCard.vue'
import BenefitsCard from '@/components/ui/BenefitsCard.vue'
import CtaButtonFull from '@/components/ui/CtaButtonFull.vue'
import AlertCard from '@/components/ui/AlertCard.vue'
</script>

<template>
  <!-- Checkout Section -->
  <section class="py-20 px-4 bg-checkout-gradient">
    <div class="container mx-auto">
      <!-- Cabeçalho da seção -->
      <div class="text-center mb-16">
        <div class="flex justify-center mb-6">
          <Badge texto="🚀 PRÉ-LANÇAMENTO ATIVO" />
        </div>
        <h2 class="text-4xl font-bold text-center text-white mb-6">
          Garanta sua Vaga no Método <span class="text-secondary-500">Componentização Extrema</span>
        </h2>
        <p class="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Aproveite o desconto exclusivo de pré-lançamento e comece a criar SaaS com IA hoje mesmo
        </p>
      </div>

      <!-- Layout 2 Colunas -->
      <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Coluna Esquerda - Pricing -->
        <div class="space-y-8">
          <PricingCard />
          <CtaButtonFull texto="🚀 GARANTIR MINHA VAGA - R$ 497,00" />
          
          <!-- Formas de pagamento -->
          <div class="text-center">
            <p class="text-gray-400 text-sm mb-3">Formas de pagamento aceitas:</p>
            <div class="flex justify-center items-center gap-6">
              <!-- Cartão -->
              <div class="flex items-center gap-2">
                <div class="w-8 h-6 bg-gray-700 rounded border flex items-center justify-center">
                  <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm0 2h20v2H2V6zm0 4h20v8H2v-8zm3 2h4v2H5v-2z"/>
                  </svg>
                </div>
                <span class="text-gray-300 text-sm font-medium">Cartão</span>
              </div>
              
              <!-- PIX -->
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-300 text-sm font-medium">PIX</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Coluna Direita - Benefits -->
        <div>
          <BenefitsCard />
        </div>
      </div>

      <!-- Alerta de Urgência -->
      <div class="mt-12 max-w-6xl mx-auto">
        <AlertCard />
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-checkout-gradient {
  background: linear-gradient(135deg, #01A767 0%, #132b32 50%, #020618 100%);
}
</style>