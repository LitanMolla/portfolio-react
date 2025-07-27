import { Link } from 'react-router-dom'
import { Link as HLink } from 'react-scroll';
import { FaBarsStaggered } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";
import { useState } from 'react';
import logo from '../assets/images/logo.webp'

const Nav = () => {
    const [menu, setMenu] = useState(false);

    function menuHandle() {
        setMenu(!menu);
    }
    return (
        <>
            <header className='backdrop-blur-lg py-4 shadow shadow-gray-800 fixed top-0 left-0 w-full z-10'>
                <nav className='max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <HLink to='hero' spy={true} smooth={true} duration={500} offset={-124}><span className='text-4xl text-cyan-500 font-bold md:w-12 w-8 block cursor-pointer'>
                                <img src={logo} alt="Logo" className='w-full' />
                            </span></HLink>
                        </div>
                        {/* Lg Menu */}
                        <div className='hidden md:block'>
                            <ul className='flex font-medium text-gray-50 space-x-8 text-lg'>
                                <HLink to='hero' smooth={true} duration={500} spy={true} activeClass='text-cyan-500' offset={-156}><li className='duration-300 hover:text-cyan-500 cursor-pointer'>Home</li></HLink>
                                <HLink to='about' smooth={true} duration={500} spy={true} activeClass='text-cyan-500' offset={-156}><li className='duration-300 hover:text-cyan-500 cursor-pointer'>About</li></HLink>
                                <HLink to='skills' smooth={true} duration={500} spy={true} activeClass='text-cyan-500' offset={-156}><li className='duration-300 hover:text-cyan-500 cursor-pointer'>Skills</li></HLink>
                                <HLink to='portfolio' smooth={true} duration={500} spy={true} activeClass='text-cyan-500' offset={-156}><li className='duration-300 hover:text-cyan-500 cursor-pointer'>Portfolio</li></HLink>
                                <HLink to='contact' smooth={true} duration={500} spy={true} activeClass='text-cyan-500' offset={-233}><li className='duration-300 hover:text-cyan-500 cursor-pointer'>Contact</li></HLink>
                            </ul>
                        </div>
                        {/* Menu bar for mobile */}
                        <div className='text-gray-50 text-2xl md:hidden'>
                            <button onClick={menuHandle} className='cursor-pointer '>{menu ? '' : <FaBarsStaggered />}</button>
                        </div>
                    </div>
                    {/* Mobile Menu */}
                    <div
                        className={`md:hidden fixed top-0 right-0 w-2/3 h-screen bg-gray-900/95 z-30 transform transition-transform duration-500 ease-in-out ${menu ? 'translate-x-0' : 'translate-x-full'
                            }`}
                    >
                        <button
                            onClick={menuHandle}
                            className="cursor-pointer text-2xl text-gray-50 absolute top-4 right-4"
                        >
                            {menu ? <FaWindowClose /> : ''}
                        </button>
                        <ul className="flex flex-col font-medium text-gray-50 space-y-2 text-lg justify-center h-screen items-center">
                            <HLink
                                to="hero"
                                smooth={true}
                                duration={500}
                                spy={true}
                                activeClass="text-cyan-500"
                                offset={-124}
                                onClick={menuHandle}
                            >
                                <li className="duration-300 hover:text-cyan-500 cursor-pointer">Home</li>
                            </HLink>
                            <HLink
                                to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                activeClass="text-cyan-500"
                                offset={-124}
                                onClick={menuHandle}
                            >
                                <li className="duration-300 hover:text-cyan-500 cursor-pointer">About</li>
                            </HLink>
                            <HLink
                                to="skills"
                                smooth={true}
                                duration={500}
                                spy={true}
                                activeClass="text-cyan-500"
                                offset={-124}
                                onClick={menuHandle}
                            >
                                <li className="duration-300 hover:text-cyan-500 cursor-pointer">Skills</li>
                            </HLink>
                            <HLink
                                to="portfolio"
                                smooth={true}
                                duration={500}
                                spy={true}
                                activeClass="text-cyan-500"
                                offset={-124}
                                onClick={menuHandle}
                            >
                                <li className="duration-300 hover:text-cyan-500 cursor-pointer">Portfolio</li>
                            </HLink>
                            <HLink
                                to="contact"
                                smooth={true}
                                duration={500}
                                spy={true}
                                activeClass="text-cyan-500"
                                offset={-124}
                                onClick={menuHandle}
                            >
                                <li className="duration-300 hover:text-cyan-500 cursor-pointer">Contact</li>
                            </HLink>
                        </ul>
                    </div>

                </nav>
            </header>
            <div className="pb-19"></div>
        </>
    )
}

export default Nav