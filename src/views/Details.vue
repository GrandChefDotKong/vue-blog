<template>
  <div v-if="error">{{ error }}</div>
  <div class="post" v-if="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
      <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
      <button class="delete" @click="handleClick">Delete post</button>
  </div>
  <div v-else>
    <spinner />
  </div>
</template>

<script>
import getPost from '../composables/getPost';
import Spinner from '../components/Spinner.vue';
import deletePost from '../composables/deletePost';
import { useRouter } from 'vue-router';

export default {
  components: { Spinner },
  props: ['id'],
  setup(props) {
    const { post, error, load } = getPost(props.id);
    const router = useRouter();

    load();

    const handleClick = () => {
      deletePost(props.id);
      router.push({ name: 'home' });
    }

    return { post, error, handleClick }
  }
}
</script>

<style scoped>
  .tags a {
    margin-right: 10px;
  }
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
  button.delete {
    margin: 10px auto;
  }
</style>

