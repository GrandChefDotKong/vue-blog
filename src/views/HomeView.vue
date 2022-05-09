<template>
  <div class="home">
    <div v-if="posts.length">
      <post-list :posts="posts" />
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

export default {
  name: 'HomeView',
  components: { PostList, Spinner },
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
</style>