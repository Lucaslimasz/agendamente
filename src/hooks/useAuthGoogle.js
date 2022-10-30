import { createContext, useState, useEffect} from 'react';

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { firebase } from '../config/firebase';
import { useContext } from 'react'; 
import { Navigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext();

export const AuthGoogleProvider = ({ children }) => {
  const auth = getAuth(firebase);
  const [user, setUser] = useState();

  useEffect(() => {
    const loadStoreAuth = () => {
      const sessionToken = sessionStorage.getItem('@AuthFireBase:token');
      const sessionUser = sessionStorage.getItem('@AuthFireBase:user');

      if(sessionToken && sessionUser){
        setUser(sessionUser)
      }
    };

    loadStoreAuth();
  }, [])

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        sessionStorage.setItem('@AuthFireBase:token', token)
        sessionStorage.setItem('@AuthFireBase:user', JSON.stringify(user))

        window.location.reload();

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({errorCode, errorMessage, email, credential })
      });
  }

  const signOut = () => {
    sessionStorage.clear()
    setUser(null)

    return <Navigate to="/"/>
  }

  return (
    <AuthGoogleContext.Provider value={{signInGoogle, signed: !!user, signOut}}>
      {children}
    </AuthGoogleContext.Provider>
  )
}

export function useAuthGoogle(){
  const ctx = useContext(AuthGoogleContext)

  return ctx
}