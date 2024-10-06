
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import Slider from "react-slick"

const skill = [
    {
        id: 1,
        src: <div
            className="radial-progress bg-primary text-primary-content border-primary border-4"
            style={{ "--value": 90 }}
            role="progressbar">
            90%
        </div>,
        title: "HTML ",
        style: "hover:shadow-orange-500 hover:scale-105 transition-all duration-200 "
    },
    {
        id: 2,
        src: <div
            className="radial-progress bg-primary text-primary-content border-primary border-4"
            style={{ "--value": 90 }}
            role="progressbar">
            90%
        </div>,
        title: "CSS",
        style: "hover:shadow-blue-500 hover:transition ease-in duration-3000 hover:scale-105 transition-all duration-200 "
    },
    {
        id: 3,
        src: <div
            className="radial-progress bg-primary text-primary-content border-primary border-4"
            style={{ "--value": 70 }}
            role="progressbar">
            70%
        </div>,
        title: "TAILWIND CSS",
        style: "hover:shadow-cyan-400 hover:scale-105 transition-all duration-200 "
    },
    {
        id: 4,
        src: <div
            className="radial-progress bg-primary text-primary-content border-primary border-4"
            style={{ "--value": 75 }}
            role="progressbar">
            75%
        </div>,
        title: "NODE JS EXPRESS ",
        style: "hover:shadow-green-500 hover:scale-105 transition-all duration-200 "
    },

    {
        id: 5,
        src: <div
            className="radial-progress bg-primary text-primary-content border-primary border-4"
            style={{ "--value": 60 }}
            role="progressbar">
            60%
        </div>,
        title: "JAVASCRIPT",
        style: "hover:shadow-yellow-500"
    },
    {
        id: 6,
        src: <div
            className="radial-progress bg-primary text-primary-content border-primary border-4"
            style={{ "--value": 70 }}
            role="progressbar">
            70%
        </div>,
        title: "REACT",
        style: "hover:shadow-blue- hover:scale-105 transition-all duration-200 "
    },
    {
        id: 7,
        src: <div
            className="radial-progress bg-primary text-primary-content border-primary border-4"
            style={{ "--value": 80 }}
            role="progressbar">
            80%
        </div>,
        title: "MONGODB",
        style: "hover:shadow-green-500 hover:scale-105 transition-all duration-200 "
    },

    {
        id: 9,
        src: <div
            className="radial-progress bg-primary text-primary-content border-primary border-4"
            style={{ "--value": 80 }}
            role="progressbar">
            80%
        </div>,
        title: "GITHUB 80%",
        style: "hover:shadow-blue-400 hover:scale-105 transition-all duration-200 "
    }
]

const SimpleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}>
            Next
        </div>
    )
}
const SimplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        >
            Prev
        </div>
    )
}

export default function Skill() {

    const slider = React.useRef(null)
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <SimpleNextArrow />,
        prevArrow: <SimplePrevArrow />
    };
    return (
        <div name="Skills" className="w-full rounded-3xl shadow-lg   max-h-screen-lg mt-40 md:mt-0">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div className="">
                    <p className="text-2xl sm:text-4xl font-bold border-b-4 border-gray-500 p-2  inline">Skills and Experience</p>
                    <p className="py-6">This are the technology have worked with</p>
                </div>

                <div className="md:absolute right-3 top-8 mb-10 md:mr-24">
                    <button onClick={() => slider?.current?.slickPrev()} className="btn p-2 rounded-full ml-5">
                        <FaAngleLeft className="w-8 h-8 p-1" />
                    </button>

                    <button onClick={() => slider?.current?.slickNext()} className="btn p-2 rounded-full ml-5">
                        <FaAngleRight className="w-8 h-8 p-1" />
                    </button>

                </div>

                <div className="text-center items-center flex   justify-center">
                    <Slider ref={slider} {...settings}
                        className="overflow-hidden mt-10  text-center  ">
                        {
                            skill.map(({ id, src, title, style }) => (
                                <div className={`hover:shadow-xl  transition-2 duration-300 ${style}`} key={id}>
                                    <p >{src}</p>
                                    <p className="font-semibold text-zinc-700 text-xl  mt-5 ">{title}</p>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>

        </div>


    )
}