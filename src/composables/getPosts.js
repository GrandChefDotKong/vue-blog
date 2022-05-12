import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';
import { query, collection, getDocs, orderBy } from 'firebase/firestore';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {

      const q = query(collection(projectFirestore, "posts"), orderBy('createdAt'));
      const res = await getDocs(q);

      posts.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
      })

    } catch (err) {
      error.value = err.message
    }
  }

  return { posts, error, load };
}

export default getPosts;