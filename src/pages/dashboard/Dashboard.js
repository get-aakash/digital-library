import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const {user} = useSelector(state=>state.user)
  console.log(user)
  return (
    <AdminLayout>
      Dashboard
    </AdminLayout>
  )
}

export default Dashboard
