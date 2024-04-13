import React from 'react'
import DefaultLayout from '../../components/layout/DefaultLayout'
import Hero from '../../components/layout/home/Hero'
import { CustomCard } from '../../components/custom-card/CustomCard'
import { Container, Form } from 'react-bootstrap'

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
         <div className="d-flex gap-4 flex-wrap">
         <CustomCard title="Clean Code" summary="Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code." img="https://m.media-amazon.com/images/I/51E2055ZGUL._AC_UF1000,1000_QL80_.jpg" />
        <CustomCard title="Clean Code" summary="Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code." img="https://m.media-amazon.com/images/I/51E2055ZGUL._AC_UF1000,1000_QL80_.jpg" />
        <CustomCard title="Clean Code" summary="Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code." img="https://m.media-amazon.com/images/I/51E2055ZGUL._AC_UF1000,1000_QL80_.jpg" />
         </div>
        
      </div>
      </Container>
      
    </DefaultLayout>
  )
}

export default Home
