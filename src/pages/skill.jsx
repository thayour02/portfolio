import html from "../assets/html.png"
import css from "../assets/css.png"
import tailwind from "../assets/tailwind.png"
import node from "../assets/node.png"
import js from "../assets/js.png"
import react from "../assets/logo192.png"
import mongo from "../assets/mongo.png"
import sql from "../assets/sql.png"
import git from "../assets/github.png"



const skill = [
    {
        id: 1,
        src: html,
        title: "HTML 90%",
        style: "shadow-orange-500"
    },
    {
        id: 2,
        src: css,
        title: "CSS 80%",
        style: "shadow-blue-500"
    },
    {
        id: 3,
        src: tailwind,
        title: "TAILWIND CSS 70%",
        style: "shadow-cyan-400"
    },
    {
        id: 4,
        src: node,
        title: "NODE JS EXPRESS 75%",
        style: "shadow-green-500"
    },
    
    {
        id: 5,
        src: js,
        title: "JAVASCRIPT 60%",
        style: "shadow-yellow-500"
    },
    {
        id: 6,
        src: react,
        title: "REACT 70%",
        style: "shadow-blue-500"
    },
    {
        id: 7,
        src: mongo,
        title: "MONGODB 80%",
        style: "shadow-green-500"
    },
    {
        id: 8,
        src: sql,
        title: "MYSQL 30%",
        style: "shadow-white"
    },
    {
        id: 9,
        src: git,
        title: "GITHUB 80%",
        style: "shadow-blue-400"
    }
]
   
export default function Skill(){
    return (
        <div name="Skills" className="w-full  max-h-screen-lg mt-40 md:mt-0">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">

                <div className="">
                    <p className="text-2xl sm:text-4xl font-bold border-b-4 border-gray-500 p-2  inline">Skills and Experience</p>
                    <p className="py-6">This are the technology have worked with</p>
                </div>
                <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
                    {
                        skill.map(({ id, src, title, style }) => (
                            <div className={`bg-[#f7fdfd] cursor-pointer rounded-[35px] shadow-lg p-8 items-center flex justify-center hover:-translate-y-4 transition duration-300 ${style}`} key={id}>
                                <img className="w-full h-20 mx-auto" src={src} alt="" />
                                <p className="font-semibold text-zinc-700 text-xl  mt-5 ">{title}</p>
                            </div>
                        ))
                    }
                </div>
                
            </div>

        </div>


    )
}