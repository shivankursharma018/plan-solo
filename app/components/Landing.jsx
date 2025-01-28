'use client'
import Image from 'next/image';
import logo from '../../public/logo.png';
import { TypeAnimation } from 'react-type-animation';

const Landing = () => {

    const handleScroll = () => {
        window.scrollTo({
        //   top: document.body.scrollHeight,
          top: 800,
          behavior: 'smooth'
        });
      };

      const var1 = 'plan-solo';
      const var2 = 'プランソロ';
    //   const var2 = <span className='fontFamily-aurebeshPixel'>'plan-solo'</span>;

    return (
    <div className='mb-40 flex flex-col justify-center items-center'>
            <div className="flex flex-col items-center justify-center h-[90vh] ">
                    <div className='flex justify-center items-center'>
                            <Image src={logo} alt="logo" height={100} width={100} />
                    </div>

                    <div className='font-extrabold font-sans flex flex-col items-center justify-center gap-5'>
                            <TypeAnimation
                            sequence={[
                                var1, 5555, 
                                var2, 5555,
                            ]}
                            style={{ fontSize: '6rem' }}
                            repeat={Infinity}
                            />

                            <p className='w-4/5 text-l text-yellow-500 font-aurebeshPixel text-center mb-5'>turn ideas into action </p>
                            
                            <p className='text-2xl'>turn ideas into action</p>
                            <p className='text-2xl'>A Star Wars themed To-Do list application</p>

                    </div>

            </div>
            
            <button className='relative bottom-4 border-2 border-dashed rounded-full text-2xl font-extrabold p-14 hover:bg-white hover:text-black transition duration-500' onClick={handleScroll}>
                    &darr;
            </button>
    </div>
);
}

export default Landing;
