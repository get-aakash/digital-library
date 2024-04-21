import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../components/layout/DefaultLayout'
import Hero from '../../components/layout/home/Hero'
import { CustomCard } from '../../components/custom-card/CustomCard'
import { Container, Form } from 'react-bootstrap'
import HomeList from '../../components/home-list/HomeList'
import { useDispatch, useSelector } from 'react-redux'
import { getBooksAction } from '../books/bookAction'

const Home = () => {
  const [display, setDisplay] = useState([])
    const dispatch = useDispatch()
    const {books} = useSelector((state)=>state.book)
    useEffect(()=>{
     
        setDisplay(books)
        !books.length && dispatch(getBooksAction())
        
        
    },[ dispatch, books])

    const handleOnChange = (e)=>{
      const {value} = e.target
      const matchingBooks = books.filter(({title})=>title.toLowerCase().includes(value.toLowerCase()))
      setDisplay(matchingBooks)
    }
  return (
    <DefaultLayout>
      <Hero />
      <Container>
      <div className="card-section ">
        <div className="py-4 d-flex justify-content-between">
          <h3>Browse Library</h3>
          <div className="w-10">
          <Form.Control type="text"  placeholder='search...' onChange={handleOnChange}/>
          </div>
          
        </div>
         <div className="mt-1">
          {display.length} book(s) found!!!
         </div>
        <HomeList display={display}/>
      </div>
      </Container>
      
    </DefaultLayout>
  )
}

export default Home
