import { BsPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"

const linksIcon = [
    {
        id: 1,
        child: (
            <>
                Github
                <FaGithub size={30} />
            </>
        ),
        href: "https://github.com/thayour02",
        style:"rounded-tr-md"
    },
    {
        id: 2,
        child: (
            <>
                Linkedin
                <FaLinkedin size={30} />
            </>
        ),
        href: "https://www.linkedin.com/in/usman-temytayo-85a75329a"

    },
    {
        id: 3,
        child: (
            <>
                Resume
                <BsPersonFill size={30} />
            </>
        ),
        downlod: true,
        href:"/myResume-3.pdf"
    },
    {
        id: 4,
        child: (
            <>
                Mail
                <HiOutlineMail size={30} />
            </>
        ),
        href: "mailto:temyking@gmail.com.com",
        style:"rounded-br-md"
    }
]

export default linksIcon