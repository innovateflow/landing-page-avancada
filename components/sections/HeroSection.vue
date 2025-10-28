<script setup>
import Badge from '~/components/ui/Badge.vue'
import VideoPlayer from '~/components/ui/VideoPlayer.vue'
import CtaButton from '~/components/ui/CtaButton.vue'
</script>

<template>
  <section class="w-full min-h-[60vh] flex flex-col justify-center items-center px-4 pt-12 pb-24 bg-nuxt-hero-gradient-reverse">
    <div class="max-w-3xl text-center mx-auto">
      <div class="mb-12">
        <Badge texto="Método componentização Extrema" />
      </div>
      <h1 class="font-extrabold text-white mb-6 leading-tight" style="font-size:48px;">
        Crie seu SaaS com IA em até <span class="text-secondary-500">10x mais rápido</span> sem programar.
      </h1>
      <p class="font-medium mb-4" style="font-size:18px; color:#90a1b9;">
        Desenvolva aplicativos com inteligência Artificial de forma segura, escalável<br class="hidden md:inline" />
        com total controle sobre o código.
      </p>
      <div class="flex justify-center mt-8">
        <VideoPlayer videoId="dQw4w9WgXcQ" />
      </div>
      <div class="flex justify-center mt-8">
        <CtaButton texto="Começar agora" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-nuxt-hero-gradient-reverse {
  background: linear-gradient(180deg, #0f2c2e 0%, #132b32 40%, #181c23 100%);
}
</style>


