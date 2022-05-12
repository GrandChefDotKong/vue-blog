import { setDoc, doc, collection } from "firebase/firestore";
import { projectFirestore, timestamp } from '../firebase/config';

const addPost = () => {

    const load = async (title, content, tags) => {

      const createdAt = timestamp.now();
        console.log(createdAt);
      try {

        let post = {
            title: title,
            body: content,
            tags: tags,
            createdAt: createdAt
        }

        const postRef = doc(collection(projectFirestore, "posts"));
        await setDoc(postRef, post);

      } catch (err) {
        console.log(err);
      }
    }

    return { load };
}

export default addPost;
