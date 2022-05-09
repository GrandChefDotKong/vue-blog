<template>
  <div class="home">
    <div v-if="posts.length">
      <post-list :posts="posts" />
    </div>
    <div v-else>
      <h4>loading</h4>
    </div>
    <div v-if="error">
      <h5>{{ error }}</h5>
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';
import getPosts from '../composables/getPosts';

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error }
  }
}
</script>
