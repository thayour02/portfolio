export default function Contact() {
    return (
        <div name="Contact" className="w-full background p-4 text-white h-[750px]">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="">
                    <p className="text-4xl border-b-4 inline border-gray-500">Contact</p>
                    <p className="py-6">Please Submit the form below to get in touch with me</p>
                </div>

                <div className="flex  justify-center">
                    <form action="https://getform.io/f/amdpjdxb" method="POST" className="flex flex-col w-full md:w-1/2">
                        <input type="text"
                            name="name"
                            required
                            placeholder="Enter Your Name"
                            className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                        <input type="email"
                            name="name"
                            required
                            placeholder="Enter Your Mail"
                            className="p-2 bg-transparent border-2 my-4 rounded-md text-white focus:outline-none" />

                        <textarea name="message" rows="10" 
                        required
                        className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none text-white" id=""
                        placeholder="Please Enter Your Message"></textarea>
                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300">Let's Talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}