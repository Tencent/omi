<template>
  <div class="welcome">
    welcome, yiliang
    <Hello />
  </div>
</template>

<script>
import Hello from "./Hello";

export default {
  name: "welcome",
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  components: {
    Hello
  }
};
</script>
