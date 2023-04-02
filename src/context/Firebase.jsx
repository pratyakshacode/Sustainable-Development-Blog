import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createContext, useContext, useEffect, useState } from "react";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup,signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {collection, addDoc, getDocs, getFirestore, doc, getDoc} from 'firebase/firestore';
import {getStorage, ref, getDownloadURL} from 'firebase/storage';

const Context = createContext(null);
export const useFirebase = ()=> useContext(Context);

const firebaseConfig = {
  apiKey: "AIzaSyDmr-N9yQkpK5S4CSbU9SzjbkbAh5yvftI",
  authDomain: "myblog-24939.firebaseapp.com",
  projectId: "myblog-24939",
  storageBucket: "myblog-24939.appspot.com",
  messagingSenderId: "228031164000",
  appId: "1:228031164000:web:f603620fa821a946fc9d05",
  measurementId: "G-P9LK35W196"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
// const database = getDatabase(app);

const getCards = ()=>{
  return getDocs(collection(firestore, "posts"));
}

const getImageUrl = (path) =>{
  return getDownloadURL(ref(storage, path));
}

const getPosts = async (id) =>{
  const postRef = doc(firestore, "posts", id);
  const result = await getDoc(postRef);
  return result;
}


 const createContact = async (name, email, phone, msg) =>{
    const result = fetch('https://myblog-24939-default-rtdb.firebaseio.com/contacts.json',{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body: JSON.stringify({
        name, email, phone, msg
      })
    })
    return result;
 }



const createUser = (email, password)=>{
  createUserWithEmailAndPassword(auth, email, password);
}

const logOut = ()=> signOut(auth);

const googleSignup = ()=> signInWithPopup(auth, googleProvider);

const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);


export const FirebaseContext = (props)=>{

  const [user, setUser] = useState(null);

  useEffect(()=>{

    onAuthStateChanged(auth, (user)=>{
      if(user) setUser(user);
      else setUser(null);
    })
  },[user])

  return (
    <Context.Provider value={{getCards, getImageUrl, getPosts, createUser, onAuthStateChanged, googleSignup, logOut, signIn, createContact, auth, user}}>
      {props.children}
    </Context.Provider>
  )
}
