<template>
  <div id="app">
    <div class="sdasd">
      <v-cropperjs ref="cropper" :src="cropImg" :options="cropOptions" :domProps="{alt: 'test'}"></v-cropperjs>
    </div>
    <button @click="handleZoomIn">+</button>
    <button @click="handleZoomOut">-</button>
  </div>
</template>

<script>
import cropImg from "./assets/logo.png";
import VCropperjs from "../src/v-cropperjs.js";

export default {
  name: "app",
  data() {
    return {
      cropImg,
      cropOptions: {}
    };
  },
  components: {
    VCropperjs
  },
  methods: {
    handleZoomIn() {
      // eslint-disable-next-line
      this.$refs.cropper.cropper.zoom(0.1);
    },
    handleZoomOut() {
      this.$refs.cropper.cropper.zoom(-0.1);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
