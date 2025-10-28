<template>
  <div class="w-full max-w-2xl mx-auto flex flex-col items-stretch relative">
    <!-- Mac window dots in top border area -->
    <div class="flex items-center gap-2 absolute left-10 top-0 z-40" style="height:32px;">
      <span class="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] shadow"></span>
      <span class="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] shadow"></span>
      <span class="w-3 h-3 rounded-full bg-[#27c93f] border border-[#13a10e] shadow"></span>
    </div>
    <div class="bg-[#0D1F23] border-x-[16px] border-b-[16px] border-t-[32px] border-[#1ec28b] rounded-2xl shadow-xl overflow-hidden flex flex-col items-center justify-center p-0 w-full relative">
      <div class="w-full aspect-video bg-black flex items-center justify-center relative">
        <iframe
          :src="youtubeUrl"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="w-full h-full rounded-none"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  videoId: { type: String, required: true }
})
const youtubeUrl = `https://www.youtube.com/embed/${props.videoId}?rel=0&showinfo=0&autoplay=0&modestbranding=1`;
</script>

<style scoped>
/* Glow border effect */
.div {
  box-shadow: 0 0 0 2px #00DC82, 0 4px 32px 0 #021B23;
}
</style>
