import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import CustomInput from '../custom-input/CustomInput'
import { useDispatch, useSelector } from 'react-redux'
import { addReviewsAction } from '../../pages/books/bookAction'

const ReviewForm = ({selectedId}) => {
    const [form, setForm] = useState({})
    const {user}= useSelector((state)=>state.user)
    const dispatch = useDispatch()

    const handleOnChange = (e)=>{
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    const handleOnSubmit = (e)=>{
        e.preventDefault()
        const obj = {
            ...form, ...selectedId, userId:user.uid, userName:user.name
        }
        dispatch(addReviewsAction(obj))
    }
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <CustomInput onChange={handleOnChange} label="Ratings" name="ratings" required min="1" max="5"  type="number"/>
        <CustomInput onChange={handleOnChange} label="Review" name="review" required as="textarea" rows='10' />
        <div className="d-grid">
            <Button type="submit" variant="primary">Submit Review</Button>
        </div>
      </Form>
    </div>
  )
}

export default ReviewForm

