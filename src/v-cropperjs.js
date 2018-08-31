import Vue from "vue";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";

export default Vue.extend({
  name: "v-cropperjs",
  render(h) {
    return h("img", {
      style: {
        maxWidth: "100%"
      },
      domProps: {
        ...this.domProps,
        src: this.src,
      },
      ref: "img"
    });
  },
  data() {
    return {
      cropper: null
    };
  },
  props: {
    options: {
      type: Object,
      default: () => ({})
    },
    src: String,
    domProps: {
      type: Object,
      default: () => ({})
    }
  },
  mounted() {
    this.cropper = new Cropper(this.$refs.img, this.options);
  }
});
