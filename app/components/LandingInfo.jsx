import React from 'react'
import Image from 'next/image'
import macbook from '../../public/macbook.png'
import ipad from '../../public/ipad.png'

const LandingInfo = () => {
  return (
    <div className='mb-40'>

        <div className="flex flex-col items-center justify-center h-[90vh] gap-20">
        
          <div className='text-4xl mb-20'>
          
            users
          </div>
          <div className='text-4xl mb-20'>
            visits
          </div>
        
        </div>

        <div className=' mx-auto text-center mb-10'>
            <section className='flex justify-center items-baseline'>
                <Image src={macbook} alt='laptop-display' className='h-[45vh] w-auto'></Image>
                <Image src={ipad} alt='tablet-display' className='h-[30vh] w-auto'></Image>
            </section>
        </div>
        
    </div>
  )
}

export default LandingInfo