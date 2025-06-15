import React from 'react'
import aboutSVG from "../assets/svg/coding-2-22.svg"
const About = () => {
    return (
        <>
            <section className='md:my-20 my-12'>
                <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
                    <h1 className='text-4xl font-bold text-cyan-500 text-center mb-5'>About Me</h1>
                    <div className="flex md:flex-row flex-col justify-between items-center gap-5">
                        <div className="md:w-1/2">
                            <div className="max-w-110">
                                <img src={aboutSVG} alt="About SVG" className='w-full' />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="text-gray-50 space-y-2 px-10 md:px-0 text-base">
                                <p className=''>A passionate <b>Frontend Developer</b> based in Bangladesh. I specialize in creating responsive, user-friendly websites using modern technologies like React, Tailwind CSS, and JavaScript.
                                </p>
                                <p>With a strong eye for design and a deep understanding of frontend development, I love turning ideas into interactive and visually appealing web experiences. My goal is to build clean, fast, and accessible websites that not only look great but also perform well on all devices.</p>
                                <p>When I’m not coding, I enjoy listening to music and exploring new trends in web design.</p>
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