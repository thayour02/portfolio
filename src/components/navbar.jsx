import { Link } from 'react-scroll'
import logo from '../assets/download.webp'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
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
    const [isSticky, setSticky] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        };
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.addEventListener('scroll', handleScroll)
        }
    }, [])
    async function handleCloseBar() {
        setIsOpen((prev) => !prev);
    }


    return (
        <>
            <header className="max-w-screen-2xl background container fixed mx-auto lg:fixed md:fixed sm:fixed top-0 left-0 right-0 z-10 transition-all duration-300 ease-in-out">
                <div className={`navbar fixed top-0 left-0 background right-0 z-10 transition-all duration-300 ease-in-out xl:px-28 ${isSticky ? "shadow-md  transition-all duration-300 ease-in-out ease-in-out" : ""}`}>
                    <div className="navbar-start">
                        <div className='flex '>
                            <img className="w-{40px} h-[40px] rounded-[100%]" src={logo} alt="" />
                            <p className="text--700 pt-4 hidden md:block">thayour</p>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex text-base-100">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                        <Link to='Contact' className='hidden lg:block px-10 ' smooth duration={600}>
                            <button className='btn hover:bg-cyan-200 bg-blue-900 border-none hover:text-zinc-400  rounded-full px-6 text-white flex items-center gap-2'>Contact</button>
                        </Link>
                    </div>
                    <div className="dropdown ml-[120px]">
                        <button className='lg:hidden' onClick={() => setIsOpen((prev) => !prev)}>
                            {isOpen ? <FaTimes size={30} color='red-200' /> : <FaBars size={30} />}
                        </button>
                        <ul
                            tabIndex={0}
                            className={`${isOpen ? `menu absolute cursor-pointer menu-sm dropdown-content -ml-[120px] bg-base-100 rounded-box z-[1] mt-3 w-[160px] p-2 shadow` : 'hidden'}  container mx-auto lg:hidden flex-col pl-8 gap-3 py-5`}>
                            {navItems}
                            <Link to='Contact' className='' smooth duration={600}>
                            <button className='bg-' onClick={handleCloseBar}>Contact</button>
                        </Link>
                        </ul>
                    </div>

                </div>
            </header>
        </>
    )
}


