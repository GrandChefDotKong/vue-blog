import { ref } from 'vue';

const addPost = () => {

    const error = ref(null);

    const load = async (title, content, tags) => {
      try {

        let post = {
            title: title,
            body: content,
            tags: tags
        }


        let data = await fetch('http://localhost:3000/posts', { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        });

        if(!data.ok) {
          throw Error('couldn\'t add the post :(');
        }

      } catch (err) {
        error.value = err.message
      }
    }

    return { error, load };
}

export default addPost;
