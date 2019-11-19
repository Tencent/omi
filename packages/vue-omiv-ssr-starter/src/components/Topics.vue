<template>
  <div>
    <div v-for="topic in $state.topics"
      :key="topic.id">
      <p>{{topic.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  useSelf: ["topics"],
  mounted() {
    console.log("mounted ===== ", this.$state.topics);
  },
  beforeCreate() {
    console.log("beforeCreate ===== ", this.$state && this.$state.topics);
  },
  asyncData({ store }) {
    console.log("asyncData ", this.$state && this.$state.topics);
    return store.getTopics();
  }
};
</script>
