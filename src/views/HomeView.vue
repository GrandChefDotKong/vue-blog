<template>
  <div class="home">
    <div v-if="posts.length" class="layout">
      <post-list :posts="posts" />
      <tag-cloud :posts="posts" />
    </div>
    <div v-else>
      <spinner />
    </div>
    <div v-if="error">
      <h5>{{ error }}</h5>
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';
import getPosts from '../composables/getPosts';
import Spinner from '../components/Spinner.vue';
import TagCloud from '../components/TagCloud.vue';

export default {
  name: 'HomeView',
  components: { PostList, Spinner, TagCloud },
  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error }
  }
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>