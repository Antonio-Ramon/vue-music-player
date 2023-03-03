<script setup>
import IconBackward from "../assets/icons/IconBackward.vue";
import IconPlay from "../assets/icons/IconPlay.vue";
import IconFoward from "../assets/icons/IconFoward.vue";
import TitleSubtitle from "./TitleSubtitle.vue";
import ControlButtons from "./ControlButtons.vue";
</script>

<template>
  <div
    class="flex flex-col w-first-card-width h-first-card-height bg-card-background rounded-lg"
  >
    <div class="w-48 mt-12 mx-9">
      <img src="../assets/images/bg-first-card.png" alt="" />
      <TitleSubtitle />
      <ControlButtons />
    </div>
  </div>
</template>
