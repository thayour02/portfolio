import { motion, useInView, useAnimation } from "framer-motion";
import Skill from "./skill";
import Project from "./project";
import Contact from "./contact";
import About from "./about";
import Banner from "./banner";
import tayo from '../assets/download.webp';
import { useRef, useEffect } from "react";
import '../App.css'
import { useState } from "react";


export default function Home() {
    const bannerRef = useRef(null);
    const contactRef = useRef(null);
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const skillsRef = useRef(null);

    const bannerInView = useInView(bannerRef, { once: true });
    const contactInView = useInView(contactRef, { once: true });
    const aboutInView = useInView(aboutRef, { once: true });
    const projectInView = useInView(projectRef, { once: true });
    const skillsInView = useInView(skillsRef, { once: true });

    const bannerControl = useAnimation();
    const contactControl = useAnimation();
    const aboutControl = useAnimation();
    const projectControl = useAnimation();
    const skillsControl = useAnimation();

    useEffect(() => {
        if (bannerInView) bannerControl.start("visible");
    }, [bannerInView]);

    useEffect(() => {
        if (contactInView) contactControl.start("visible");
    }, [contactInView]);

    useEffect(() => {
        if (aboutInView) aboutControl.start("visible");
    }, [aboutInView]);

    useEffect(() => {
        if (projectInView) projectControl.start("visible");
    }, [projectInView]);

    useEffect(() => {
        if (skillsInView) skillsControl.start("visible");
    }, [skillsInView]);

    const variants = {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
    };

    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting]=useState(false)
    const toRotate = ["Full Stack Developer", "Backend Developer", "Frontend Developer"]

    const [text,setText] = useState('')
    const period = 2000
    const [delta, setDelta] = useState(300 - Math.random() * 100)

    useEffect(() => {
        const ticker = setInterval(tick, delta);
        return () => clearInterval(ticker);
      }, [delta, text]);
      
      
    const tick = ()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ""){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }
    return (
        <div>
            <motion.div
                ref={bannerRef}
                name="Home"
                className="md:px-12  max-w-screen-2xl max-auto   background"
                variants={variants}
                initial="hidden"
                animate={bannerControl}
                transition={{ duration: 0.5, delay: 0.25, type: 'tween', stiffness: 100 }}
            >
                <Banner
                    heading={`Hello 👋, I'm a ${text} `}
                    subheading={`I have a year experience building and designing software app.
                        currently, i love to work on web application using
                        technologies like
                        React, Tailwind, Node JS and MongoDB`}
                    banner={tayo}
                />
            </motion.div>
            <motion.div
                ref={skillsRef}
                variants={variants}
                initial="hidden"
                animate={skillsControl}
                transition={{ duration: 0.5, delay: 0.25, type: 'tween', stiffness: 100 }}

            >
                <Skill />
            </motion.div>
            <motion.div
                ref={projectRef}
                variants={variants}
                initial="hidden"
                animate={projectControl}
                transition={{ duration: 0.5, delay: 0.25, type: 'tween', stiffness: 100 }}
            >
                <Project />
            </motion.div>
            <motion.div
                ref={aboutRef}
                variants={variants}
                initial="hidden"
                animate={aboutControl}
                transition={{ duration: 0.5, delay: 0.25, type: 'tween', stiffness: 100 }}
            >
                <About />
            </motion.div>
            <motion.div
                ref={contactRef}
                variants={variants}
                initial="hidden"
                animate={contactControl}
                transition={{ duration: 0.5, delay: 0.25, type: 'tween', stiffness: 100 }}
            >
                <Contact />
            </motion.div>
        </div>
    );
}
