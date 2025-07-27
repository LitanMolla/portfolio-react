import project1 from "../assets/images/project1.webp"
import project2 from "../assets/images/project2.webp"
import project3 from "../assets/images/project3.webp"
import { HiExternalLink } from "react-icons/hi";
import { FaCode } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <section className='md:my-20 my-12' id="portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-cyan-500 mb-2 relative inline-block">Portfolio</h1>
            <div className="flex justify-center items-center gap-3">
              <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-cyan-300 rounded-full"></div>
              <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg ring-4 ring-gray-600">
                <FaFolderOpen className="text-gray-900" />
              </div>
              <div className="w-24 h-[2px] bg-gradient-to-l from-transparent via-cyan-500 to-cyan-300 rounded-full"></div>
            </div>
          </div>
          {/* <h1 className='text-4xl font-bold text-cyan-500 text-center mb-12'>Portfolio</h1> */}
          <div className="space-y-8">
            {/*  */}
            <ProjectCard
              heading={'Hexa Shop'}
              details={'A modern and fully responsive E-commerce website built with React and Tailwind CSS. This project showcases a user-friendly interface with product listing, detailed product pages, cart functionality, and smooth navigation. I focused on clean UI, optimized performance, and a seamless shopping experience across all devices. This project demonstrates my ability to structure a scalable frontend for dynamic e-commerce platforms.'}
              image={project1}
              repositorie={'/'}
              live={'/'}
              technologies={['React','Tailwind CSS','JavaScript','Redux']}
              className="lg:flex-row-reverse"
              />
            {/* Project Item 1*/}
              <ProjectCard
              heading={'Cyber Shop'}
              details={'A modern and fully responsive E-commerce website built with React and Tailwind CSS. This project showcases a user-friendly interface with product listing, detailed product pages, cart functionality, and smooth navigation. I focused on clean UI, optimized performance, and a seamless shopping experience across all devices. This project demonstrates my ability to structure a scalable frontend for dynamic e-commerce platforms.'}
              image={project3}
              repositorie={'/'}
              live={'/'}
              technologies={['React','Tailwind CSS','JavaScript','Redux']}
              />
            {/* Project Item 2*/}
            <ProjectCard
              heading={'Orebi Ecom'}
              details={'A modern and fully responsive E-commerce website built with React and Tailwind CSS. This project showcases a user-friendly interface with product listing, detailed product pages, cart functionality, and smooth navigation. I focused on clean UI, optimized performance, and a seamless shopping experience across all devices. This project demonstrates my ability to structure a scalable frontend for dynamic e-commerce platforms.'}
              image={project2}
              repositorie={'/'}
              live={'/'}
              technologies={['React','Tailwind CSS','JavaScript','Redux']}
              className="lg:flex-row-reverse"
              />
            {/* Project Item 3*/}

          </div>
        </div>
      </section>
      <hr className='border-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 h-[2px]' />
    </>
  )
}

export default Portfolio

const ProjectCard = ({className = 'lg:flex-row',heading,details,image,repositorie,live,technologies}) => {
  return (
    <>
      <div className={`flex flex-col justify-between gap-8 items-center bg-gray-800/50 p-5 rounded-md border border-gray-800 duration-300 hover:shadow-lg hover:shadow-gray-700   max-w-120 md:max-w-150 lg:max-w-full mx-auto ${className}`}>
        <div className="lg:w-1/2">
          <div className="overflow-hidden rounded-md">
            <img src={image} alt="Project IMG" className="w-full duration-300 hover:scale-105 " />
          </div>
        </div>
        <div className="lg:w-1/2 space-y-3">
          <h3 className="text-3xl font-bold text-gray-50"> {heading} </h3>
          <p className="text-base text-gray-200">{details}</p>
          <div className="">
            <h4 className="text-xl font-bold text-gray-50">Technologies:</h4>
            <div className="flex gap-2 flex-wrap">
              {
                technologies.map((item,index)=>(
                  <p key={index} className="text-base px-5 py-1 bg-gray-700 text-gray-50 rounded-full border border-gray-600 duration-300 hover:scale-105">{item}</p>
                ))
              }
            </div>
          </div>
          <div className="flex mt-5 gap-5">
            <Link to={live}><button className="text-gray-800 font-semibold text-lg cursor-pointer bg-cyan-500 px-6 py-1 rounded-md duration-300 hover:bg-cyan-600 flex items-center gap-1">Live <HiExternalLink /></button></Link>
            <Link to={repositorie}><button className="text-gray-800 font-semibold text-lg cursor-pointer bg-cyan-500 px-6 py-1 rounded-md duration-300 hover:bg-cyan-600 flex items-center gap-1">Repositorie <FaCode /></button></Link>
          </div>
        </div>
      </div>
    </>
  )
}
