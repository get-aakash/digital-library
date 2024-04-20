import { addDoc, collection, deleteDoc, doc, getDocs, query } from "firebase/firestore"
import { getBooksSuccess, requestPending, requestSuccess } from "./bookSlice"
import { db } from "../../firebase-config/firebaseConfig"
import { toast } from "react-toastify"


export const getBooksAction = () => async (dispatch) => {
    try {
        dispatch(requestPending())
        let bks=[]
        const q = query(collection(db, "books"))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            const {id} = doc
            const data = {...doc.data(),id}
            bks.push(data)
        })
        if(bks.length){
            dispatch(getBooksSuccess(bks))
        }

    } catch (error) {
        return {
            status: "error",
            message: error.message
        }
    }
}
export const addBookAction = (formData) => async (dispatch) => {
    try {
        dispatch(requestPending())
        const docRef = await addDoc(collection(db, 'books'), formData)
        if (docRef.id) {
            dispatch(requestSuccess())&& dispatch(getBooksAction()) && toast.success("Book added successfully!!!!")
            return
        }
        toast.error("unable to add book")
    } catch (error) {
        return {
            status: "error",
            message: error.message
        }
    }
}

export const deleteBookAction = (id)=>async(dispatch)=>{
    try {
        dispatch(requestPending())
        await deleteDoc(doc(db,'books',id))
        dispatch(requestSuccess()&& dispatch(getBooksAction()) && toast.success("Book deleted succssfully"))
        
    } catch (error) {
        return {
            status: "error",
            message: error.message
        }
        
    }
}
