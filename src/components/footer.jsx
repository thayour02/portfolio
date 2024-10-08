
import img from '../assets/download.webp'
import {  FaGithub,  FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail  } from "react-icons/hi"
import { Link } from 'react-scroll'
export default function Foooter() {


    return (
        <div className="mt-10 text-white  w-full p-4 max-w-screen-2xl mx-auto xl:px-24 px-10">
            <footer className="footer bg-neutral text-neutral-content items-center p-4">
                <aside className="grid-flow-col items-center">
                    <Link to='/' className='text-xl font-bold text-purple-700 flex
                        items-center'>
                        <img className='img' src={img} alt="" />
                        <p>Job <span className='text-white'>Portal</span></p>
                    </Link>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a>
                        <a href="https://github.com/thayour02">
                            <FaGithub />
                        </a>
                    </a>
                    <a>
                        <a href="https://www.linkedin.com/in/usman-temytayo-85a75329a"
                        >
                      <FaLinkedin/>
                        </a>
                    </a>
                    <a>
                        <a href="mailto:temyking@gmail.com.com"></a>
                        <HiOutlineMail />
                    </a>
                </nav>
            </footer>

        </div>
    )
}

