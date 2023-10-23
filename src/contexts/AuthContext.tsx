/* eslint-disable react-hooks/exhaustive-deps */
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
  users: any;
  userId: any;
  admin: any;
  login: (email: string, password: string) => any;
  fetchAdminData: () => any;
  signup: (email: string, password: string) => any;
  logout: () => any;
};

// Set default values for the authentication context
const authContextDefaultValues: AuthContextProps = {
  currentUser: null,
  admin: null,
  userId: null,
  users: null,
  login: () => {},
  fetchAdminData: () => {},
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
  const [userId, setUserId] = useState<any>(null);
  const [users, setUsers] = useState<any>(null);
  const navigate = useNavigate();

  const usersData: any = [];
  const usersID: any = [];

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


  // Function to get all AdminData
  const fetchAdminData = async () => {
    const querySnapshot = await getDocs(collection(firestore, "Admin"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      setAdmin(JSON.stringify(doc.data()));
    });
  };

    // Function to get all UsersData
  const fetchUsersData = async () => {
    const querySnapshot = await getDocs(collection(firestore, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      usersData.push(JSON.stringify(doc.data()));
      usersID.push(JSON.stringify(doc.id));
    });
    setUsers(usersData);
    setUserId(usersID);
  };

    // Function to log out a user
  function logout() {
    signOut(auth)
      .then(() => {
        fetchAdminData();
        console.log("sign out successful");
        navigate("/login");
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchAdminData();
    fetchUsersData();
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
    users,
    fetchAdminData,
    login,
    signup,
    logout,
    userId,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
