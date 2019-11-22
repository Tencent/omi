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
  asyncData({ store }) {
    return store.getTopics();
  }
};
</script>
