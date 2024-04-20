import React from 'react'
import { CustomCard } from '../custom-card/CustomCard'
import { useSelector } from 'react-redux'

const HomeList = () => {
    const {books} = useSelector((state)=>state.book)
    console.log(books)
  return (
    <div className="d-flex gap-4 flex-wrap">
        {books?.map((item,i)=> <CustomCard key={i} {...item} />)}
         
       
         </div>
  )
}

export default HomeList
