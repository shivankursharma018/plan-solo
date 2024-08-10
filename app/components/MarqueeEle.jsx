import React from 'react'
import Marquee from "react-fast-marquee";

const MarqueeEle = () => {
    
  return (
    <div className='mb-40'>
        <Marquee behavior="" direction="left" className='font-extrabold text-3xl text-zinc-300 dark:text-zinc-700'>
            <span className="hover:text-zinc-800 dark:hover:text-zinc-300">eating</span>&ensp;{'\u2022'}&ensp;
            <span className="hover:text-zinc-800 dark:hover:text-zinc-300">sleeping</span>&ensp;{'\u2022'}&ensp;
            <span className="hover:text-zinc-800 dark:hover:text-zinc-300">repeat</span>&ensp;{'\u2022'}&ensp;
            <span className="hover:text-zinc-800 dark:hover:text-zinc-300">take bounty</span>&ensp;{'\u2022'}&ensp;
            <span className="hover:text-zinc-800 dark:hover:text-zinc-300">escape from Jabba's palace</span>&ensp;{'\u2022'}&ensp;
            <span className="hover:text-zinc-800 dark:hover:text-zinc-300">lunch with chewbacca</span>&ensp;{'\u2022'}&ensp;
            <span className="hover:text-zinc-800 dark:hover:text-zinc-300">outsmart Boba Fett</span>&ensp;{'\u2022'}&ensp;
            <span className="hover:text-zinc-800 dark:hover:text-zinc-300">outrun the Empire</span>&ensp;{'\u2022'}&ensp;
        </Marquee>

        <Marquee behavior="" direction="right" className='font-extrabold text-3xl text-zinc-300 dark:text-zinc-700'>
            <span className="hover:text-zinc-800 dark:hover:text-zinc-300">eating</span>&ensp;{'\u2022'}&ensp;
            <span className="hover:text-zinc-800 dark:hover:text-zinc-300">sleep</span>&ensp;{'\u2022'}&ensp;
            <span className="hover:text-zinc-800 dark:hover:text-zinc-300">repeat</span>&ensp;{'\u2022'}&ensp;
            <span className="hover:text-zinc-800 dark:hover:text-zinc-300">fly the Millennium Falcon</span>&ensp;{'\u2022'}&ensp;
            <span className="hover:text-zinc-800 dark:hover:text-zinc-300">smuggle some spice</span>&ensp;{'\u2022'}&ensp;
            <span className="hover:text-zinc-800 dark:hover:text-zinc-300">lunch with chewbacca</span>&ensp;{'\u2022'}&ensp;
            <span className="hover:text-zinc-800 dark:hover:text-zinc-300">dinner with Leia</span>&ensp;{'\u2022'}&ensp;
            <span className="hover:text-zinc-800 dark:hover:text-zinc-300">find the best cantina</span>&ensp;{'\u2022'}&ensp;
        </Marquee>
    </div>
  )
}

export default MarqueeEle