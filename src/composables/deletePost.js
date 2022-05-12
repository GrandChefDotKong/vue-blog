import { deleteDoc, doc } from 'firebase/firestore';
import { projectFirestore } from '../firebase/config';

const deletePost = async (id) => {

    await deleteDoc(doc(projectFirestore, 'posts', id));
}

export default deletePost