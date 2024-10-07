import mongo from '../assets/jobs.png'
import weather from '../assets/weatherApp.png'
import logo from '../assets/logo192.png'
import recipe from '../assets/recipex.png'

import '../App.css'
import { div } from 'framer-motion/client'

const Project = [
    {
        id: 1,
        src: mongo,
        name:"Job-Finder(mern)",
        href: "https://fluffy-cocada-7a48cc.netlify.app/",
        href2: "https://github.com/thayour02/jobFinder-frontend"
    },

    {
        id: 2,
        src: weather,
        name:"Weather App(react)",
        href: "https://thayourweatherapp.netlify.app/",
        href2: "https://github.com/thayour02/weatherApp.git"
    },
    {
        id: 3,
        src: logo,
        name:"React reusable components",
        href: "https://fluffy-cocada-7a48cc.netlify.app/",
        href2: "https://github.com/thayour02/react-projects.git"
    },
    {
        id: 4,
        src: recipe,
        name:"Search Recipes(react)",
        href: "https://thayourreactrecipeapp.netlify.app/",
        href2: "https://github.com/thayour02/recipeblog-.git"
    }

]

export default function Project() {
    return (
        <div name="Project" className="w-full background text-white h-full mt-10">
            <div className="max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="pt-2 text-4xl font-bold inline border-b-4 border-gray-400 cursor-pointer hover:scale-110 duration-300 hover:text-cyan-500 ">Portfolio</p>
                    <p className="pt-2 text-2xl">Check out some of my work here</p>
                </div>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
                    <div className='bg-[#f7fdfd] cursor-pointer rounded-[35px] shadow-lg p-8 items-center flex justify-center hover:-translate-y-4 transition duration-300'>
                        <div>
                            { Project.map((item, i) => 
                             (
                                <div key={i}>
                                <img src={item.mongo} alt="" className='h-40 w-[200px]' />
                                <h5 className=' font-semibold text-zinc-700 text-xl  mt-5 mb-2 px-8'>{item.name}</h5>
                                <div className='flex justify-between gap-4'>
                                    <a href={item.href}>
                                        <div className="navbar-end">
                                            <a className="btn">Demon</a>
                                        </div>
                                    </a>
                                    <a href={item.href2}>
                                        <div className="navbar-end">
                                            <a className="btn">Repo</a>
                                        </div>
                                    </a>    
                                </div>
                            </div>
                             )
                           )}
                                
                        </div>
                    </div>
                    {/* <div className='bg-[#f7fdfd] cursor-pointer rounded-[35px] shadow-lg p-8 items-center flex justify-center hover:-translate-y-4 transition duration-300'>
                        <div>
                            <img src={weather} alt="" className='h-40 w-[300px]' />
                            <h5 className=' font-semibold text-zinc-700 text-xl  mt-5 mb-2 px-8'>Weather App(react)</h5>
                         <div className='flex justify-between gap-4'>
                         <a href="">
                                <div className="navbar-end">
                                    <a className="btn">Demon</a>
                                </div>
                            </a>
                            <a href="https://github.com/thayour02/WeatherApp.git">
                                <div className="navbar-end">
                                    <a className="btn">Repo</a>
                                </div>
                            </a>
                         </div>
                        </div>
                    </div>

                    <div className='bg-[#f7fdfd] cursor-pointer rounded-[35px] shadow-lg p-8 items-center flex justify-center hover:-translate-y-4 transition duration-300'>
                        <div>
                            <img src={logo} alt="" className='h-40 w-[200px]' />
                            <h5 className=' font-semibold text-zinc-700 text-xl  mt-5 mb-2 px-8'>React components</h5>
                         <div className='flex justify-between gap-4'>
                         <a href="">
                                <div className="navbar-end">
                                    <a className="btn">Demon</a>
                                </div>
                            </a>
                            <a href="https://github.com/thayour02/react-projects.git">
                                <div className="navbar-end">
                                    <a className="btn">Repo</a>
                                </div>
                            </a>
                         </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}