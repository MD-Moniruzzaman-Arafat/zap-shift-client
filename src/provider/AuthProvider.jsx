import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import auth from '../../firebase.config';
import { AuthContext } from '../context';

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  //   Authentication functions
  const createUserEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const userLogOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const authInfo = {
    loading,
    user,
    setUser,
    signInEmailPassword,
    createUserEmailPassword,
    userLogOut,
    googleLogin,
  };

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
}
