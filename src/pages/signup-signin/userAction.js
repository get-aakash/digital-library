import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase-config/firebaseConfig"
import { setUser } from "./userSlice"
import { toast } from "react-toastify"


export const  autoLogin = (uid)=>async(dispatch)=>{
    try {
        const userRef = doc(db, 'users', uid)
      const docSnap = await getDoc(userRef)
      if (docSnap.exists()) {
        const dbUser = docSnap.data()
        console.log("docSnap:", docSnap.data())
        const userObj = {
          uid, ...dbUser
        }
        console.log(userObj)

        if (userObj.uid) {
          dispatch(setUser(userObj))
          toast.success("Your account has been created redirecting to dashboard!!")
          return
        }
      }
      toast.error("unable to login, Invalid details")
    } catch (error) {
        
    }
}