'use client'
import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
// import PacmanLoader from "react-spinners/PacmanLoader";
import Spinner from '../components/Spinner'
import AddTask from '../components/AddTask';
import NotLogin from '../components/NotLogin';

const page = () => {

  const { user } = UserAuth()
  const [loading, setloading] = useState(true)

  useEffect(() => {
    const checkAunthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000))
      setloading(false)
    }
    checkAunthentication()
  }, [user])
  
  return (
    <div className='font-mono'>
      {loading ? (
        <div className='flex justify-center items-center h-screen'>
            <Spinner />
        </div>
      ) : !user ? (
        <div className='w-full absolute top-20'>
            <NotLogin />
        </div>
      ) : (
        <div className='w-full absolute top-20'>
            <AddTask />
        </div>
      )}
    </div>
  )
}

export default page