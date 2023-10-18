import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; //
import auth from "../../FIREBASE/firebase.init";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
 export const AuthContext=createContext();
const AuthProvider = ({children}) => {
     const[user,setUser]=useState(null);
     const[loading,setLoading]=useState(true);
     const provider=new GoogleAuthProvider();
     const createUser=(email,password)=>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password);

     }
     
     const logInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
     }
     const googleLogIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider);
        

     }
     const profileUpdate=(name,photoUrl)=>{
           return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photoUrl
           })
     }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }


useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false)
    })
    return ()=>{
        unsubscribe();
    }
},[])

    const authInfo={user,createUser,profileUpdate,logInUser,logOut,googleLogIn,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes={
    children:PropTypes.node
}
export default AuthProvider;