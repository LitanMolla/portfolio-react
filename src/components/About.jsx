import React from 'react'
import aboutSVG from "../assets/svg/coding-2-22.svg"
const About = () => {
    return (
        <>
            <section className='md:my-20 my-12' id='about'>
                <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
                    <div className="flex justify-between items-center gap-4 mb-5">
                        <div className="h-[3px] flex-grow bg-gradient-to-r from-gray-900 via-gray-500 to-cyan-500 rounded-full"></div>
                        <h1 className="text-4xl font-bold text-cyan-500 text-center whitespace-nowrap">About Me</h1>
                        <div className="h-[3px] flex-grow bg-gradient-to-r from-cyan-500 via-gray-500 to-gray-900 rounded-full"></div>
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




