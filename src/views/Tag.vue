<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="filteredPosts.length" class="layout">    
      <post-list :posts="filteredPosts" />
      <tag-cloud :posts="posts" />
    </div>
    <div v-else>
      <spinner />
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';
import { useRoute } from 'vue-router';
import Spinner from '../components/Spinner.vue';
import TagCloud from '../components/TagCloud.vue';
import getPosts from '../composables/getPosts';
import { computed } from 'vue';

export default {
  components: { PostList, Spinner, TagCloud },
  setup() {
    const route = useRoute();
    const tag = route.params.tag; 
    const { posts, error, load } = getPosts();
    
    load();

    const filteredPosts = computed(() => {
        return posts.value.filter((post) => post.tags.includes(tag));
    });
    return { filteredPosts, error, posts }
  }
}
</script>

<style>
  .tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>