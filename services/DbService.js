//All of our Firestore functionality
import { collection, getDocs, addDoc, query, orderBy, where } from "firebase/firestore";
import { db } from "../firebase";


//Create new list item function
export const createNewBucketItem = async (item) => {

    try {
        //docRef - our reference to our newly created document (brand new with self-generated id)
        const docRef = await addDoc(collection(db, "items"), item);
        console.log("Document written with ID: ", docRef.id);
        return true;// be a bit more specific why it passed or failed
    } catch (e) {
        console.error("Error adding document: ", e);
        return false;
    }

}

//TODO: Get all list item function
export const getMyBucketList = async () => {
    
    //Making a custom query to add order by or limit to our querying data
    var q = query( collection(db, "items"), orderBy('priority', "desc") )//, where("priority", "==", false)

    const querySnapshot = await getDocs(q);
    var allitems = []//array we want to return
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        allitems.push({ ...doc.data(), id: doc.id }) 
        //push each doc's data to the array I want to return
    });

    // console.log(allitems)
    return allitems

    //cant just use query snapshot as the array of items - need  to access .data()
}