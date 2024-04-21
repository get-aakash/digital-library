import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminLayout from '../../components/layout/AdminLayout'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BookTable from '../../components/book-table/BookTable'
import { getBooksAction } from './bookAction'

const BookList = () => {
  const dispatch = useDispatch()
  const [display, setDisplay] = useState([])
  const {user} = useSelector((state)=>state.user)
  const {books} = useSelector((state)=>state.book)
  console.log(books)
  useEffect(()=>{
     !display.length && dispatch(getBooksAction())
    setDisplay(books)

  },[ dispatch, books])
  const handleOnChange = (e)=>{
    const {value} = e.target
    const matchingBooks = books.filter(({title})=>title.toLowerCase().includes(value.toLowerCase()))
    setDisplay(matchingBooks)
  }
  if(user.role !== "admin"){
    console.log(user.role)
    return <h1>Unauthorised Login</h1>
  }

  
  return (
    <AdminLayout>
      <Container>
        <h3 className='mt-5'> Book Management </h3>
        <hr />
        <div className="d-flex justify-content-between">
          <Form.Group>
          <input type="text" placeholder='search book title' className='form-control' onChange={handleOnChange}/>
          </Form.Group>
          
        <Link to="/admin/new">  <Button variant='primary'>+Add New Book</Button></Link>
        </div>
        <div className="mt-1">{display.length} book(s) found!!</div>
        <hr />
        <BookTable books={display} />
        </Container>
    </AdminLayout>
  )
}

export default BookList
