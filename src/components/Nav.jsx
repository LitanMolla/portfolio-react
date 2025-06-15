import { Link } from 'react-router-dom'
import { Link as HLink } from 'react-scroll';
import { FaBarsStaggered } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";
import { useState } from 'react';

const Nav = () => {
    const [menu, setMenu] = useState(false);

    function menuHandle() {
        setMenu(!menu);
        console.log('clicked');

    }
    return (
        <>
            <header className='bg-gray-900/75 py-4 shadow shadow-gray-800 fixed top-0 left-0 w-full z-10'>
                <nav className='max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <Link to={'/'}><span className='text-4xl text-gray-50 font-bold'>Litan</span></Link>
                        </div>
                        {/* Lg Menu */}
                        <div className='hidden md:block'>
                            <ul className='flex font-medium text-gray-50 space-x-8 text-lg'>
                                <HLink to='hero' smooth={true} duration={500} ><li className='duration-300 hover:text-cyan-500'>Home</li></HLink>
                                <HLink to='about' smooth={true} duration={500} ><li className='duration-300 hover:text-cyan-500'>About</li></HLink>
                                <HLink to='skills' smooth={true} duration={500} ><li className='duration-300 hover:text-cyan-500'>Skills</li></HLink>
                                <HLink to='portfolio' smooth={true} duration={500} ><li className='duration-300 hover:text-cyan-500'>Portfolio</li></HLink>
                                <HLink to='contact' smooth={true} duration={500} ><li className='duration-300 hover:text-cyan-500'>Contact</li></HLink>
                            </ul>
                        </div>
                        {/* Menu bar for mobile */}
                        <div className='text-gray-50 text-2xl md:hidden'>
                            <button onClick={menuHandle} className='cursor-pointer'>{menu ? <FaWindowClose /> : <FaBarsStaggered />}</button>
                        </div>
                    </div>
                    {/* Mobile Menu */}
                    {
                        menu && <div className='md:hidden absolute top-0 bg-gray-900/95 h-screen left-0 w-1/3 text-center z-20'>
                            <ul className='flex flex-col font-medium text-gray-50 space-y-2 text-lg justify-center h-screen'>
                                <HLink to='hero' smooth={true} duration={500} ><li className='duration-300 hover:text-cyan-500'>Home</li></HLink>
                                <HLink to='about' smooth={true} duration={500} ><li className='duration-300 hover:text-cyan-500'>About</li></HLink>
                                <HLink to='skills' smooth={true} duration={500} ><li className='duration-300 hover:text-cyan-500'>Skills</li></HLink>
                                <HLink to='portfolio' smooth={true} duration={500} ><li className='duration-300 hover:text-cyan-500'>Portfolio</li></HLink>
                                <HLink to='contact' smooth={true} duration={500} ><li className='duration-300 hover:text-cyan-500'>Contact</li></HLink>
                            </ul>
                        </div>
                    }

                </nav>
            </header>
            <div className="pb-19"></div>
        </>
    )
}

export default Nav