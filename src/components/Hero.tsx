"use client"
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    
    return (
        <>
        <div className="bg-navy w-full h-auto justify-center items-center content-center mt-10 inset-0 md:px-40 p-20">
            <h1 className="text-aquamarine font-sans text-xl"> Hi, my name is</h1>
            <h1 className="text-lavendar md:text-7xl text-3xl font-bold font-sans mt-6">Raghav Kashyap.</h1>
            <TypeAnimation className="text-lightslategray md:text-7xl font-bold font-sans mt-14 text-3xl" sequence={[
                    "I am a Software Engineer",
                    2000,
                    "I am a Mobile Developer",
                    2000,
                    "I am a Full Stack Developer",
                    2000
                ]} speed={10} repeat={Infinity} />
            <h1 className="text-lightslategray mt-4 font-sans text-xl lg:w-1/2 text-justify">I am a 23 year old Developer who loves creating stuff that work on bits. Currently, I am focused on building blockchain D-Apps</h1>
            <a href="https://www.github.com/jellybeansenjoyer">
            <div className="hover:bg-aquamarine group bg-transparent p-4 border border-aquamarine rounded-md cursor-pointer md:max-w-96 max-w-56 mt-16">
                <h1 className="font-sans  group-hover:text-navy  text-aquamarine text-center cursor-pointer">Check out my latest Work!</h1>
            </div>
            </a>
        </div>
       
        </>
    )
}

export default Hero;