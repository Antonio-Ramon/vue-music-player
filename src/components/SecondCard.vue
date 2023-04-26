<script setup>
import ControlButtons from "./ControlButtons.vue";
import TitleSubtitle from "./TitleSubtitle.vue";
</script>

<template>
  <div
    class="flex flex-row justify-center w-second-card-width h-second-card-height bg-card-background rounded-lg"
  >
    <div id="container" class="flex flex-col m-3">
      <div class="flex flex-row items-center gap-9">
        <img
          class="w-20 h-20 rounded-md"
          src="../assets/images/cleiton-bg.jpg"
          alt=""
        />
        <TitleSubtitle class="flex flex-col items-start mb-6" />
      </div>
      <ControlButtons />
      <div class="flex flex-col justify-center items-start p-0 mt-7">
        <progress class="w-full h-1.5 p-1 opacity-30"></progress>
        <progress class="-translate-y-2 w-5/6 h-1.5 p-1 opacity-80"></progress>
        <div
          class="flex flex-row justify-between font-roboto font-normal text-font-primary opacity-70 gap-52"
        >
          <label>02:42</label>
          <label>03:20</label>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
