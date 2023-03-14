<script setup>
import FirstCard from "./components/FirstCard.vue";
import SecondCard from "./components/SecondCard.vue";
import ThirdCard from "./components/ThirdCard.vue";
</script>

<template>
  <div
    class="flex flex-row justify-center items-center my-20 mx-20 font-roboto gap-8"
  >
    <FirstCard />
    <div class="flex flex-col gap-8">
      <SecondCard />
      <ThirdCard />
    </div>
  </div>
</template>
