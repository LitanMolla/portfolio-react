import React from 'react'
import aboutSVG from "../assets/svg/coding-2-22.svg"
import { FaUserAlt } from "react-icons/fa";

const About = () => {
    return (
        <>
            <section className='md:my-20 my-12' id='about'>
                <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
                    <div className="text-center mb-5">
                        <h1 className="text-4xl font-bold text-cyan-500 mb-2 relative inline-block">About Me</h1>
                        <div className="flex justify-center items-center gap-3">
                            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-cyan-300 rounded-full"></div>
                            <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg ring-4 ring-gray-600">
                                <FaUserAlt className="text-gray-900" />
                            </div>
                            <div className="w-24 h-[2px] bg-gradient-to-l from-transparent via-cyan-500 to-cyan-300 rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col justify-between items-center gap-5">
                        <div className="md:w-1/2">
                            <div className="max-w-110">
                                <img src={aboutSVG} alt="About SVG" className='w-full' />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="text-gray-50 space-y-2 px-10 md:px-0 text-base">
                                <p className=''><b>I'm Litan Molla</b> — a <b>Frontend developer</b> with a strong passion for creating clean, responsive, and user-friendly websites.
                                </p>
                                <p>With skills in HTML, CSS, Tailwind CSS, JavaScript, React, and Next.js, I build modern interfaces that not only look great but also perform smoothly. I enjoy turning design ideas into real, functional websites that enhance the user experience.</p>
                                <p>Currently, I'm focused on improving my skills and working on exciting web projects that solve real-world problems.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className='border-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 h-[2px]' />
        </>
    )
}

export default About




