import React, { useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { Button, Container, Form, Placeholder, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CustomInput from '../../components/custom-input/CustomInput'
import { addBookAction } from './bookAction'
import { Link, useNavigate } from 'react-router-dom'

const initialState = {
  thumbnail: "",
  title: "",
  summary: "",
  ratings: "",
  author: "",
  published: "",
  available: true,
  availableFrom: Date()
}
const NewBook = () => {
  const [form, setForm] = useState(initialState)
  const navigate = useNavigate()
  const {user} = useSelector(state=>state.user)
  const {isLoading} = useSelector(state=>state.book)
  const dispatch = useDispatch()
  if(user.role !== "admin"){
    console.log(user.role)
    return <h1>Unauthorised Login</h1>
  }
  const handleOnChange = (e)=>{
    const {name,value} = e.target
    setForm({...form,[name]:value})
  }
  const handleOnSubmit = (e)=>{
    e.preventDefault()
    dispatch(addBookAction(form))
    navigate('/admin/books')
  }

  const inputs = [
    {
      name: 'title',
      type: "text",
      Placeholder: 'Book Title',
      label: "Book Name",
      required: true,
    },
    {
      name: 'author',
      type: "text",
      Placeholder: 'Author Name',
      label: "Author",
      required: true,
    },
    {
      name: 'published',
      type: "number",
      label: "Published Year",
      required: true,
    },
    {
      name: 'ratings',
      type: "number",
      label: "Ratings",
      min: "1",
      max: "5",
      required: true,
    },
    {
      name: 'thumbnail',
      type: "url",
      Placeholder: 'https://',
      label: "Image",
      required: true,
    },
    {
      name: 'summary',
      type: "text",
      as:'textarea',
      Placeholder: 'Book Summary',
      label: "Book Summary",
      rows: '5',
      required: true,
    },
   
  ]
 
  return (
    <AdminLayout>
      <Container>
        
        <Form onSubmit={handleOnSubmit} className='w-75 m-auto border rounded p-2 mt-5'>
          <Link to="/admin/books"> <Button variant='secondary'>&lt;Back</Button></Link>
       
        <h4 className='mt-4'>Add New Book</h4>
        <hr />
        {
          inputs.map((item,i)=><CustomInput key={i} {...item} onChange={handleOnChange}/>)
        }
        <div className="py-3 d-grid">
          <Button type='submit' variant="primary">
            {isLoading ?(
              <Spinner animation='grow' variant="light" />
            ):("Submit New Book")}
            </Button></div>
          </Form>
      </Container>
    </AdminLayout>
  )
}

export default NewBook
