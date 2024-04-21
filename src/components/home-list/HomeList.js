import React, { useEffect, useState } from 'react'
import { CustomCard } from '../custom-card/CustomCard'
import { useDispatch, useSelector } from 'react-redux'
import { getBooksSuccess } from '../../pages/books/bookSlice'
import { getBooksAction } from '../../pages/books/bookAction'

const HomeList = ({display}) => {
    
  return (
    <div className="d-flex gap-4 flex-wrap">
        {display?.map((item,i)=> <CustomCard key={i} {...item} />)}
         
         </div>
  )
}

export default HomeList
