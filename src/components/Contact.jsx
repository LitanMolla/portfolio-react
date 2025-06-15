import { FaUser,FaPhone  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMessage,FaLocationDot } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <section className='md:my-20 my-12'>
                <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
                    <h1 className='text-4xl font-bold text-cyan-500 text-center mb-12'>Contact Me</h1>
                    <div className="flex md:flex-row flex-col-reverse justify-between gap-8 items-center  text-gray-50">
                        <div className="md:w-1/2 w-full">
                            <div className="space-y-5">
                                <div className="bg-gray-800/50 p-5 rounded-md border border-gray-800 duration-300 hover:shadow-custom hover:shadow-gray-800">
                                    <p className="text-base font-medium flex items-center gap-2"><MdEmail/>Email</p>
                                    <Link to={'mailto:litanmolla9@gmail.com'}><span className="text-base hover:text-cyan-500 duration-300">litanmolla9@gmail.com</span></Link>
                                </div>
                                <div className="bg-gray-800/50 p-5 rounded-md border border-gray-800 duration-300 hover:shadow-custom hover:shadow-gray-800">
                                    <p className="text-base font-medium flex items-center gap-2"><FaPhone/>Phone</p>
                                    <Link to={'cell:+8801741232775'}><span className="text-base hover:text-cyan-500 duration-300">+8801741232775</span></Link>
                                </div>
                                <div className="bg-gray-800/50 p-5 rounded-md border border-gray-800 duration-300 hover:shadow-custom hover:shadow-gray-800">
                                    <p className="text-base font-medium flex items-center gap-2"><FaWhatsapp/>Whatsapp</p>
                                    <Link to={'https://api.whatsapp.com/send/?phone=8801741232775&text&type=phone_number&app_absent=0'}><span className="text-base hover:text-cyan-500 duration-300">+8801741232775</span></Link>
                                </div>
                                <div className="bg-gray-800/50 p-5 rounded-md border border-gray-800 duration-300 hover:shadow-custom hover:shadow-gray-800">
                                    <p className="text-base font-medium flex items-center gap-2"><FaLocationDot/>Location</p>
                                    <Link to={'/'}><span className="text-base hover:text-cyan-500 duration-300">Dhaka, Bangladesh</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="bg-gray-800/50 p-5 rounded-md border border-gray-800 duration-300 hover:shadow-custom hover:shadow-gray-800">
                                <form action="" className="space-y-3">
                                    <div className="relative">
                                        <input type="text" placeholder='Enter your full name' className='block bg-gray-900 px-10 py-3 w-full text-base rounded-md border border-gray-800 ' />
                                        <FaUser className="absolute top-1/2 left-4 z-10 -translate-y-1/2 text-gray-400" />
                                    </div>
                                    <div className="relative">
                                        <input type="email" placeholder='Enter your Email' className='block bg-gray-900 px-10 py-3 w-full text-base rounded-md border border-gray-800 ' />
                                        <MdEmail className="absolute top-1/2 left-4 z-10 -translate-y-1/2 text-gray-400" />
                                    </div>
                                    <div className="relative">
                                        <input type="text" placeholder='Enter your phone number' className='block bg-gray-900 px-10 py-3 w-full text-base rounded-md border border-gray-800 ' />
                                        <FaPhone  className="absolute top-1/2 left-4 z-10 -translate-y-1/2 text-gray-400" />
                                    </div>
                                    <div className="relative mb-4">
                                        <textarea name="" id="" placeholder="Type your message" className="block bg-gray-900 px-10  py-3 w-full text-base rounded-md border border-gray-800 h-32"></textarea>
                                        <FaMessage  className="absolute top-[18px] left-4 z-10 text-gray-400" />
                                    </div>
                                    <button className="bg-cyan-500 px-5 py-3 w-full text-gray-800 font-semibold cursor-pointer rounded-md duration-300 hover:bg-cyan-600 text-base flex justify-center items-center gap-2">Send Message <IoIosSend/></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className='border-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 h-[2px]' />
        </>
    )
}

export default Contact