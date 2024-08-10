import React from 'react'
import Image from 'next/image'
import faces from '../../public/faces.png'

const CallToAction = () => {
  return (
    <div>
      <div className='mb-40 flex justify-center items-center'>
        <div className='w-3/4 p-10 border-2 rounded-full border-dashed flex flex-col justify-center items-center'>
            <p className='text-3xl mb-5'>save your progress by logging-in</p>
            <p className='text-xl text-zinc-400'>sign-up for our product for productivity</p>
        </div>
      </div>
      <Image src={faces}></Image>
    </div>
  )
}

export default CallToAction