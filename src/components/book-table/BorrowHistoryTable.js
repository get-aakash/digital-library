import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getBorrowAction, returnBookAction } from '../../pages/borrow-history/borrowAction'
import ReviewForm from '../review-form/ReviewForm'
import { PopUp } from '../popup/PopUp'
import { setModal } from '../../system/systemSlice'

const BorrowHistoryTable = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  const { borrow } = useSelector((state) => state.borrow)
  const {reviews} = useSelector((state)=>state.book)

  const [selectedId, setSelectedId] = useState({})
  useEffect(() => {
    dispatch(getBorrowAction(user.uid))
  }, [])

  const handleOnReturn = (obj) => {
    console.log(obj)
    dispatch(returnBookAction(obj))
  }

  const handleOnReview = (obj) => {
    setSelectedId(obj)
    dispatch(setModal(true))
  }

  const listOfReviewedBooksBorrowedId = reviews.map((item)=>item.borrowId)
  return (
    <>
      <PopUp title="Leave your Reviews">
        <ReviewForm selectedId={selectedId} />
      </PopUp>

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
          {borrow?.map(({ bookTitle, borrowedAt, returnedAt, returned, id, bookId }) => (
            <tr>
              <td>{bookTitle}</td>
              <td>{new Date(borrowedAt).toLocaleDateString()}</td>
              <td>{new Date(returnedAt).toLocaleDateString()}</td>
              <td>
                {returned ? <Button onClick={() => handleOnReview({bookId,borrowId:id})} disabled={listOfReviewedBooksBorrowedId.includes(id)}>Review Now</Button> : <Button onClick={() => handleOnReturn({ bookId, id })}>Return</Button>}

              </td>
            </tr>
          ))}


        </tbody>
      </Table>
    </>

  )
}

export default BorrowHistoryTable
