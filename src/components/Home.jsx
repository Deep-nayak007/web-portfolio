import React from 'react'
import HeroImage from "../assets/heroImage1.png";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800' >
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <br></br>
                <br></br>
                <br></br>
                <h2 className='text-sm sm:text-7xl font-bold text-fuchsia-500'>Hi, I'm Deep Nayak, </h2>
                <br></br>
                <h2 className='text-2xl sm:text-2xl font-bold text-green-400'> I am a Full Stack Developer.</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    <span className='text-amber-500'>Position:</span> <span className='text-white'>Associate Developer At Link Group. </span><br/>
                    <span className='text-amber-500'>Duration:</span> <span className='text-white'>04th July 2022 - Present. </span><br/>
                    <span className='text-amber-500'>Education:</span> <span className='text-white'>Bachelors in Computer Engineering. </span><br/>
                    <span className='text-amber-500'>CGPA:</span> <span className='text-white'>8.58/10.00 </span><br/>
                    <span className='text-amber-500'>Programming Languages:</span> <span className='text-white'>c#, .NET MVC,<br/> .NET Core, React JS, HTML, CSS, JavaScript,<br/> PHP, SQL, Bootstrap, REST APIS . </span><br/>
                    <span className='text-amber-500'>Developer Tools:</span> <span className='text-white'> Visual Studio, Visual Studio Code, Microsoft SQL Server, Fiddler, SOAP UI, Postman. </span><br/>
                    
                </p>    
                <div>
                <Link
                    to="contact"
                    smooth
                    duration={500}
                        className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Contact
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={30} className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
            <br></br>
        </div>
    </div>
  )
}

export default Home
