<script setup>
import ControlButtons from "./ControlButtons.vue";
import TitleSubtitle from "./TitleSubtitle.vue";
</script>

<template>
  <div
    class="flex flex-row justify-center p-7 w-second-card-width h-third-card-height bg-card-background rounded-lg"
  >
    <div class="flex flex-row justify-center items-center gap-8">
      <img
        class="w-20 h-20 rounded-md"
        src="../assets/images/cleiton-bg.jpg"
        alt=""
      />
      <TitleSubtitle class="flex flex-col" />
    </div>
    <ControlButtons class="" />
  </div>
</template>
