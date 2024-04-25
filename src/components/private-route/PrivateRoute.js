import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children, admin}) => {
    const {user}= useSelector(state=>state.user)
   
    if(admin && user.role !== "admin"){
      return <h1>You don not have permission here</h1>

    }
  return user?.uid ? children :<Navigate to="/signin" />
}

export default PrivateRoute
