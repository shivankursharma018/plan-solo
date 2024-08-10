import React from 'react'
import Image from 'next/image'
import macbook from '../../public/macbook.png'
import ipad from '../../public/ipad.png'

const LandingInfo = () => {
  return (
    <div className='mb-40'>
        <div className='container mx-auto text-center'>
            <h2 className='text-4xl mb-20'>Features</h2>
        </div>

        <div className='container mx-auto text-center mb-10'>
            <p className='text-xl mb-5'>sync your notes across all your devices</p>
            <section className='flex justify-center items-baseline'>
                <Image src={macbook} alt='laptop-display' className='h-[45vh] w-auto'></Image>
                <Image src={ipad} alt='tablet-display' className='h-[30vh] w-auto'></Image>
            </section>
        </div>
        
    </div>
  )
}

export default LandingInfo