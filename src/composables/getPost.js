import { ref } from 'vue';
import { getDoc, doc } from "firebase/firestore";
import { projectFirestore } from '../firebase/config';

const getPost = (id) => {

    const post = ref(null);
    const error = ref(null);

    const load = async () => {
      try {

        const docRef = doc(projectFirestore, "posts", id);
        const res = await getDoc(docRef);

        if(!res.data()) {
          throw Error('That post does not exit');
        }

        post.value = { ...res.data(), id: res.id }

      } catch (err) {
        error.value = err.message
      }
    }

    return { post, error, load };
}

export default getPost;