import { collection, addDoc, getDocs } from "firebase/firestore";
import { firestore } from "../utils/firebase";

const createUserCollection = async (email: string, role: any) => {
  try {
    const docRef: any = await addDoc(collection(firestore, "Users"), {
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

    if (adminQuerySnapshot.size === 0) {
      const docRef = await addDoc(adminCollectionRef, {
        email: email,
        isAdmin: true,
      });
      console.log("Document written with ID: ", docRef.id);
    }
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export { createUserCollection, createAdminCollection };
