import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config =  {
    apiKey: "AIzaSyDbru--Mn7v_9YptcEP4wRs-OKv5aovB2w",
    authDomain: "crown-db-505ee.firebaseapp.com",
    projectId: "crown-db-505ee",
    storageBucket: "crown-db-505ee.appspot.com",
    messagingSenderId: "853420608245",
    appId: "1:853420608245:web:ec9a726691f452a6cd53bc",
    measurementId: "G-5JSQDX1DP1"
  };
 export const createUserProfile = async (userAuth , additionalData) =>{
    if(!userAuth) return ;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();
    if(!snapshot.exist) {
      const { displayName , email } = userAuth;
      const createdAt = new Date();


      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      } catch(error) {
          console.log('error creating user' , error.message);
      }
    }
    return userRef;
  }
  // google authehtication
  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt  : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;


