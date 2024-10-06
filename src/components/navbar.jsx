import { Link } from 'react-scroll'
import logo from '../assets/download.webp'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaBars,FaTimes } from 'react-icons/fa'
import '../App.css'



export default function Navbar() {
    const navItems =
        <>
            <li>
                <Link to='Home' smooth duration={600}>
                    <a onClick={handleCloseBar}>Home</a>
                </Link>
            </li>
            <li>
                <Link to='Project' smooth duration={600}>
                    <a onClick={handleCloseBar}>Project</a>
                </Link>
            </li>
            <li>
                <Link to='Skills' smooth duration={600}>
                    <a onClick={handleCloseBar}>Skills</a>
                </Link></li>
            <li>
                <Link to='About' smooth duration={600}>
                    <a onClick={handleCloseBar}>About</a>
                </Link>
            </li>

        </>
    const [isOpen, setIsOpen] = useState(false)

    async function handleCloseBar() {
        setIsOpen((prev) => !prev);
    }


    return (
        <header className='max-w-screen-2xl xl:px-24 px-4 md:px-20 container mx-auto background  fixed top-0 left-0 z-50 '>
                <div  className='flex  justify-between gap-[250px] items-center'>
                    <div>
                        <a href='/' className='text-xl font-bold text-white flex  
                        items-center'>
                            <img className='w-[40px] h-[40px] rounded-[100%]' src={logo} alt="" />
                            <span className='pt-2'>thayour </span>
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex text-white">
                        <ul className="menu menu-horizontal px-1 text-normal text-[16px]">
                            {navItems}
                        </ul>
                    </div>
                    <div className="px-20 ">
                    <Link to='Contact' smooth duration={500}>
                        <a className="btn  bg-cyan-500 hover:bg-zinc-900 text-white border-none hover:translate-x-4 transition duration-300">Contact</a>
                    </Link>
                   </div>

                
              

                    {/* handleCloseBar btn */}
                    <div className=' px-10' >
                        <button className='lg:hidden block' onClick={() => setIsOpen((prev) => !prev)}>
                            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                        </button>
                    </div>
            </div>
            {/* handleCloseBar */}
            <div className={`${isOpen ? 'flex bg-zinc-600 w-[140px] justify-end  ml-[200px] cursor-pointer' : 'hidden'
                    }  p-6 top-15 right-0 mx-4 rounded-xl my-2 lg:hidden flex-col  pl-8 gap-3 `}>
                        {navItems}
             </div>
        </header>
    )
}