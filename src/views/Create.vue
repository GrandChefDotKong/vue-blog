<template>
  <div class="create">
      <form>
          <label for="title">Title</label>
          <input :v-model="title" type="text" name="title" required>
          <label for="content">Content</label>
          <textarea v-model="content" name="content" required>Enter your text here ...</textarea>
          <label for="tags">Tags (press enter to add a tag)</label>
          <input v-model="tag" @keydown.enter.prevent="addTag" type="text" name="tags">
          <div class="pill" v-for="tag in tags" :key="tag" >#{{ tag }}</div>
          <button>Add post</button>
      </form>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
    setup() {
        const title = ref('');
        const content = ref('');
        const tags = ref([]);
        const tag = ref('');

        const addTag = () => {
            if(!tag.value) return;

            if(!tags.value.includes(tag.value)) {
                tags.value.push(tag.value.replace(/\s/, '')); // remove all whitespaces
            }

            tag.value = "";
        }

        return { title, content, tags, tag, addTag }
    }

}
</script>

<style>
  form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
  }
  button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
</style>
