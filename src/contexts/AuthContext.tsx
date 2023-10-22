import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { auth, firestore } from "../utils/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

// Define the type for the authentication context
type AuthContextProps = {
  currentUser: any;
  admin: any;
  login: (email: string, password: string) => any;
  fetchData : () => any;
  signup: (email: string, password: string) => any;
  logout: () => any;
};

// Set default values for the authentication context
const authContextDefaultValues: AuthContextProps = {
  currentUser: null,
  admin: null,
  login: () => {},
  fetchData : () => {},
  signup: () => {},
  logout: () => {},
};

// Create the authentication context
const AuthContext = createContext<AuthContextProps>(authContextDefaultValues);

// Custom hook to access the authentication context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Provider component to wrap the application and provide the authentication context
type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [admin, setAdmin] = useState<any>(null);
  const navigate = useNavigate();

  // Function to sign up a user
  const signup = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Function to log in a user
  const login = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Function to log out a user
  function logout() {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        navigate("/login");
      })
      .catch((error) => console.log(error));
  } 
  
 const fetchData = async () => {
    const querySnapshot = await getDocs(collection(firestore, "Admin"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        setAdmin(JSON.stringify(doc.data()));
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Effect hook to listen for changes in the authentication state
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    // Clean up the subscription when the component unmounts
    return () => {
      listen();
    };
  }, []);

  // Create the value object to be provided in the context
  const value = {
    currentUser,
    admin,
    fetchData,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
