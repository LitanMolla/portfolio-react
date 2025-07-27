
import html from '../assets/svg/html.svg'
import css from '../assets/svg/css.svg'
import Tailwind from '../assets/svg/tailwindcss.svg'
import js from '../assets/svg/js.svg'
import react from '../assets/svg/react.svg'
import next from '../assets/svg/nextj.svg'
import reactrouter from '../assets/svg/reactrouter-original.svg'
import redux from '../assets/svg/redux-original.svg'
import { FaLaptopCode } from "react-icons/fa";


const Skills = () => {
    return (
        <>
            <section className='md:my-20 my-12' id='skills'>
                <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-cyan-500 mb-2 relative inline-block">My Skills</h1>
                        <div className="flex justify-center items-center gap-3">
                            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-cyan-300 rounded-full"></div>
                            <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg ring-4 ring-gray-600">
                                <FaLaptopCode className="text-gray-900" />
                            </div>
                            <div className="w-24 h-[2px] bg-gradient-to-l from-transparent via-cyan-500 to-cyan-300 rounded-full"></div>
                        </div>
                    </div>
                    {/* <h1 className='text-4xl font-bold text-cyan-500 text-center mb-12'>My Skills</h1> */}
                    <div className="grid md:grid-cols-3 grid-cols-2 gap-8 lg:grid-cols-4">
                        <SkillItem
                            logo={html}
                            title={'HTML'}
                        />

                        <SkillItem
                            logo={css}
                            title={'CSS'}
                        />

                        <SkillItem
                            logo={Tailwind}
                            title={'Tailwind CSS'}
                        />

                        <SkillItem
                            logo={js}
                            title={'Javascript'}
                        />

                        <SkillItem
                            logo={react}
                            title={'React'}
                        />

                        <SkillItem
                            logo={reactrouter}
                            title={'React Router'}
                        />

                        <SkillItem
                            logo={redux}
                            title={'Redux'}
                        />
                        <SkillItem
                            logo={next}
                            title={'Next Js'}
                        />
                    </div>
                </div>
            </section>
            <hr className='border-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 h-[2px]' />
        </>
    )
}

export default Skills

const SkillItem = ({ logo, title }) => {
    return (
        <>
            <div className="bg-gray-800/50 p-5 text-center max-w-full rounded-md border border-gray-800 duration-300 hover:shadow-custom hover:shadow-gray-800">
                <div className="max-w-16 mx-auto">
                    <img src={logo} alt="Html" className='w-full' />
                </div>
                <h4 className='text-lg text-gray-100 font-medium mt-3'>{title}</h4>
            </div>
        </>
    )
}