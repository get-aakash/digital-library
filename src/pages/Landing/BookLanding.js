import React from 'react'
import DefaultLayout from '../../components/layout/DefaultLayout'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const BookLanding = () => {
  const {bookId} = useParams()
  return (
    <DefaultLayout>
      <Container>
{bookId}
      </Container>
    </DefaultLayout>
  )
}

export default BookLanding
