import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../components/layout/DefaultLayout'
import { Button, Container, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { auth, db } from '../../firebase-config/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { collection, doc, getDoc, query, where } from 'firebase/firestore'
import { setUser } from './userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CustomInput from '../../components/custom-input/CustomInput'

const SignIn = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({})
  const navigate = useNavigate()
  const { user } = useSelector(state => state.user)
  useEffect(() => {
    user?.uid && navigate("/dashboard")
  }, [user?.uid, navigate])
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    try {

      const { password, email } = form


      const userPending = signInWithEmailAndPassword(auth, email, password)

      toast.promise(userPending, {
        pending: "Please Wait!!",

      })
      const { user } = await userPending

      const { uid } = user

      const userRef = doc(db, 'users', uid)
      const docSnap = await getDoc(userRef)
      console.log(docSnap)
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
      toast.error(error.message)

    }
  }
  const inputs = [
    {
      label: "Email",
      name: 'email',
      placeholder: "sam@sam.com",
      type: "email",
      required: true

    },
    {
      label: "Password",
      name: 'password',
      placeholder: "******",
      type: "password",
      required: true

    },
  ]
  return (
    <DefaultLayout>
      <Container className='mt-5'>
        <Form onSubmit={handleOnSubmit} className='border rounded shadow-lg p-5 m-auto py-5' style={{ width: "450px" }}>
          <h3 className='text-primary fw-bolder'>Welcome to Our Library</h3>


          <div className="mt-5">

            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}

          </div>

          <div className='d-grid mt-3'>
            <Button type='submit'>Login</Button>
          </div>
        </Form>
      </Container>
    </DefaultLayout>
  )
}

export default SignIn
