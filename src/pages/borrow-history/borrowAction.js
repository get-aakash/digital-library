
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { toast } from "react-toastify"
import { db } from "../../firebase-config/firebaseConfig"
import { setBorrow } from "../books/borrowSlice"

export const getBorrowAction = (userId) => async (dispatch) => {
    try {
        
        let bks = []
        const q = query(collection(db, "borrow"), where("userId", "==", userId))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            const { id } = doc
            const data = { ...doc.data(), id }
            bks.push(data)
        })

        dispatch(setBorrow(bks))


    } catch (error) {
        return {
            status: "error",
            message: error.message
        }
    }
}

export const returnBookAction = (obj)=>async(dispatch)=>{
    try {
        const updateingObj = {
            returned: true,
            returnedAt: Date.now()
        }
        
         await updateDoc(doc(db, "borrow",obj.id), updateingObj)
        const bookUpdate = {
            available: true,
            availableFrom: Date.now()
        }
        await updateDoc(doc(db, "books",obj.bookId), bookUpdate)
        

    } catch (error) {
        
    }
}