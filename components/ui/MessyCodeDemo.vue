<template>
  <div class="w-full max-w-md aspect-square bg-[#1e1e1e] rounded-lg border border-red-500 overflow-hidden shadow-2xl">
    <!-- Header do arquivo -->
    <div class="bg-[#2d2d2d] p-3 border-b border-gray-600 flex items-center justify-between">
      <!-- Botões do macOS -->
      <div class="flex space-x-2">
        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      
      <!-- Nome do arquivo -->
      <div class="flex-1 text-center">
        <span class="text-white text-sm">messy-app.vue</span>
      </div>
      
      <!-- Contador de erros -->
      <div class="bg-red-600 px-2 py-1 rounded text-white text-xs flex items-center space-x-1">
        <span>●</span>
        <span>{{ errorCount }} Erros</span>
      </div>
    </div>

    <!-- Área do código -->
    <div class="h-full overflow-y-auto overflow-x-hidden relative scrollbar-custom">
      <!-- Código com erros -->
      <div class="p-4 font-mono text-xs space-y-1 pb-12">
        <!-- Linha 1 -->
        <div class="flex items-center space-x-2">
          <span class="text-gray-500 w-6 text-right">1</span>
          <span class="text-gray-500">// Código gerado pela IA sem estrutura</span>
        </div>
        
        <!-- Linha 2 - Com erro -->
        <div class="flex items-center space-x-2 bg-red-900/20">
          <span class="text-gray-500 w-6 text-right">2</span>
          <span class="text-blue-400">function</span>
          <span class="text-yellow-400">everything</span>
          <span class="text-white">() {</span>
          <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse ml-2"></div>
        </div>
        
        <!-- Linha 3 - Com erro -->
        <div class="flex items-center space-x-2 bg-red-900/20">
          <span class="text-gray-500 w-6 text-right">3</span>
          <span class="text-blue-400">var</span>
          <span class="text-white">db = require(</span>
          <span class="text-green-400">'database'</span>
          <span class="text-white">)</span>
          <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse ml-2"></div>
        </div>
        
        <!-- Linha 4 - Com warning -->
        <div class="flex items-center space-x-2 bg-yellow-900/20">
          <span class="text-gray-500 w-6 text-right">4</span>
          <span class="text-blue-400">var</span>
          <span class="text-white">user = prompt(</span>
          <span class="text-green-400">'Digite seu nome'</span>
          <span class="text-white">)</span>
          <div class="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-yellow-500 ml-2"></div>
        </div>
        
        <!-- Linha 5 - Com erro crítico -->
        <div class="flex items-center space-x-2 bg-red-900/30">
          <span class="text-gray-500 w-6 text-right">5</span>
          <span class="text-white">db.connect(</span>
          <span class="text-green-400">'localhost:3306'</span>
          <span class="text-white">, </span>
          <span class="text-green-400">'root'</span>
          <span class="text-white">, </span>
          <span class="text-green-400">'123456'</span>
          <span class="text-white">)</span>
          <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse ml-2"></div>
        </div>
        
        <!-- Linha 6 -->
        <div class="flex items-center space-x-2">
          <span class="text-gray-500 w-6 text-right">6</span>
          <span class="text-blue-400">if</span>
          <span class="text-white">(user == null) {</span>
        </div>
        
        <!-- Linha 7 -->
        <div class="flex items-center space-x-2">
          <span class="text-gray-500 w-6 text-right">7</span>
          <span class="text-white pl-4">alert(</span>
          <span class="text-green-400">'Erro!'</span>
          <span class="text-white">)</span>
        </div>
        
        <!-- Linha 8 -->
        <div class="flex items-center space-x-2">
          <span class="text-gray-500 w-6 text-right">8</span>
          <span class="text-blue-400 pl-4">return</span>
          <span class="text-orange-400">false</span>
        </div>
        
        <!-- Linha 9 -->
        <div class="flex items-center space-x-2">
          <span class="text-gray-500 w-6 text-right">9</span>
          <span class="text-white">}</span>
        </div>
        
        <!-- Linha 10 - Com erro -->
        <div class="flex items-center space-x-2 bg-red-900/20">
          <span class="text-gray-500 w-6 text-right">10</span>
          <span class="text-white">document.getElementById(</span>
          <span class="text-green-400">'app'</span>
          <span class="text-white">).innerHTML = </span>
          <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse ml-2"></div>
        </div>
        
        <!-- Linha 11 - Com warning -->
        <div class="flex items-center space-x-2 bg-yellow-900/20">
          <span class="text-gray-500 w-6 text-right">11</span>
          <span class="text-green-400">'&lt;div&gt;&lt;h1&gt;'</span>
          <span class="text-white"> + user + </span>
          <span class="text-green-400">'&lt;/h1&gt; '</span>
          <div class="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-yellow-500 ml-2"></div>
        </div>
        
        <!-- Linha 12 - Com erro -->
        <div class="flex items-center space-x-2 bg-red-900/20">
          <span class="text-gray-500 w-6 text-right">12</span>
          <span class="text-green-400">'&lt;button onclick="deleteAll()"&gt;Delete&lt;/button&gt;'</span>
          <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse ml-2"></div>
        </div>
        
        <!-- Linha 13 -->
        <div class="flex items-center space-x-2">
          <span class="text-gray-500 w-6 text-right">13</span>
          <span class="text-green-400">'&lt;/div&gt;'</span>
        </div>
        
        <!-- Linha 14 - Com erro -->
        <div class="flex items-center space-x-2 bg-red-900/20">
          <span class="text-gray-500 w-6 text-right">14</span>
          <span class="text-white">eval(user + </span>
          <span class="text-green-400">'.init()'</span>
          <span class="text-white">)</span>
          <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse ml-2"></div>
        </div>
        
        <!-- Linha 15 - Com warning -->
        <div class="flex items-center space-x-2 bg-yellow-900/20">
          <span class="text-gray-500 w-6 text-right">15</span>
          <span class="text-white">setTimeout(</span>
          <span class="text-blue-400">function</span>
          <span class="text-white">() {</span>
          <div class="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-yellow-500 ml-2"></div>
        </div>
        
        <!-- Linha 16 -->
        <div class="flex items-center space-x-2">
          <span class="text-gray-500 w-6 text-right">16</span>
          <span class="text-white pl-4">fetch(</span>
          <span class="text-green-400">'/api/users'</span>
          <span class="text-white">, {</span>
        </div>
        
        <!-- Linha 17 - Com erro -->
        <div class="flex items-center space-x-2 bg-red-900/20">
          <span class="text-gray-500 w-6 text-right">17</span>
          <span class="text-white pl-8">method: </span>
          <span class="text-green-400">'GET'</span>
          <span class="text-white">,</span>
          <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse ml-2"></div>
        </div>
        
        <!-- Linha 18 -->
        <div class="flex items-center space-x-2">
          <span class="text-gray-500 w-6 text-right">18</span>
          <span class="text-white pl-8">headers: {</span>
        </div>
        
        <!-- Linha 19 - Com erro crítico -->
        <div class="flex items-center space-x-2 bg-red-900/30">
          <span class="text-gray-500 w-6 text-right">19</span>
          <span class="text-white pl-12">Authorization: </span>
          <span class="text-green-400">'Bearer admin123'</span>
          <span class="text-white">,</span>
          <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse ml-2"></div>
        </div>
        
        <!-- Linha 20 -->
        <div class="flex items-center space-x-2">
          <span class="text-gray-500 w-6 text-right">20</span>
          <span class="text-white pl-12">Content-Type: </span>
          <span class="text-green-400">'application/json'</span>
        </div>
        
        <!-- Linha 21 -->
        <div class="flex items-center space-x-2">
          <span class="text-gray-500 w-6 text-right">21</span>
          <span class="text-white pl-8">}</span>
        </div>
        
        <!-- Linha 22 -->
        <div class="flex items-center space-x-2">
          <span class="text-gray-500 w-6 text-right">22</span>
          <span class="text-white pl-4">}).then(</span>
          <span class="text-blue-400">function</span>
          <span class="text-white">(response) {</span>
        </div>
        
        <!-- Linha 23 - Com warning -->
        <div class="flex items-center space-x-2 bg-yellow-900/20">
          <span class="text-gray-500 w-6 text-right">23</span>
          <span class="text-white pl-8">console.log(response)</span>
          <div class="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-yellow-500 ml-2"></div>
        </div>
        
        <!-- Linha 24 - Com erro -->
        <div class="flex items-center space-x-2 bg-red-900/20">
          <span class="text-gray-500 w-6 text-right">24</span>
          <span class="text-white pl-8">localStorage.setItem(</span>
          <span class="text-green-400">'userData'</span>
          <span class="text-white">, response)</span>
          <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse ml-2"></div>
        </div>
        
        <!-- Linha 25 -->
        <div class="flex items-center space-x-2">
          <span class="text-gray-500 w-6 text-right">25</span>
          <span class="text-white pl-4">})</span>
        </div>
        
        <!-- Linha 26 -->
        <div class="flex items-center space-x-2">
          <span class="text-gray-500 w-6 text-right">26</span>
          <span class="text-white">}, 0)</span>
        </div>
        
        <!-- Linha 27 -->
        <div class="flex items-center space-x-2">
          <span class="text-gray-500 w-6 text-right">27</span>
          <span class="text-white">}</span>
        </div>
        
        <!-- Linha 28 -->
        <div class="flex items-center space-x-2">
          <span class="text-gray-500 w-6 text-right">28</span>
          <span class="text-gray-500">// Função para deletar tudo - PERIGO!</span>
        </div>
        
        <!-- Linha 29 - Com erro crítico -->
        <div class="flex items-center space-x-2 bg-red-900/30">
          <span class="text-gray-500 w-6 text-right">29</span>
          <span class="text-blue-400">function</span>
          <span class="text-yellow-400">deleteAll</span>
          <span class="text-white">() {</span>
          <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse ml-2"></div>
        </div>
        
        <!-- Linha 30 - Com erro crítico -->
        <div class="flex items-center space-x-2 bg-red-900/30">
          <span class="text-gray-500 w-6 text-right">30</span>
          <span class="text-white pl-4">db.query(</span>
          <span class="text-green-400">'DROP DATABASE production'</span>
          <span class="text-white">)</span>
          <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse ml-2"></div>
        </div>
        
        <!-- Linha 31 -->
        <div class="flex items-center space-x-2">
          <span class="text-gray-500 w-6 text-right">31</span>
          <span class="text-white">}</span>
        </div>
        
        <!-- Linha 32 -->
        <div class="flex items-center space-x-2">
          <span class="text-gray-500 w-6 text-right">32</span>
          <span class="text-gray-500">// Autenticação "segura"</span>
        </div>
        
        <!-- Linha 33 - Com erro -->
        <div class="flex items-center space-x-2 bg-red-900/20">
          <span class="text-gray-500 w-6 text-right">33</span>
          <span class="text-blue-400">function</span>
          <span class="text-yellow-400">login</span>
          <span class="text-white">(username, password) {</span>
          <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse ml-2"></div>
        </div>
        
        <!-- Linha 34 - Com erro crítico -->
        <div class="flex items-center space-x-2 bg-red-900/30">
          <span class="text-gray-500 w-6 text-right">34</span>
          <span class="text-blue-400 pl-4">if</span>
          <span class="text-white">(password === </span>
          <span class="text-green-400">'admin'</span>
          <span class="text-white"> || username === </span>
          <span class="text-green-400">'root'</span>
          <span class="text-white">) {</span>
          <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse ml-2"></div>
        </div>
        
        <!-- Linha 35 -->
        <div class="flex items-center space-x-2">
          <span class="text-gray-500 w-6 text-right">35</span>
          <span class="text-blue-400 pl-8">return</span>
          <span class="text-orange-400">true</span>
        </div>
        
        <!-- Linha 36 -->
        <div class="flex items-center space-x-2">
          <span class="text-gray-500 w-6 text-right">36</span>
          <span class="text-white pl-4">}</span>
        </div>
        
        <!-- Linha 37 -->
        <div class="flex items-center space-x-2">
          <span class="text-gray-500 w-6 text-right">37</span>
          <span class="text-white">}</span>
        </div>
        
        <!-- Linha 38 -->
        <div class="flex items-center space-x-2">
          <span class="text-gray-500 w-6 text-right">38</span>
          <span class="text-gray-500">// Código gerado automaticamente...</span>
        </div>
        
        <!-- Linha 39 - Com warning -->
        <div class="flex items-center space-x-2 bg-yellow-900/20">
          <span class="text-gray-500 w-6 text-right">39</span>
          <span class="text-white">everything()</span>
          <div class="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-yellow-500 ml-2"></div>
        </div>
        
        <!-- Linha 40 -->
        <div class="flex items-center space-x-2">
          <span class="text-gray-500 w-6 text-right">40</span>
          <span class="text-gray-500">// Fim do arquivo gerado pela IA</span>
        </div>
      </div>
      
      <!-- Barra de status inferior -->
      <div class="absolute bottom-0 left-0 right-0 bg-red-800 text-white px-4 py-2 text-xs flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <span>Vue.js</span>
          <span>{{ errorCount }} Problemas</span>
        </div>
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-1">
            <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span>Vulnerável</span>
          </div>
          <span>Ln 30, Col 15</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Contador de erros que aumenta dinamicamente
const errorCount = ref(8)

onMounted(() => {
  // Simula erros sendo descobertos ao longo do tempo
  const interval = setInterval(() => {
    if (errorCount.value < 25) {
      errorCount.value += Math.floor(Math.random() * 3) + 1
    } else {
      errorCount.value = 8 // Reset para loop
    }
  }, 2000)
})
</script>

<style scoped>
/* Scrollbar customizada */
.scrollbar-custom::-webkit-scrollbar {
  width: 8px;
}

.scrollbar-custom::-webkit-scrollbar-track {
  background: #2d2d2d;
}

.scrollbar-custom::-webkit-scrollbar-thumb {
  background: #666;
  border-radius: 4px;
}

.scrollbar-custom::-webkit-scrollbar-thumb:hover {
  background: #888;
}

/* Firefox scrollbar */
.scrollbar-custom {
  scrollbar-width: thin;
  scrollbar-color: #666 #2d2d2d;
}
</style>