import React, { useEffect } from 'react'
import DefaultLayout from '../../components/layout/DefaultLayout'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addBorrowAction, getBooksAction } from '../books/bookAction'
import Ratings from '../../components/ratings/Ratings'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase-config/firebaseConfig'


const defaultBorrowingDays = 14
const BookLanding = () => {
  const { bookId } = useParams()
  const dispatch = useDispatch()
  const { books } = useSelector(state => state.book)

  const { selectedBook } = useSelector((state) => state.book)
  console.log(selectedBook)
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.user)
  //   useEffect(()=>{
  //     !books.length && dispatch(getBooksAction())
  // if(books.length)
  //   },[books,dispatch])

  useEffect(() => {
    !selectedBook.id && navigate("/")

  }, [selectedBook, navigate])


  const { title, thumbnail, summary, ratings = 0, author, published, available, availableFrom } = selectedBook

  const handleOnBorrow = async (e) => {
    
    const today = new Date()
    const returnedAt = today.setDate(today.getDate()+ defaultBorrowingDays)
    const obj = {
      bookTitle: title,
      bookId: selectedBook.id,
      userId: user.uid,
      userName: user.name,
      borrowedAt: Date.now(),
      returnedAt
    }
    console.log(obj, "hello")
    dispatch(addBorrowAction(obj))

  }
  const date = new Date(availableFrom).toLocaleDateString()
  return (
    <DefaultLayout>
      <Container>
        <div className="mt-5">
          <Row>
            <Col sm="5">
              <img src={thumbnail} alt="" width="100%" className='border rounded p-1' />
            </Col>
            <Col sm="7">
              <div className="fw-bold fs-1">
                {title}
              </div>
              <Ratings ratings={ratings} />
              <p>{author}-{published}</p>

              <p>{summary}</p>
              <p>
                {user.uid ? (
                  available ? (
                    <Button variant='primary' onClick={handleOnBorrow}>Borrow</Button>
                  ) : (
                    <span className='bg-info p-1 rounded text-primary'>Available from:  {date}</span>)
                ) : (<Link to="/signin">Login to Borrow</Link>)}
              </p>
            </Col>
          </Row>
          <h3>Reviews</h3>
          <Row className='mt-3 border rounded p-3 mb-2'>
            <Col sm='3'>
              <div className="avatar">AA</div>
            </Col>
            <Col sm='9'>
              <div className="message">
                <Ratings ratings={5} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugit tempore eveniet accusamus deserunt ipsa sunt cupiditate qui voluptates sint.</p>
              </div>
            </Col>

          </Row>
          <Row className='mt-3 border rounded p-3 mb-2'>
            <Col sm='3'>
              <div className="avatar">AA</div>
            </Col>
            <Col sm='9'>
              <div className="message">
                <Ratings ratings={5} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugit tempore eveniet accusamus deserunt ipsa sunt cupiditate qui voluptates sint.</p>
              </div>
            </Col>

          </Row>
          <Row className='mt-3 border rounded p-3 mb-2'>
            <Col sm='3'>
              <div className="avatar">AA</div>
            </Col>
            <Col sm='9'>
              <div className="message">
                <Ratings ratings={5} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugit tempore eveniet accusamus deserunt ipsa sunt cupiditate qui voluptates sint.</p>
              </div>
            </Col>

          </Row>
          <Row className='mt-3 border rounded p-3 mb-2'>
            <Col sm='3'>
              <div className="avatar">AA</div>
            </Col>
            <Col sm='9'>
              <div className="message">
                <Ratings ratings={5} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugit tempore eveniet accusamus deserunt ipsa sunt cupiditate qui voluptates sint.</p>
              </div>
            </Col>

          </Row>
        </div>
      </Container>
    </DefaultLayout>
  )
}

export default BookLanding
