'use client'
import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import PacmanLoader from "react-spinners/PacmanLoader";
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
    <div>
      {loading ? (
        <div className='flex justify-center items-center h-screen'>
            <PacmanLoader color="#fce7a3" />
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