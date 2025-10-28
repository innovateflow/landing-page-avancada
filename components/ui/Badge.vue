<template>
  <span
    class="inline-flex items-center px-4 py-1 rounded-full border border-[#00DC82] text-[#00DC82] bg-[#00dc8210] font-semibold text-base shadow-sm transition-all duration-200"
  >
    {{ texto }}
    <svg v-if="showArrow" class="ml-2 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </span>
</template>

<script setup>
defineProps({
  texto: { type: String, required: true },
  showArrow: { type: Boolean, default: false }
})
</script>
