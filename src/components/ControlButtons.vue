<script>
import IconBackward from "../assets/icons/IconBackward.vue";
import IconFoward from "../assets/icons/IconFoward.vue";
import IconPlay from "../assets/icons/IconPlay.vue";

import { ref } from "vue";

export default {
  components: {
    IconBackward,
    IconFoward,
    IconPlay,
  },
  setup() {
    const audioRef = ref(null);

    const playMusic = () => {
      const audio = audioRef.value;
      if (audio) {
        audio.play();
      }
    };

    const onFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const audio = new Audio(URL.createObjectURL(file));
        audioRef.value = audio;
        playMusic();
      }
    };

    const openFileSelector = () => {
      const fileInput = this.$refs.fileInput;
      if (fileInput) {
        fileInput.click();
      }
    };
    return {
      playMusic,
      onFileChange,
      openFileSelector,
    };
  },
};
</script>

<template>
  <div
    id="buttons"
    class="flex flex-row mt-7 justify-center items-center gap-14"
  >
    <IconBackward />
    <IconPlay @click="playMusic()" class="cursor-pointer" />
    <IconFoward />
    <button type="file" @change="onFileChange" ref="fileInput">TEST</button>
  </div>
</template>
