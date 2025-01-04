import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './TeacherNavbar/Navbar'

const TeacherLayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default TeacherLayout