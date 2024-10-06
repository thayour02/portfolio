import sup from "../assets/sup.jpeg"
import web from "../assets/web.png"
import web2 from "../assets/web dev.png"
import res from '../assets/res.png'
import '../App.css'

const  service=[
    {
      id:1,
      src:web2,
      des: "Adapting to new technologies and frameworks",
    },
    {
        id:2,
        src:res,
        des:"Troubleshooting complex issues and optimizing system performance",

      }    ,
      {
        id:3,
        src:sup,
        des:"Collaborating with cross-functional teams to deliver high-quality products ",

      }    ,
      {
        id:4,
        src:web,
        des:"Developing efficient and well-documented code ",

      },

]

export default function About() {
    return (
        <div name="About" className="background max-w-screen-2xl mx-auto xl:px-24 my-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="w-1/2">
                    <h1 className="text-3xl text-blue-900 font-bold lg:w-1/2 mb-3">Are You Looking For A Proffessional To Hire?</h1>
                    <h1 className="text-base text-blue-200">Highly motivated and detail-oriented software developer with a years of experience in designing, developing, and deploying scalable software solutions. Passionate about staying up-to-date with the latest technologies and trends, I continuously seek to improve my skills and knowledge. With a strong foundation in Javascript and it's frameworks,:</h1>
                </div>               

                <div className="md:1/2 flex mt-10 ">
                    <div className='grid sm:grid-cols-2 grid-cols1  gap-8 items-center'>
                        {
                            service.map((item,i)=>(
                                <div key={i} className='shadow-md h-[200px] rounded-xl py-5 px-4 text-center space-y-2 text-blue-600 cursor-pointer h
                                hover:border-gray-600 transition-all duration-300 hover:border  bg-zinc-200'>
                                    <img src={item.src} alt={item.src}  className='mx-auto h-20 w-20'/>
                                    <p className=''>{item.des}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}