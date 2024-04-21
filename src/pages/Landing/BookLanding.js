import React, { useEffect } from 'react'
import DefaultLayout from '../../components/layout/DefaultLayout'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getBooksAction } from '../books/bookAction'
import Ratings from '../../components/ratings/Ratings'

const BookLanding = () => {
  const { bookId } = useParams()
  const dispatch = useDispatch()
  const { books } = useSelector(state => state.book)
  const {selectedBook} = useSelector((state)=>state.book)
  const navigate = useNavigate()
  const {user} = useSelector((state)=>state.user)
  //   useEffect(()=>{
  //     !books.length && dispatch(getBooksAction())
  // if(books.length)
  //   },[books,dispatch])

  useEffect(()=>{
    !selectedBook.id&& navigate("/")

  },[selectedBook,navigate])

  const {title, thumbnail, summary, ratings, available} = selectedBook
  return (
    <DefaultLayout>
      <Container>
        <div className="mt-5">
        <Row>
          <Col sm="5">
          <img src={thumbnail} alt=""  width="100%" className='border rounded p-1'/>
          </Col>
          <Col sm="7">
            <div className="fw-bold fs-1">
              {title}
            </div>
            <Ratings ratings={ratings} />
            <p>{summary}</p>
            <p>
              {user.uid?(
                available ?(
              <Button variant='primary'>Borrow</Button>
            ):(
              "Available from:"
            )
          ):(<Link to="/signIn">Login to Borrow this book</Link>)}
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
