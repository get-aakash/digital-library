import React, { useState } from 'react'
import DefaultLayout from '../../components/layout/DefaultLayout'
import { Button, Container, Form } from 'react-bootstrap'
import CustomInput from '../../components/custom-input/CustomInput'
import { type } from '@testing-library/user-event/dist/type'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, db } from '../../firebase-config/firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from './userSlice'


const SignUp = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({})
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const handleOnChange = (e) => {
    const { name, value } = e.target
    if(name==="password"){
      setError("")
      value.length < 6 && setError("password must be 6 characters long")
      !/[0-9]/.test(value)&& setError("Number is required")
      !/[A-Z]/.test(value)&& setError("Upper Case is required")
      !/[a-z]/.test(value)&& setError("Lower Case is required")
    }
    setForm({ ...form, [name]: value })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    try {

      const { cPassword, password, email, name } = form
      if (cPassword !== password) {
        return toast.error("Password doesnot match")
      }

      const userPending = createUserWithEmailAndPassword(auth, email, password)

      toast.promise(userPending, {
        pending: "Please Wait!!",
        success: "User Created",
        error: "User Creation failed"
      })
      const { user } = await userPending
      console.log(user)
      if (user?.uid) {
        updateProfile(user, {
          displayName: name
        })
      }

      const obj = {
        email, name,role:form.role
      }
      await setDoc(doc(db, 'users', user.uid), obj)
      dispatch(setUser({ ...obj, uid: user.uid, role: form.role }))
      toast.success("Your account has been created redirecting to dashboard!!")
      navigate("/dashboard")

    } catch (error) {
      toast.error(error.message)

    }
  }
  const inputs = [{
    label: "Name",
    name: 'name',
    placeholder: "sam",
    required: true

  },
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
  {
    label: "Confirm Password",
    name: 'cPassword',
    placeholder: "*****",
    type: "password",
    required: true

  },]
  return (
    <DefaultLayout>
      <Container className='mt-5'>
        <Form onSubmit={handleOnSubmit} className='border rounded shadow-lg p-5 m-auto py-5' style={{ width: "450px" }}>
          <h3 className='text-primary fw-bolder'>Join Our Library</h3>

          <Form.Text className='mt-5 py-2'>
            Create admin or user account. 
          </Form.Text>
          <div className="mt-5">
            <Form.Group className='mb-3'>
              <label className="mb-2">Account Type</label>
              <Form.Select name="role" onChange={handleOnChange}>
                <option value="" >Select User type</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </Form.Select>
            </Form.Group>
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}

          </div>
          <Form.Group className='mt-3'>
            <Form.Text>
              Your password must be atleast 6 characters including number, upper case and lower case characters.
              {error && <ul>
                <li className='text-danger fw-bolder'>{error}</li>
                </ul>}
            </Form.Text>

          </Form.Group>

          <div className='d-grid mt-3'>
            <Button type='submit'>Join Library</Button>
          </div>
        </Form>
      </Container>
    </DefaultLayout>
  )
}

export default SignUp
