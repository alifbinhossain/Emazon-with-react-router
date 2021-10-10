import initAuthentication from "../Firebase/Firebase.init";
import { useState } from "react";
import { useEffect } from "react";

// IMPORT FROM FIREBASE
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

initAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                                  PROVIDERS                                 */
  /* -------------------------------------------------------------------------- */
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  /* -------------------------------------------------------------------------- */
  /*                    CREATE NEW USER WITH EMAIL & PASSWORD                   */
  /* -------------------------------------------------------------------------- */
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /* -------------------------------------------------------------------------- */
  /*                        SIGN IN WITH EMAIL & PASSWORD                       */
  /* -------------------------------------------------------------------------- */
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  /* -------------------------------------------------------------------------- */
  /*                       SIGN IN WITH ALL SOCIAL LINKS                      */
  /* -------------------------------------------------------------------------- */
  const signInWithAny = (provider) => {
    return signInWithPopup(auth, provider);
  };

  /* -------------------------------------------------------------------------- */
  /*                                  SIGN OUT                                  */
  /* -------------------------------------------------------------------------- */
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return {
    user,
    error,
    createNewUser,
    signInWithAny,
    googleProvider,
    facebookProvider,
    githubProvider,
    twitterProvider,
    signInWithEmail,
    userSignOut,
  };
};

export default useFirebase;
