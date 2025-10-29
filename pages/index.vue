<template>
  <div class="min-h-screen" style="background: linear-gradient(180deg, #020618 0%, #021B23 50%, #01A767 100%);">
    <!-- Header -->

    <!-- Hero Section -->
      <HeroSection />

    <!-- Componentização Extrema Section -->
      <ComponentizacaoSection />

    <!-- Vibe Coding Section -->
      <VibeCodingSection />

    <!-- Problema Section -->
      <ProblemaSection />

    <!-- Método Section -->
      <MetodoSection />

    <!-- Resultado Section -->
      <ResultadoSection />

    <!-- Possibilidades Section -->
      <PossibilidadesSection />

    <!-- Conteúdo do Curso Section -->
      <ConteudoCursoSection />

    <!-- Depoimentos Section -->
      <DepoimentosSection />

    <!-- Checkout Section -->
      <CheckoutSection />

    <!-- FAQ Section -->
      <FaqSection />

    <!-- Footer Section -->
      <FooterSection />

    <!-- WhatsApp Button -->
    <WhatsAppButton telefone="5511951665405" />
  </div>
</template>

<script setup>
  import HeroSection from '~/components/sections/HeroSection.vue'
  import ComponentizacaoSection from '~/components/sections/ComponentizacaoSection.vue'
  import VibeCodingSection from '~/components/sections/VibeCodingSection.vue'
  import ProblemaSection from '~/components/sections/ProblemaSection.vue'
  import MetodoSection from '~/components/sections/MetodoSection.vue'
  import ResultadoSection from '~/components/sections/ResultadoSection.vue'
  import PossibilidadesSection from '~/components/sections/PossibilidadesSection.vue'
  import ConteudoCursoSection from '~/components/sections/ConteudoCursoSection.vue'
  import DepoimentosSection from '~/components/sections/DepoimentosSection.vue'
  import FaqSection from '~/components/sections/FaqSection.vue'
  import CheckoutSection from '~/components/sections/CheckoutSection.vue'
  import FooterSection from '~/components/sections/FooterSection.vue'
  import WhatsAppButton from '~/components/ui/WhatsAppButton.vue'
// Meta tags para SEO
useHead({
  title: 'NuxtLanding - Landing Page Avançada',
  meta: [
    { name: 'description', content: 'Uma landing page moderna construída com Nuxt 4 e Tailwind CSS' },
    { name: 'keywords', content: 'nuxt, tailwind, landing page, vue, typescript' }
  ]
})
</script>