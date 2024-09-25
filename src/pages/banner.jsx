import { Link } from "react-scroll"
import { FaLongArrowAltRight } from "react-icons/fa"

export default function Banner({banner,heading, subheading}){
    return (
        <div className=" md:rounded-xl 
        md:rounded-br-[80px] md:p-9 px-4 py-9 ">
            <div className="flex flex-col md:flex-row gap-10 items-center justify-between pt-40 ">
                {/* banner?\ */}
                <div className="md:w-3/5 text-white">
                    <h1 className="md:text-6xl text-5xl font-bold  mb-6 leading-relaxed">{heading}</h1>
                    <p className=" text-[#f7fdfd] mb-8">{subheading}
                    </p>
                    <Link to='Project' smooth duration={500}>
                    <button className="group flex items-center text-white w-fit px-6 my-2 rounded-md 
        bg-gradient-to-r text-xl h-10 from-cyan-500 to-blue-400 cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 mt-2 ml-2 duration-300">
                            <FaLongArrowAltRight size={20} />
                        </span>
                    </button>
                </Link>
                </div>
                {/* banner image */}
                <div>
                <img
                    src={banner}
                    alt="myProfile"
                    className=" lg:h-[300px] md:w-80   rounded-lg" />
            </div>
            </div>
        </div>
    )
}