import React from 'react'
import { useSelector } from 'react-redux'
import AdminLayout from '../../components/layout/AdminLayout'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BookTable from '../../components/book-table/BookTable'

const BookList = () => {
  const {user} = useSelector(state=>state.user)
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
          <input type="text" placeholder='search book title' className='form-control' />
          </Form.Group>
          
        <Link to="/admin/new">  <Button variant='primary'>+Add New Book</Button></Link>
        </div>
        <hr />
        <BookTable />
        </Container>
    </AdminLayout>
  )
}

export default BookList
