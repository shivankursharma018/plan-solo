'use client'
import React, { useEffect, useState } from 'react'
import Landing from './components/Landing'
import LandingInfo from './components/LandingInfo'
import MarqueeEle from './components/MarqueeEle'
import CallToAction from './components/CallToAction'

import { AnimatedBackground } from 'animated-backgrounds';

const page = () => {
  // const { user } = UserAuth()
  // const [loading, setloading] = useState(true)

  // useEffect(() => {
  //   const checkAunthentication = async () => {
  //     await new Promise((resolve) => setTimeout(resolve, 5000))
  //     setloading(false)
  //   }
  //   checkAunthentication()
  // }, [user])


  return (
    <div className='font-mono'>
      {/* <div>
      {loading ? (
        <Spinner />
      ) : !user ? (
        <div>you are not logged in</div>
      ) : (
        <div>you are on your dashboard</div>
      )}
    </div> */}

      <div>
        <AnimatedBackground animationName="electricStorm" 
        blendMode="normal" />
          <Landing />
          <LandingInfo />
          <MarqueeEle />
          <CallToAction />{/* Your app content */}
      </div>
      
    </div>
  )
}

export default page