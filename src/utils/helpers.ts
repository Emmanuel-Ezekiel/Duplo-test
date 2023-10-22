/* eslint-disable react-hooks/rules-of-hooks */
import { useAuth } from "../contexts/AuthContext";

const getAllUsers = () => {
    const { users, userId } = useAuth();
    const obj = users?.map((string: any) => JSON.parse(string));
    const objId = userId?.map((string: any) => JSON.parse(string));
    
    // const obj = JSON.parse(users);
    
    const joinedObj: any = obj?.map((item: any, i: any) => ({
      ...item,
      id: objId[i],
    }));

    return {
        joinedObj
    }
};

export { getAllUsers }