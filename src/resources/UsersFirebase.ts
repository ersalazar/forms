//@ts-nocheck
import { addDoc, collection, getDocs, doc, updateDoc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase.ts";

const usersCollection = collection(db, 'users');

export const addUser = async (user) => {
    try {
        console.log(`data ${user}`)
        await addDoc(usersCollection, user);
        return true;
    } catch (error) {
        return false;
    }
};

export const getUsers = async () => {
    const result = await getDocs(usersCollection);
    return result;
}; 

export const deleteUser = async (id) => {
    const docRef = doc(db, 'users', id)
    try{
        await deleteDoc(docRef)
        console.log('deleted')
        return true
    }catch(error){
        console.log(error)
        return false
    }

};
export const getUser = async (id) => {
    const docRef = doc(db, 'users', id)
    try{
        const user = await  getDoc(docRef);
        return user.data()
    } catch (error) {
        console.log(error)
    }
    return 
};
export const updateUser = async (id, data) => {
    const docRef = doc(db, 'users', id)
    try{

        await  updateDoc(docRef, data);
        return true
    } catch (error) {
        console.log(error)
    }
    return 
};

