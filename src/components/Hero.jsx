import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <>
       <section className='md:my-20 my-12' id="hero">
         <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
            <div className="flex md:flex-row flex-col-reverse justify-between items-center">
                <div className="md:w-1/2 space-y-2.5 md:text-start text-center">
                    <h2 className='text-3xl text-gray-300 font-medium'>Hi, I'm</h2>
                    {/* <h1 className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-50 to-cyan-600'>Litan Molla</h1> */}
                    <h1 className='text-6xl font-bold  text-cyan-500'>Litan Molla</h1>
                    <h2 className='text-3xl text-gray-300 font-medium'>Frontend Developer</h2>
                    <p className='text-gray-400 text-base px-10 md:px-0'> I'm a passionate Frontend Developer dedicated to crafting modern, responsive, and user-centric web applications. I specialize in React and Tailwind CSS, blending clean design with smooth functionality to deliver exceptional user experiences.</p>
                    <button className='bg-cyan-500 px-5 py-3 rounded-lg cursor-pointer text-gray-900 text-lg font-semibold duration-300 hover:bg-cyan-600 mt-3 flex gap-2 items-center'>Download Resume <FaDownload/></button>
                </div>
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <div className="flex md:justify-end">
                        <div className="max-w-80 sm:max-w-100 border-8 border-gray-700 rounded-2xl overflow-hidden shadow-custom shadow-gray-700 duration-300 hover:shadow-lg">
                            <img src="../../public/images/hero-img.webp" alt="Hero Img" className='w-full duration-300 hover:scale-105 ' />
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </section> 
        <hr className='border-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 h-[2px]' />
    </>
  )
}

export default Hero