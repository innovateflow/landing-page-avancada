<script setup>
import Badge from '@/components/ui/Badge.vue'
import TestimonialCard from '@/components/ui/TestimonialCard.vue'

const depoimentos = [
  {
    plataforma: "YouTube",
    conteudo: "Quanto conhecimento, parabéns Prof. Israel. Esses tipo de conteúdo levaríamos semestres para entender em uma universidade. Muitos até saem com diploma sem esse conhecimento",
    autor: "Edy Carlos",
    origem: "Comentário no YouTube",
    avatar: "/depoimento-01.jpg"
  },
  {
    plataforma: "YouTube", 
    conteudo: "Muito bom, ao contrário do que muitos dizem 'Crie seu Saas em 1 dia com IA' que a gente vê por aí, as pessoas se encantam com a criação rápida, mas que vai apenas do 1 ao 3, já do 3 ao 5 o jogo é outro, isso que mostrou é a verdadeira realidade de desenvolvimento com IA",
    autor: "Geovany Ferreira",
    origem: "Comentário no YouTube",
    avatar: "/depoimento-02.jpg"
  },
  {
    plataforma: "YouTube",
    conteudo: "Essa parada de componentização extrema mudou meu mindset completamente. Evoluí muito depois que vi o vídeo que você fala muito sobre isso.",
    autor: "Rodrigo Toledo", 
    origem: "Comentário no YouTube",
    avatar: "/depoimento-03.jpg"
  },
  {
    plataforma: "YouTube",
    conteudo: "Voltando aqui no seu canal só para agradecer de verdade. Foi um grande achado ter assistido sua live criando um projeto do zero. Com suas técnicas de componentização extrema consegui desenvolver meu primeiro aplicativo em produção com Vue, já com pagamento integrado. Coloquei um app 100% funcional no ar por apenas 3 dólares!",
    autor: "Manoel Neto",
    origem: "Comentário no YouTube",
    avatar: "/depoimento-04.jpg"
  },
  {
    plataforma: "YouTube",
    conteudo: "O seu vídeo faz total sentido do começo ao fim. E obrigado pela sinceridade em compartilhar o que torna o caminho muito mais solidificado pro que cada um aqui tem trabalhado. Eu compartilho da mesma opinião sobre não ficar pulando de ferramenta em ferramenta sem querer se aprofundar no que realmente estamos fazendo.",
    autor: "Bruno Lincoln",
    origem: "Comentário no YouTube",
    avatar: "/depoimento-05.jpg"
  },
  {
    plataforma: "YouTube",
    conteudo: "Vídeo excelente e muito certo. Eu sempre pensei desse jeito e uso as ferramentas para desenvolver componentes dos meus projetos, e não sinto segurança em criar um aplicativo dependente de uma plataforma. Acho mais seguro ter total controle sobre o meu projeto. É mais fácil criar um projeto do zero do que refazer um projeto de outra pessoa.",
    autor: "Tony Riko",
    origem: "Comentário no YouTube",
    avatar: "/depoimento-06.jpg"
  }
]
</script>

<template>
  <!-- Depoimentos Section -->
  <section class="py-20 px-4 bg-primary-950">
    <div class="container mx-auto">
      <!-- Cabeçalho da seção -->
      <div class="text-center mb-16">
        <div class="flex justify-center mb-6">
          <Badge texto="Pré-Lançamento" />
        </div>
        <h2 class="text-4xl font-bold text-center text-white mb-6">
          O que a <span class="text-secondary-500">Comunidade</span> diz
        </h2>
        <p class="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Estamos em pré-lançamento e ainda não temos alunos formados, mas veja o que nossa comunidade nas redes sociais já está falando sobre o método. Em breve, seus depoimentos estarão aqui!
        </p>
      </div>

      <!-- Grid de depoimentos -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <TestimonialCard
          v-for="(depoimento, index) in depoimentos"
          :key="index"
          :plataforma="depoimento.plataforma"
          :conteudo="depoimento.conteudo"
          :autor="depoimento.autor"
          :origem="depoimento.origem"
          :avatar="depoimento.avatar"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-primary-950 {
  background-color: #020618;
}
</style>