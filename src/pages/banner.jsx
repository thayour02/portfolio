import { Link } from "react-scroll"
import { motion } from "framer-motion"
import { FaLongArrowAltRight } from "react-icons/fa"

export default function Banner({ banner, heading, subheading,  }) {
    return (
        <div className=" md:rounded-xl 
        md:rounded-br-[80px] md:p-9 px-4  min-h-screen">
            <div className="flex flex-col md:flex-row gap-12 pt-20 items-center justify-between pt-20">
                {/* banner?\ */}
                <motion.div className="md:w-3/5 text-white"
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate="visible">
                    <motion.h1 className="md:text-6xl text-5xl font-bold  mb-6 leading-relaxed">{heading}</motion.h1>
                    <p className=" text-[#f7fdfd] mb-8">{subheading}
                    </p>
                    <Link to='Project' className="" smooth duration={600}>
                        <button className="group flex items-center text-white w-fit px-6 my-2 rounded-md 
                      bg-gradient-to-r from-cyan-500  to-blue-400 cursor-pointer text-xl h-10 ">
                            Portfolio
                            <span className="group-hover:rotate-90 mt-2 ml-2 duration-300 cursor-pointer">
                                {<FaLongArrowAltRight size={20} />}
                            </span>
                        </button>
                    </Link>
                </motion.div>
                {/* banner image */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate="visible"
                >
                    <img
                        src={banner}
                        alt="myProfile"
                        className=" lg:h-[300px] md:w-80  w-80 rounded-lg" />
                </motion.div>
            </div>
        </div>
    )
}