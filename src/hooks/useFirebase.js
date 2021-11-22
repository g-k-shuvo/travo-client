import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import Swal from "sweetalert2";

import { useEffect, useState } from "react";

import { useHistory, useLocation } from "react-router-dom";
import initializeAuthentication from "../firebase/firebase.init";

//initialize firebase  authentication
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const location = useLocation();
  const auth = getAuth();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  // Observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [auth]);

  // Sign Up Functionality
  const signUpUser = (email, password, name, imageUrl) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: imageUrl,
        }).then(() => {
          Swal.fire({
            icon: "success",
            title: "Account Created",
            showConfirmButton: false,
            timer: 1500,
          });
          history.push(redirect_uri);
        });
      })
      .catch((err) => {
        const msg = err.message;
        Swal.fire({
          icon: "error",
          title: msg,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  //Google Sign In
  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setUser(res.user);
        history.push(redirect_uri);
      })
      .catch((err) => setError(err.message));
  };

  // Facebook Sign In
  const signInWithFacebook = () => {
    const facebookProvider = new FacebookAuthProvider();
    signInWithPopup(auth, facebookProvider)
      .then((res) => {
        setUser(res.user);
        history.push(redirect_uri);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  // Sign In Functionality
  const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        history.push(redirect_uri);
        Swal.fire({
          icon: "success",
          title: "Logged In",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        const msg = err.message;
        Swal.fire({
          icon: "error",
          title: msg,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  // sign out
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        history.push("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return {
    error,
    user,
    signInUser,
    signUpUser,
    signInWithGoogle,
    signInWithFacebook,
    signOutUser,
  };
};

export default useFirebase;
