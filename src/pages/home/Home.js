import React from 'react'
import DefaultLayout from '../../components/layout/DefaultLayout'
import Hero from '../../components/layout/home/Hero'
import { CustomCard } from '../../components/custom-card/CustomCard'
import { Container, Form } from 'react-bootstrap'
import HomeList from '../../components/home-list/HomeList'

const Home = () => {
  return (
    <DefaultLayout>
      <Hero />
      <Container>
      <div className="card-section ">
        <div className="py-4 d-flex justify-content-between">
          <h3>Browse Library</h3>
          <div className="w-10">
          <Form.Control type="text" placeholder='search...' />
          </div>
          
        </div>
         
        <HomeList />
      </div>
      </Container>
      
    </DefaultLayout>
  )
}

export default Home
