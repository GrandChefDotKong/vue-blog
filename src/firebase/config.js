import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyARNyX0u87W3kSZ5bF0rVTU1p-y3X8cv58",
    authDomain: "vue-firebase-edce2.firebaseapp.com",
    projectId: "vue-firebase-edce2",
    storageBucket: "vue-firebase-edce2.appspot.com",
    messagingSenderId: "887206425956",
    appId: "1:887206425956:web:92f2627b64f64da53fb671"
  };

  const app = initializeApp(firebaseConfig);

  const projectFirestore = getFirestore(app)

  export { projectFirestore };