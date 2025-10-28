<script setup>
import Badge from '@/components/ui/Badge.vue'
import ExpandableCard from '@/components/ui/ExpandableCard.vue'
import ExpandableCardInProgress from '@/components/ui/ExpandableCardInProgress.vue'
import CtaButton from '@/components/ui/CtaButton.vue'

const cursoContent = [
  {
    numero: "1",
    titulo: "Fundamentos Teóricos",
    status: "Disponível",
    modulosCount: "3 módulos",
    descricao: "Base sólida para entender desenvolvimento web e empreendedorismo",
    modulos: [
      {
        titulo: "Introdução ao Desenvolvimento Web",
        descricao: "Frameworks, servidores, anatomia de aplicações e arquitetura"
      },
      {
        titulo: "Empreendedorismo Digital", 
        descricao: "Dicas essenciais para criar e monetizar seus projetos"
      },
      {
        titulo: "Boas Práticas de Desenvolvimento",
        descricao: "Padrões de código, organização e metodologias ágeis"
      }
    ]
  },
  {
    numero: "2",
    titulo: "Componentização Extrema",
    status: "Disponível",
    modulosCount: "4 módulos",
    descricao: "Domine a arte de criar componentes reutilizáveis e escaláveis",
    modulos: [
      {
        titulo: "Setup Inicial",
        descricao: "Instalação do Git, Node.js, editor de código e ferramentas essenciais"
      },
      {
        titulo: "Componentização com Nuxt",
        descricao: "Sistema de componentes, propriedades, eventos e composição"
      },
      {
        titulo: "Versionamento de Código",
        descricao: "Git, GitHub, commits, branches e colaboração em equipe"
      },
      {
        titulo: "Caixa Rápida com IA",
        descricao: "Criação de sites e landing pages para venda imediata"
      }
    ]
  },
  {
    numero: "3",
    titulo: "Projetos Práticos",
    status: "Disponível",
    modulosCount: "2 módulos",
    descricao: "Aplicações reais para consolidar o conhecimento adquirido",
    modulos: [
      {
        titulo: "Sistema de Cadastro com Auth",
        descricao: "CRUD completo com autenticação usando Supabase"
      },
      {
        titulo: "Sistema de Agendamento",
        descricao: "Aplicação mais elaborada com gestão de horários e usuários"
      }
    ]
  }
]

const cursoContentInProgress = [
  {
    numero: "4",
    titulo: "Backend e Assinaturas",
    status: "Em Gravação",
    modulosCount: "4 módulos",
    descricao: "Infraestrutura robusta e monetização de aplicações",
    modulos: [
      {
        titulo: "Supabase Auth",
        descricao: "Autenticação completa: cadastro, login, recuperação de senha"
      },
      {
        titulo: "Supabase Escala",
        descricao: "Views, funções, triggers e otimização de performance"
      },
      {
        titulo: "Supabase Segurança",
        descricao: "RLS, JWT, políticas de segurança e boas práticas"
      },
      {
        titulo: "Stripe Integration",
        descricao: "API do Stripe para gerenciar assinaturas e pagamentos"
      }
    ]
  },
  {
    numero: "5",
    titulo: "Publicação e Manutenção",
    status: "Em Gravação",
    modulosCount: "1 módulo",
    descricao: "Deploy profissional e gestão de aplicações em produção",
    modulos: [
      {
        titulo: "Deploy com Vercel",
        descricao: "Publicação, domínio próprio, variáveis de ambiente e CI/CD"
      }
    ]
  },
  {
    numero: "6",
    titulo: "Projeto Final do Curso",
    status: "Em Gravação",
    modulosCount: "1 módulo",
    descricao: "Criação completa de um SaaS do zero ao deploy",
    modulos: [
      {
        titulo: "SaaS Completo",
        descricao: "Projeto final integrando todos os conceitos aprendidos no curso"
      }
    ]
  }
]
</script>

<template>
  <!-- Conteúdo do Curso Section -->
  <section class="py-20 px-4 bg-primary-950">
    <div class="container mx-auto">
      <!-- Cabeçalho da seção -->
      <div class="text-center mb-16">
        <div class="flex justify-center mb-6">
          <Badge texto="Conteúdo do Curso" />
        </div>
        <h2 class="text-4xl font-bold text-center text-white mb-6">
          O que você vai <span class="text-secondary-500">Aprender</span>
        </h2>
        <p class="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Um curso completo e estruturado que te leva do básico ao avançado, criando aplicativos reais com metodologia comprovada
        </p>
      </div>

      <!-- Cards expansíveis -->
      <div class="max-w-5xl mx-auto space-y-6">
        <ExpandableCard
          v-for="content in cursoContent"
          :key="content.numero"
          :numero="content.numero"
          :titulo="content.titulo"
          :status="content.status"
          :modulos-count="content.modulosCount"
          :descricao="content.descricao"
          :modulos="content.modulos"
        />
        
        <!-- Cards em progresso -->
        <ExpandableCardInProgress
          v-for="content in cursoContentInProgress"
          :key="content.numero"
          :numero="content.numero"
          :titulo="content.titulo"
          :status="content.status"
          :modulos-count="content.modulosCount"
          :descricao="content.descricao"
          :modulos="content.modulos"
        />
      </div>
      
      <!-- CTA Button -->
      <div class="flex justify-center mt-12">
        <CtaButton texto="Começar Agora" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-primary-950 {
  background-color: #020618;
}
</style>