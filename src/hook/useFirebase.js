import { useEffect, useState } from "react";
import firebaseInitialize from "../authentication/firebaseInitialize";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";

firebaseInitialize();

const useFirebase = () => {
  const [users, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(true);
      setUsers(user);
    });
    return () => unSubscribe;
  }, [auth]);
  const createNewUser = (userName, email, password, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          updateProfileName(userName);
          toast.success("Successfully create a new account.");
          navigate("/login");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode) {
          toast.error("Sorry! This email address is already in use.");
        }
      })
      .finally(() => setIsLoading(false));
  };
  const updateProfileName = (userName) => {
    updateProfile(auth.currentUser, {
      displayName: userName,
    })
      .then(() => {
        console.log("userName");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const userLogin = (email, password, navigate, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUsers(user);
        setIsLoggedIn(true);
        const destination = location.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/wrong-password") {
          toast.error("Wrong password. please try again or reset the password");
        } else if (errorCode === "auth/user-not-found") {
          toast.error("User not found. please sign up");
          navigate("/register");
        }
      })
      .finally(() => setIsLoading(false));
  };
  const handlePasswordResetEmail = (email, navigate, location) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("first");
        toast.success(
          "Please check your email inbox or spam folder and reset your password."
        );
        const destination = location.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/user-not-found") {
          toast.error("User not found. please sign up");
          navigate("/register");
        }
      });
  };
  const handleEmailVerification = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      toast.success(
        "Please check your email inbox or spam folder and verify your email."
      );
    });
  };
  const signInWithGoogle = (navigate, location) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUsers(user);
        setIsLoggedIn(true);
        const destination = location.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        //
      })
      .finally(() => setIsLoading(false));
  };
  const handleSignOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUsers({});
        setIsLoggedIn(false);
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
  return {
    users,
    isLoggedIn,
    isLoading,
    createNewUser,
    userLogin,
    handlePasswordResetEmail,
    handleEmailVerification,
    signInWithGoogle,
    handleSignOut,
  };
};

export default useFirebase;
