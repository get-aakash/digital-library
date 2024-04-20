import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const CustomRow = ({book}) => {
    
  return (
    <Row className='border p-1 py-4 rounded shadow-lg mb-3'>
    <Col sm={2}>
        <img src='https://m.media-amazon.com/images/I/41wuB-s8vRL._SL500_.jpg' alt='' width="100%" />
    </Col>
    <Col><h4>Lorem ipsum dolor sit amet consectetur.</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, praesentium nobis! Voluptates possimus aliquam blanditiis.</p>
        <div className="d-flex justify-content-between">
            <div className="ratings text-warning">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>

            </div>
            <Button variant="warning">Edit</Button></div></Col>
    
  </Row>
  )
}

export default CustomRow
