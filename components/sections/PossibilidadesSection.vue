<script setup>
import Badge from '~/components/ui/Badge.vue'
import AppCard from '~/components/ui/AppCard.vue'

// Dados dos aplicativos
const apps = [
  {
    titulo: "Aplicativo de Gestão",
    descricao: "Sistemas completos para gerenciar negócios, estoque, vendas e relatórios em tempo real.",
    icone: "gestao"
  },
  {
    titulo: "Aplicativo de Bate-Papo", 
    descricao: "Plataformas de comunicação em tempo real com mensagens, grupos e chamadas de vídeo.",
    icone: "chat"
  },
  {
    titulo: "Aplicativo de Delivery",
    descricao: "Sistemas de entrega com rastreamento, pagamentos e gestão de pedidos completa.",
    icone: "delivery"
  },
  {
    titulo: "Aplicativo de Saúde",
    descricao: "Plataformas médicas para consultas, prontuários, agendamentos e telemedicina.",
    icone: "saude"
  },
  {
    titulo: "App Financeiro",
    descricao: "Sistemas bancários, carteiras digitais, investimentos e controle financeiro pessoal.",
    icone: "financeiro"
  },
  {
    titulo: "E-commerce",
    descricao: "Lojas virtuais completas com carrinho, pagamentos, estoque e painel administrativo.",
    icone: "ecommerce"
  },
  {
    titulo: "Plataforma Educacional",
    descricao: "Sistemas de ensino online com cursos, avaliações, certificados e gamificação.",
    icone: "educacional"
  },
  {
    titulo: "Rede Social",
    descricao: "Plataformas sociais com perfis, posts, interações, stories e algoritmos de feed.",
    icone: "social"
  }
]
</script>

<template>
  <!-- Possibilidades Section -->
  <section class="py-20 px-4 bg-nuxt-hero-gradient-reverse">
    <div class="container mx-auto">
      <!-- Cabeçalho da seção -->
      <div class="text-center mb-16">
        <div class="flex justify-center mb-6">
          <Badge texto="Possibilidades" />
        </div>
        <h2 class="text-4xl font-bold text-center text-white mb-6">
          Crie qualquer tipo de <span class="text-secondary-500">aplicativo</span>
        </h2>
        <p class="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Com o Método Componentização Extrema, você pode criar qualquer tipo de aplicativo. Veja alguns exemplos do que é possível desenvolver
        </p>
      </div>

      <!-- Grid de aplicativos -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <AppCard
          v-for="app in apps"
          :key="app.titulo"
          :titulo="app.titulo"
          :descricao="app.descricao"
          :tipo="app.icone"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-nuxt-hero-gradient-reverse {
  background: linear-gradient(180deg, #0f2c2e 0%, #132b32 40%, #181c23 100%);
}
</style>