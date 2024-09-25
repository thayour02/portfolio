import web from '../assets/web dev.png'
import dev from '../assets/web.png'
import sup from '../assets/sup.jpeg'


export default function About() {
    return (
        <div name="About" className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto xl:px-20 mt-20">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                <div className="lg:w-1/4">
                    <h1 className="text-3xl text-purple-900 font-bold lg:w-1/2 mb-3">Are You Looking For A Proffessional To Hire?</h1>
                    <h1 className="text-base text-purple-200">Highly motivated and detail-oriented software developer with a years of experience in designing, developing, and deploying scalable software solutions. Passionate about staying up-to-date with the latest technologies and trends, I continuously seek to improve my skills and knowledge. With a strong foundation in Javascript and it's frameworks,:</h1>
                </div>

                <div className='w-full lg:w-3/4'>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
                        <div className='bg-zinc-600 cursor-pointer rounded-[35px] shadow-lg p-8 items-center flex justify-center hover:-translate-y-4 transition duration-300'>
                            <div>
                                <img src={dev} alt="" className='h-40 w-[300px]' />
                                <h2 className=' font-semibold text-white text-xl  mt-5 '>Developing efficient and well-documented code</h2>
                            </div>
                        </div>

                        <div className='bg-white  mt-20  cursor-pointer rounded-[35px] shadow-lg p-8 items-center flex justify-center hover:-translate-y-4 transition duration-300'>
                            <div>
                                <img src={sup} alt="" className='w-[300px] h-40' />
                                <h5 className=' font-semibold  text-zinc-800 text-xl px-5 text-center mt-5'>Collaborating with cross-functional teams to deliver high-quality products </h5>
                            </div>
                        </div>

                        <div className='bg-zinc-600 cursor-pointer rounded-[35px] shadow-lg p-8 items-center flex justify-center hover:-translate-y-4 transition duration-300'>
                            <div>
                                <img src={web} alt="" className='h-40 w-[300px]' />
                                <h5 className=' font-semibold text-white text-xl  mt-5'>Troubleshooting complex issues and optimizing system performance</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}