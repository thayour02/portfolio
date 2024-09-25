
import Skill from "./skill"
import Project from "./project"
import Contact from "./contact"
import About from "./about"
import Banner from "./banner"
import tayo from '../assets/download.webp'


export default function Home() {
    return (
        <div>
            <div name="Home" className="md:px-12 bg-zinc-500 max-w-screen-2xl max-auto pt-20  md:pt-10">

              <Banner heading={"I'm a Full Stack Developer "} subheading={`  I have a year experience building and designing software app.
                    currently, i love to work on web application using
                    technoligies like
                    React,Tailwind,Node JS and Mongodb`} 
                        banner={tayo}/>
            </div>
            <Skill />
            <Project />
            <About />
            <Contact/>
        </div>
    )
}
<div className=" bg-zinc-600 md:rounded-xl 
md:rounded-br-[80px] md:p-9 px-4 py-9 ">
            <div className="md:w-3/5 text-white" >
                <h2 className="md:text-6xl text-5xl font-bold  mb-6 leading-relaxed"></h2>
                <p className=" text-[#f7fdfd] mb-8">
                  
                </p>

               
            </div>


        </div>