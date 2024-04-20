import { addDoc, collection } from "firebase/firestore"
import { requestPending, requestSuccess } from "./bookSlice"
import { db } from "../../firebase-config/firebaseConfig"
import { toast } from "react-toastify"


export const getBooksAction = ()=> async(dispatch)=>{
    try {
        
    } catch (error) {
        return{
            status:"error",
            message: error.message
        }
    }
}
export const addBookAction = (formData)=>async(dispatch)=>{
    try {
        dispatch(requestPending())
        const docRef = await addDoc(collection(db,'books'), formData)
        if(docRef.id){
            dispatch(requestSuccess()) && toast.success("Book added successfully!!!!")
        }
    } catch (error) {
        return{
            status:"error",
            message: error.message
        }
    }
}

