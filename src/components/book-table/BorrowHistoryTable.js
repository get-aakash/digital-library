import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getBorrowAction, returnBookAction } from '../../pages/borrow-history/borrowAction'

const BorrowHistoryTable = () => {
    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.user)
    const {borrow} = useSelector((state)=>state.borrow)
    console.log(borrow)
    useEffect(()=>{
dispatch(getBorrowAction(user.uid))
    },[])

    const handleOnReturn = (obj)=>{
      console.log(obj)
dispatch(returnBookAction(obj))
    }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Borrowed Date</th>
          <th>Returning Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {borrow?.map(({bookTitle, borrowedAt, returnedAt, returned,id, bookId})=>(
            <tr>
          <td>{bookTitle}</td> 
          <td>{new Date(borrowedAt).toLocaleDateString()}</td>
          <td>{new Date(returnedAt).toLocaleDateString()}</td>
          <td>
            {returned ? <Button>Review Now</Button>:  <Button onClick={()=>handleOnReturn({bookId,id})}>Return</Button>}
           
          </td>
        </tr>
        ))}
        
      
      </tbody>
    </Table>
  )
}

export default BorrowHistoryTable
