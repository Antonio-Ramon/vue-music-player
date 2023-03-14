<script setup>
import ControlButtons from "./ControlButtons.vue";
import TitleSubtitle from "./TitleSubtitle.vue";
</script>

<template>
  <div
    class="flex flex-row justify-center w-second-card-width h-third-card-height bg-card-background rounded-lg"
  >
    <div id="container" class="flex flex-col m-3">
      <div class="flex flex-row items-center gap-9">
        <img
          class="w-20 h-20 rounded-md"
          src="../assets/images/cleiton-bg.jpg"
          alt=""
        />
        <TitleSubtitle class="flex flex-col items-start mb-4" />
      </div>
      <ControlButtons />
    </div>
  </div>
</template>
