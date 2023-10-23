import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { firestore } from "../utils/firebase";

//this function is use for creating userCollections
const createUserCollection = async (email: string, role?: any) => {
  try {
    const docRef: any = await addDoc(collection(firestore, "users"), {
      email: email,
      role: role,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const createAdminCollection = async (email: string) => {
  try {
    const adminCollectionRef = collection(firestore, "Admin");
    const adminQuerySnapshot = await getDocs(adminCollectionRef);

    // check if the collect is empty so as the first user will be Admin automatically,
    if (adminQuerySnapshot.size === 0) {
      const docRef = await addDoc(adminCollectionRef, {
        email: email,
        isAdmin: true,
      });
      console.log("Document written with ID: ", docRef.id);
    } else {
      createUserCollection(email, ""); // if Admin is available, add user to usersCollection
    }
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

// This function updates users collection when role is asssigned and use ID to track the specific user
const updateUserRole = async (userId: string, role: string) => {
  try {
    const docRef = doc(firestore, "users", userId);
    await updateDoc(docRef, {
      role: role,
    });
    console.log("Document updated successfully");
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

export { createUserCollection, createAdminCollection, updateUserRole };
