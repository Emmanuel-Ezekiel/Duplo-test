/* eslint-disable react-hooks/rules-of-hooks */
import { useAuth } from "../contexts/AuthContext";

const getAllUsers = () => {
    const { users, userId } = useAuth();
    const obj = users?.map((string: any) => JSON.parse(string)); // user's data
    const objId = userId?.map((string: any) => JSON.parse(string)); // user's id
    
    // Merge the user's id and data together so as to use the Id to track users update when assign HR roles
    const joinedObj: any = obj?.map((item: any, i: any) => ({
      ...item,
      id: objId[i],
    }));

    return {
        joinedObj
    }
};

export { getAllUsers };