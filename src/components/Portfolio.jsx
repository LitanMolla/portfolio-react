import project1 from "../assets/images/project1.webp"
import project2 from "../assets/images/project2.webp"
import project3 from "../assets/images/project3.webp"
import { HiExternalLink } from "react-icons/hi";
import { FaCode } from "react-icons/fa6";


const Portfolio = () => {
  return (
    <>
      <section className='md:my-20 my-12'>
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
          <h1 className='text-4xl font-bold text-cyan-500 text-center mb-12'>Portfolio</h1>
          <div className="space-y-8">
          {/* Project Item 1*/}
            <div className="flex lg:flex-row flex-col justify-between gap-8 items-center bg-gray-800/50 p-5 rounded-md border border-gray-800 duration-300 hover:shadow-lg hover:shadow-gray-700   max-w-120 md:max-w-150 lg:max-w-full mx-auto">
              <div className="lg:w-1/2">
                <div className="overflow-hidden rounded-md">
                  <img src={project1} alt="Project IMG" className="w-full duration-300 hover:scale-105 "/>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-3">
                <h3 className="text-3xl font-bold text-gray-50">Hexa Shop</h3>
                <p className="text-base text-gray-200">A modern and fully responsive E-commerce website built with React and Tailwind CSS. This project showcases a user-friendly interface with product listing, detailed product pages, cart functionality, and smooth navigation. I focused on clean UI, optimized performance, and a seamless shopping experience across all devices. This project demonstrates my ability to structure a scalable frontend for dynamic e-commerce platforms.</p>
                <div className="">
                  <h4 className="text-xl font-bold text-gray-50">Technologies:</h4>
                  <div className="flex gap-2 flex-wrap">
                    <p className="text-base px-5 py-1 bg-gray-700 text-gray-50 rounded-full border border-gray-600 duration-300 hover:scale-105">React</p>
                    <p className="text-base px-5 py-1 bg-gray-700 text-gray-50 rounded-full border border-gray-600 duration-300 hover:scale-105">Tailwind CSS</p>
                    <p className="text-base px-5 py-1 bg-gray-700 text-gray-50 rounded-full border border-gray-600 duration-300 hover:scale-105">Javascript</p>
                    <p className="text-base px-5 py-1 bg-gray-700 text-gray-50 rounded-full border border-gray-600 duration-300 hover:scale-105">DaisyUI</p>
                  </div>
                </div>
                <div className="flex mt-5 gap-5">
                  <button className="text-gray-800 font-semibold text-lg cursor-pointer bg-cyan-500 px-6 py-1 rounded-md duration-300 hover:bg-cyan-600 flex items-center gap-1">Live <HiExternalLink/></button>
                  <button className="text-gray-800 font-semibold text-lg cursor-pointer bg-cyan-500 px-6 py-1 rounded-md duration-300 hover:bg-cyan-600 flex items-center gap-1">Repositorie <FaCode/></button>
                </div>
              </div>
            </div>
          {/* Project Item 2*/}
            <div className="flex lg:flex-row-reverse flex-col justify-between gap-8 items-center bg-gray-800/50 p-5 rounded-md border border-gray-800 duration-300 hover:shadow-lg hover:shadow-gray-700   max-w-120 md:max-w-150 lg:max-w-full mx-auto">
              <div className="lg:w-1/2">
                <div className="overflow-hidden rounded-md">
                  <img src={project2} alt="Project IMG" className="w-full duration-300 hover:scale-105 "/>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-3">
                <h3 className="text-3xl font-bold text-gray-50">Orebi Ecom</h3>
                <p className="text-base text-gray-200">A modern and fully responsive E-commerce website built with React and Tailwind CSS. This project showcases a user-friendly interface with product listing, detailed product pages, cart functionality, and smooth navigation. I focused on clean UI, optimized performance, and a seamless shopping experience across all devices. This project demonstrates my ability to structure a scalable frontend for dynamic e-commerce platforms.</p>
                <div className="">
                  <h4 className="text-xl font-bold text-gray-50">Technologies:</h4>
                  <div className="flex gap-2 flex-wrap">
                    <p className="text-base px-5 py-1 bg-gray-700 text-gray-50 rounded-full border border-gray-600 duration-300 hover:scale-105">React</p>
                    <p className="text-base px-5 py-1 bg-gray-700 text-gray-50 rounded-full border border-gray-600 duration-300 hover:scale-105">Tailwind CSS</p>
                    <p className="text-base px-5 py-1 bg-gray-700 text-gray-50 rounded-full border border-gray-600 duration-300 hover:scale-105">Javascript</p>
                    <p className="text-base px-5 py-1 bg-gray-700 text-gray-50 rounded-full border border-gray-600 duration-300 hover:scale-105">DaisyUI</p>
                  </div>
                </div>
                <div className="flex mt-5 gap-5">
                  <button className="text-gray-800 font-semibold text-lg cursor-pointer bg-cyan-500 px-6 py-1 rounded-md duration-300 hover:bg-cyan-600 flex items-center gap-1">Live <HiExternalLink/></button>
                  <button className="text-gray-800 font-semibold text-lg cursor-pointer bg-cyan-500 px-6 py-1 rounded-md duration-300 hover:bg-cyan-600 flex items-center gap-1">Repositorie <FaCode/></button>
                </div>
              </div>
            </div>
          {/* Project Item 3*/}
            <div className="flex lg:flex-row flex-col justify-between gap-8 items-center bg-gray-800/50 p-5 rounded-md border border-gray-800 duration-300 hover:shadow-lg hover:shadow-gray-700   max-w-120 md:max-w-150 lg:max-w-full mx-auto">
              <div className="lg:w-1/2">
                <div className="overflow-hidden rounded-md">
                  <img src={project3} alt="Project IMG" className="w-full duration-300 hover:scale-105 "/>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-3">
                <h3 className="text-3xl font-bold text-gray-50">Cyber Shop</h3>
                <p className="text-base text-gray-200">A modern and fully responsive E-commerce website built with React and Tailwind CSS. This project showcases a user-friendly interface with product listing, detailed product pages, cart functionality, and smooth navigation. I focused on clean UI, optimized performance, and a seamless shopping experience across all devices. This project demonstrates my ability to structure a scalable frontend for dynamic e-commerce platforms.</p>
                <div className="">
                  <h4 className="text-xl font-bold text-gray-50">Technologies:</h4>
                  <div className="flex gap-2 flex-wrap">
                    <p className="text-base px-5 py-1 bg-gray-700 text-gray-50 rounded-full border border-gray-600 duration-300 hover:scale-105">React</p>
                    <p className="text-base px-5 py-1 bg-gray-700 text-gray-50 rounded-full border border-gray-600 duration-300 hover:scale-105">Tailwind CSS</p>
                    <p className="text-base px-5 py-1 bg-gray-700 text-gray-50 rounded-full border border-gray-600 duration-300 hover:scale-105">Javascript</p>
                    <p className="text-base px-5 py-1 bg-gray-700 text-gray-50 rounded-full border border-gray-600 duration-300 hover:scale-105">DaisyUI</p>
                  </div>
                </div>
                <div className="flex mt-5 gap-5">
                  <button className="text-gray-800 font-semibold text-lg cursor-pointer bg-cyan-500 px-6 py-1 rounded-md duration-300 hover:bg-cyan-600 flex items-center gap-1">Live <HiExternalLink/></button>
                  <button className="text-gray-800 font-semibold text-lg cursor-pointer bg-cyan-500 px-6 py-1 rounded-md duration-300 hover:bg-cyan-600 flex items-center gap-1">Repositorie <FaCode/></button>
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

export default Portfolio