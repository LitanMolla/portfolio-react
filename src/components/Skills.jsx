import React from 'react'
import html from '../assets/svg/html.svg'
import css from '../assets/svg/css.svg'
import Tailwind from '../assets/svg/tailwindcss.svg'
import js from '../assets/svg/js.svg'
import react from '../assets/svg/react.svg'
import next from '../assets/svg/nextj.svg'

const Skills = () => {
  return (
    <>
        <section className='md:my-20 my-12' id='skills'>
                <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
                    <div className="flex justify-between items-center gap-4 mb-12">
                        <div className="h-[3px] flex-grow bg-gradient-to-r from-gray-900 via-gray-500 to-cyan-500 rounded-full"></div>
                        <h1 className="text-4xl font-bold text-cyan-500 text-center whitespace-nowrap">My Skills</h1>
                        <div className="h-[3px] flex-grow bg-gradient-to-r from-cyan-500 via-gray-500 to-gray-900 rounded-full"></div>
                    </div>
                    {/* <h1 className='text-4xl font-bold text-cyan-500 text-center mb-12'>My Skills</h1> */}
                    <div className="grid md:grid-cols-3 grid-cols-2 gap-8">
                        {/* Skill Item */}
                        <div className="bg-gray-800/50 p-5 text-center max-w-100 rounded-md border border-gray-800 duration-300 hover:shadow-custom hover:shadow-gray-800">
                            <div className="max-w-16 mx-auto">
                                <img src={html} alt="Html" className='w-full'/>
                            </div>
                            <h4 className='text-lg text-gray-100 font-medium mt-3'>HTML</h4>
                        </div>
                        {/* Skill Item */}
                        <div className="bg-gray-800/50 p-5 text-center max-w-100 rounded-md border border-gray-800 duration-300 hover:shadow-custom hover:shadow-gray-800">
                            <div className="max-w-16 mx-auto">
                                <img src={css} alt="Html" className='w-full'/>
                            </div>
                            <h4 className='text-lg text-gray-100 font-medium mt-3'>CSS</h4>
                        </div>
                        {/* Skill Item */}
                        <div className="bg-gray-800/50 p-5 text-center max-w-100 rounded-md border border-gray-800 duration-300 hover:shadow-custom hover:shadow-gray-800">
                            <div className="max-w-16 mx-auto">
                                <img src={Tailwind} alt="Html" className='w-full'/>
                            </div>
                            <h4 className='text-lg text-gray-100 font-medium mt-3'>Tailwind CSS</h4>
                        </div>
                        {/* Skill Item */}
                        <div className="bg-gray-800/50 p-5 text-center max-w-100 rounded-md border border-gray-800 duration-300 hover:shadow-custom hover:shadow-gray-800">
                            <div className="max-w-16 mx-auto">
                                <img src={js} alt="Html" className='w-full'/>
                            </div>
                            <h4 className='text-lg text-gray-100 font-medium mt-3'>Javascript</h4>
                        </div>
                        {/* Skill Item */}
                        <div className="bg-gray-800/50 p-5 text-center max-w-100 rounded-md border border-gray-800 duration-300 hover:shadow-custom hover:shadow-gray-800">
                            <div className="max-w-16 mx-auto">
                                <img src={react} alt="Html" className='w-full'/>
                            </div>
                            <h4 className='text-lg text-gray-100 font-medium mt-3'>React</h4>
                        </div>
                        {/* Skill Item */}
                        <div className="bg-gray-800/50 p-5 text-center max-w-100 rounded-md border border-gray-800 duration-300 hover:shadow-custom hover:shadow-gray-800">
                            <div className="max-w-16 mx-auto">
                                <img src={next} alt="Html" className='w-full'/>
                            </div>
                            <h4 className='text-lg text-gray-100 font-medium mt-3'>Next.js</h4>
                        </div>
                        
                    </div>
                </div>
            </section>
            <hr className='border-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 h-[2px]' />
    </>
  )
}

export default Skills