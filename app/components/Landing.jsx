'use client'
import Image from 'next/image';
import logo from '../../public/logo.png';

const Landing = () => {

    const handleScroll = () => {
        window.scrollTo({
        //   top: document.body.scrollHeight,
          top: 800,
          behavior: 'smooth'
        });
      };

  return (
    <div className='mb-40 flex flex-col justify-center items-center'>
        <div className="flex flex-col items-center justify-center h-[90vh] gap-20">
            <div className='flex justify-center items-center gap-20'>
                <Image src={logo} alt="logo" height={100} width={100} />
            </div>

            <div className='flex flex-col items-center justify-center gap-3'>
                <p className='text-6xl'>write, plan, organize, play</p>
                <p className='text-l text-yellow-500 font-aurebeshPixel'>write, plan, prganize, play</p>
                <p className='text-4xl'>turn ideas into action</p>
                <p className='text-l text-yellow-500 font-aurebeshPixel'>turn ideas into action</p>
            </div>

        </div>
        
        <button className='relative bottom-4 border-2 border-dashed rounded-full text-2xl font-extrabold p-14 hover:bg-white hover:text-black transition duration-500' onClick={handleScroll}>
            &darr;
        </button>
    </div>
  );
}

export default Landing;
