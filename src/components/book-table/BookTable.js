import React from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import CustomRow from './CustomRow'

const BookTable = () => {
  return (
    <>
    <Row className='fw-bolder'>
        <Col>Thumbnail</Col>
        <Col>Details</Col>
    </Row>
    <CustomRow />
    <CustomRow />
    <CustomRow />
    <CustomRow />
    <CustomRow />

    </>
    
  )
}

export default BookTable
