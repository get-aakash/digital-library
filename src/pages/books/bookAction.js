import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, where } from "firebase/firestore"
import { getBooksSuccess, setReviews, setSelectedBook } from "./bookSlice"
import { db } from "../../firebase-config/firebaseConfig"
import { toast } from "react-toastify"




export const getBooksAction = () => async (dispatch) => {
    try {

        let bks = []
        const q = query(collection(db, "books"))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            const { id } = doc
            const data = { ...doc.data(), id }
            bks.push(data)
        })

        dispatch(getBooksSuccess(bks))


    } catch (error) {
        return {
            status: "error",
            message: error.message
        }
    }
}
export const addBookAction = (formData) => async (dispatch) => {
    try {

        const docRef = await addDoc(collection(db, 'books'), formData)
        if (docRef.id) {
            dispatch(getBooksAction()) && toast.success("Book added successfully!!!!")
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

export const deleteBookAction = (id) => async (dispatch) => {
    try {

        await deleteDoc(doc(db, 'books', id))
        dispatch(getBooksAction()) && toast.success("Book deleted succssfully")

    } catch (error) {
        return {
            status: "error",
            message: error.message
        }

    }
}



export const updateBookAction = ({ bookId, ...rest }) => async (dispatch) => {
    try {


        const updatePending = setDoc(doc(db, "books", bookId), rest, {
            merge: true
        })
        toast.promise(updatePending, {
            pending: "please Wait !!!"
        })

        await updatePending
        toast.success("Book has been Borrowed!!!")
        await dispatch(getBooksAction())
        dispatch(setSelectedBook(bookId))


    } catch (error) {
        return {
            status: "error",
            message: error.message
        }
    }
}


export const addBorrowAction = (formData) => async (dispatch) => {

    try {

        const docRef = await addDoc(collection(db, 'borrow'), formData)

        if (docRef.id) {

            const obj = {
                bookId: formData.bookId,
                available: false,
                availableFrom: formData.returnedAt
            }
            dispatch(updateBookAction(obj))
            return
        }
        toast.error("unable to borrow book")
    } catch (error) {
        return {
            status: "error",
            message: error.message
        }
    }
}



export const addReviewsAction = (data)=>async(dispatch)=>{
    console.log(data)
    try {
        const response = await addDoc(collection(db,"reviews"),data)

        if(response?.id){
            toast.success("Your reviews is added")
            dispatch(getReviewAction())
            return
        }
        toast.error("unable to add reviews, Please try again")
    } catch (error) {
        toast.error(error.message)
    }
}

export const getReviewAction = () => async (dispatch) => {
    try {

        let reviews = []
        const q = query(collection(db, "reviews"))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            const { id } = doc
            const data = { ...doc.data(), id }
            reviews.push(data)
        })

        dispatch(setReviews(reviews))

    } catch (error) {
        return {
            status: "error",
            message: error.message
        }
    }
}

export const diplayReviewAction = (bookId)=>async(dispatch)=>{
    console.log("hello")
    try {
        const q = query(collection(db, "reviews"), where ("bookId", "==", bookId))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc)=>{
            const data = (doc.id,doc.data())
            console.log(data)
        })
        
    } catch (error) {
        return {
            status: "error",
            message: error.message
        }
        
    }
}