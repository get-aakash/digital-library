import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteBookAction } from '../../pages/books/bookAction'

const CustomRow = ({books}) => {
    const dispatch = useDispatch()
    const handleOnDelete = (id)=>{
        if(window.confirm("Are you sure to delete this book from the system?")){
            dispatch(deleteBookAction(id))
        }

    }
    
  return (
    <Row className='border p-1 py-4 rounded shadow-lg mb-3'>
    <Col sm={2}>
        <img src={books?.thumbnail} alt='' width="100%" />
    </Col>
    <Col><h4>{books?.title}</h4>
        <p>{books?.summary}</p>
        <div className="d-flex justify-content-between">
            <div className="ratings text-warning">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>

            </div>
            <Button variant="danger" onClick={()=>handleOnDelete(books.id)}>Delete</Button></div></Col>
    
  </Row>
  )
}

export default CustomRow
