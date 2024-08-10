import React from 'react'

const Spinner = () => {
  return (
    <div>
        <div className='h-screen w-full flex items-center justify-center'>
          <div className='h-[50px] w-[50px] border-2 border-t-red-500 rounded-full animate-spin' role="status"></div>
        </div>
    </div>
  )
}

export default Spinner