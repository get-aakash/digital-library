import React, { useState } from 'react'
import DefaultLayout from '../../components/layout/DefaultLayout'
import { Button, Container, Form } from 'react-bootstrap'
import CustomInput from '../../components/custom-input/CustomInput'
import { type } from '@testing-library/user-event/dist/type'
import { toast } from 'react-toastify'


const SignUp = () => {
  const [form, setForm] = useState({})

  const handleOnChange = (e)=>{
    const {name,value} = e.target
    setForm({...form, [name]: value})
  }

  const handleOnSubmit = (e)=>{
    e.preventDefault()
    const {cPassword, password, email} = form
    if(cPassword !== password){
     return toast.error("Password doesnot match")
    }
    console.log(cPassword, password
    )
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
        <Form onSubmit={handleOnSubmit} className='border rounded shadow-lg p-5 m-auto py-5' style = {{width: "450px"}}>
          <h3 className='text-primary fw-bolder'>Join Our Library</h3>
        
        <Form.Text className='mt-5 py-2'>
          Create admin or user account
        </Form.Text>
        <div className="mt-5">
          {inputs.map((item,i)=>(
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}
          
        </div>
        <div className='d-grid mt-3'>
          <Button type='submit'>Join Library</Button>
        </div>
        </Form>
      </Container>
    </DefaultLayout>
  )
}

export default SignUp
