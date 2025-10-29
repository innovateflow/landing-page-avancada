<template>
  <div class="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
    <!-- Título principal -->
    <div class="flex items-center gap-3 mb-8">
      <div class="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center">
        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
      </div>
      <h3 class="text-2xl font-bold text-white">O que você vai receber:</h3>
    </div>

    <!-- Lista de benefícios -->
    <div class="space-y-4 mb-8">
      <div class="border border-secondary-500/30 rounded-lg p-4 bg-secondary-500/5">
        <div class="flex items-start gap-3">
          <div class="w-5 h-5 bg-secondary-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
            <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-1">1 Ano de acesso completo</h4>
            <p class="text-gray-400 text-sm">Acesso total à plataforma por 12 meses</p>
          </div>
        </div>
      </div>

      <div class="border border-secondary-500/30 rounded-lg p-4 bg-secondary-500/5">
        <div class="flex items-start gap-3">
          <div class="w-5 h-5 bg-secondary-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
            <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-1">Suporte dentro da plataforma</h4>
            <p class="text-gray-400 text-sm">Tire suas dúvidas diretamente na plataforma</p>
          </div>
        </div>
      </div>

      <div class="border border-secondary-500/30 rounded-lg p-4 bg-secondary-500/5">
        <div class="flex items-start gap-3">
          <div class="w-5 h-5 bg-secondary-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
            <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-1">Módulos liberados conforme gravação</h4>
            <p class="text-gray-400 text-sm">Receba o conteúdo assim que for produzido</p>
          </div>
        </div>
      </div>

      <div class="border border-secondary-500/30 rounded-lg p-4 bg-secondary-500/5">
        <div class="flex items-start gap-3">
          <div class="w-5 h-5 bg-secondary-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
            <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-1">Templates dos projetos</h4>
            <p class="text-gray-400 text-sm">Códigos prontos para acelerar seu desenvolvimento</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Garantia -->
    <div class="bg-secondary-500/10 border border-secondary-500/30 rounded-lg p-6 text-center">
      <div class="flex items-center justify-center gap-2 mb-3">
        <div class="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center">
          <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
        </div>
        <h4 class="text-secondary-500 font-bold text-lg">Garantia de 7 dias</h4>
      </div>
      <p class="text-gray-300 text-sm leading-relaxed">
        Se não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas, sem complicações.
      </p>
    </div>
  </div>
</template>

<script setup>
// Componente de benefícios sem props necessárias
</script>