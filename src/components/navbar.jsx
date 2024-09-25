import { Link } from 'react-scroll'
import logo from '../assets/download.webp'


export default function Navbar() {
    const navItems = 
        <>
            <li>
                <Link to='Home' smooth duration={600}>
                <a>Home</a>
                </Link>
            </li>
            <li>
               <Link to='Project' smooth duration={600}>
               <a>Project</a>
               </Link>
            </li>
            <li>
                <Link to='Skills' smooth duration={600}>
                <a>Skills</a>
                </Link></li>
            <li>
                <Link to='About' smooth duration={600}>
                <a>About</a>
                </Link>
            </li>

        </>
    
    return (
        <header className='max-w-screen-2xl container mx-auto bg-zinc-800 fixed top-0 left-0 z-10 '>
            <div className="navbar xl:px-40">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden bg-zinc-500 hover:bg-zinc-600 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                { navItems }
                        </ul>
                    </div>
                    <div>
                        <a href='/' className='text-xl font-bold text-white flex
                        items-center'>
                            <img className='w-[40px] h-[40px] rounded-[100%]' src={logo} alt="" />
                            <span className='-10'>thayour </span>
                        </a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex text-white">
                    <ul className="menu menu-horizontal px-1 text-2xl font-bold ">
                        { navItems }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='Contact' smooth duration={500}>
                    <a className="btn">Contact</a>
                    </Link>
                </div>
            </div>
        </header>
    )
}