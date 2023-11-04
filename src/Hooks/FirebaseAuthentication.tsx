import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth'; // Import Firebase authentication methods
import { auth } from '../firebase'

function useFirebaseAuthentication(setLoginStatus:(a: any) => void) {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setLoginStatus((loginData:any) => ({
          ...loginData,
          isLoggedIn: true,
          userUID: uid,
        }));
      } else {
        setLoginStatus((loginData:any) => ({
          ...loginData,
          isLoggedIn: false,
          userUID: '',
        }));
      }
    });
  }, [setLoginStatus]);
}

export default useFirebaseAuthentication;
