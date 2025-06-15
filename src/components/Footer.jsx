import { FaLinkedin, FaGithub, FaInstagram, FaBehance, FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className='py-5'>
                <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
                        <div className="">
                            <p className='text-base text-gray-50'>© 2025 <span className='font-semibold'>Litan Molla</span>. All rights reserved.</p>
                        </div>
                        <div className="text-xl text-gray-50 flex gap-2">

                            <Link to={''}><span className="bg-gray-800 h-12 w-12 flex justify-center items-center rounded-full duration-300 hover:bg-cyan-500 hover:text-gray-800"><FaLinkedin /></span></Link>
                            <Link to={''}><span className="bg-gray-800 h-12 w-12 flex justify-center items-center rounded-full duration-300 hover:bg-cyan-500 hover:text-gray-800"><FaGithub /></span></Link>
                            <Link to={''}><span className="bg-gray-800 h-12 w-12 flex justify-center items-center rounded-full duration-300 hover:bg-cyan-500 hover:text-gray-800"><FaFacebook /></span></Link>
                            <Link to={''}><span className="bg-gray-800 h-12 w-12 flex justify-center items-center rounded-full duration-300 hover:bg-cyan-500 hover:text-gray-800"><FaInstagram /></span></Link>
                            <Link to={''}><span className="bg-gray-800 h-12 w-12 flex justify-center items-center rounded-full duration-300 hover:bg-cyan-500 hover:text-gray-800"><FaBehance /></span></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer