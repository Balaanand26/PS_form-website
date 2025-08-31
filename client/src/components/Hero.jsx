import React from 'react'
import access from '../assets/images/acess.jpg'
import game from '../assets/images/games.png'

const Hero = () => {
  return (
    <section className='mt-4'>
        <div className='relative w-full h-screen shadow'>
            <img src={access} alt="PS5 & accessories" className='w-full h-full object-cover absolute top-0 left-0 z-[-1]'/>

            <div className='relative flex flex-col items-end justify-center text-center h-screen md:mr-44 px-4'>
                <p className='font-bold text-xl md:text-3xl'>Meet the PlayStation_5 family</p>
                <div className='mr-6 md:mr-36 mt-4'>
                    <button className='font-semibold px-6 py-2 border-2 border-black rounded-full hover:bg-black hover:text-white mr-4 text-sm md:base'>Learn more</button>
                    <button className='font-semibold px-6 py-2 border-2 border-white rounded-full bg-blue-600 text-white hover:bg-blue-800 hover:text-white hover:border-blue-800 text-sm md:base'>Shop PS_5</button>
                </div>
            </div>
        </div>
        <div className='relative w-full h-screen mt-2'>
            <img src={game} alt="PS5 & accessories" className='w-full h-screen object-cover absolute top-0 left-0 z-[-1]'/>

            <div className='relative flex flex-col items-center justify-end text-center h-screen bottom-12  px-4'>
                <p className='text-white font-bold text-xl md:text-3xl'>Great PS4 & PS5 Games out NOW</p>
                <div className='mt-8'>
                    <button className='text-white font-semibold px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-black mr-4 text-sm md:base'>Check out the list</button>
                    <button className='font-semibold px-6 py-2 border-2 border-white rounded-full bg-blue-600 text-white hover:bg-blue-800 hover:text-white hover:border-blue-800 text-sm md:base'>Buy Now</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero