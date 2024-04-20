import React from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import CustomRow from './CustomRow'

const BookTable = ({books}) => {
    
  return (
    <>
    <Row className='fw-bolder'>
        <Col>Thumbnail</Col>
        <Col>Details</Col>
    </Row>
    <hr />
   {books.map((item)=>(
    <CustomRow key={item.id} books={item} />
   ))}
    
    

    </>
    
  )
}

export default BookTable
