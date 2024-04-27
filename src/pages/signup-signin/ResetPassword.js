import React, { useState } from 'react'
import DefaultLayout from '../../components/layout/DefaultLayout'
import { Button, Form, Placeholder } from 'react-bootstrap'
import CustomInput from '../../components/custom-input/CustomInput'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../firebase-config/firebaseConfig'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {
    const [formData, setFormData] = useState({})
    const navigate = useNavigate()
    const inputs = [{

        label: "Email",
        name: "email",
        type: "email",
        Placeholder: "Enter your email here",
        required: true
    }]
    const handleOnChange = (e)=>{
        const {name,value} = e.target
        setFormData({...formData,[name]:value})

    }
    const handleOnSubmit = (e)=>{
        e.preventDefault()
        sendPasswordResetEmail(auth,formData.email).then(data=>{
            alert("Password reset link sent to your email")
            navigate("/signin")
        }).catch(error=>{
            alert(error.code)
        })
    }
    return (
        <DefaultLayout>
            <div className="mt-3 w-25 border p-3 rounded m-auto">
                <h3>Reset Your password here!!!</h3>
                <hr />
                <Form onSubmit={handleOnSubmit} className="mt-3">
                    {inputs.map((item, i) => <CustomInput key={i}{...item} onChange={handleOnChange}/>)}
                    <div className="mt-3 d-grid">
                        <Button type='submit'>Password Reset Link</Button>
                    </div>
                </Form>
            </div>
        </DefaultLayout>
    )
}

export default ResetPassword
