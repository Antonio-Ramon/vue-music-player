<script setup>
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
      <div class="flex flex-col justify-center items-start p-0 mt-7">
        <progress class="w-full h-1.5 p-1 opacity-30"></progress>
        <progress class="-translate-y-2 w-5/6 h-1.5 p-1 opacity-80"></progress>
        <div
          class="flex flex-row justify-between font-roboto font-normal text-font-primary opacity-70 gap-28"
        >
          <label>03:20</label>
          <label>00:12</label>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
progress {
  background-color: #d9d9d9;
  /* border: solid #808080 2px; */
  border-radius: 9.6px;
}
</style>
