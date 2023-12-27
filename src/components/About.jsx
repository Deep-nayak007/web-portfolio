import React from 'react'

const About = () => {
  return (
    <div name="about"
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'> 
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 text-lime-400 p-2 inline'>About</p>
            </div>
            <p className='text-xl mt-08'>
            With a robust two-year work experience as a software developer at Link Group which is a leading fintech company,
            I've garnered invaluable experience in the ever-evolving tech landscape. Proficient in .NET MVC, JavaScript, 
            and React.js, I've actively contributed to developing cutting-edge solutions that drive innovation 
            in the financial technology sector. My journey has equipped me with a deep understanding of fintech intricacies,
            from optimizing financial processes to implementing scalable solutions. Now, as I embark on a new career chapter, 
            I am eager to leverage my skills, passion for technology, and industry insights to make impactful contributions in
            a dynamic and growth-oriented role.

            </p>

            <br/>

            {/* <p className='text-xl '>
            Skill sets: 
            </p> */}
            <p><h1 className='text-xl text-fuchsia-400 p-2 inline'>Programming skills: </h1>.Net MVC, .NET CORE, PHP, SQL, React JS, HTML, CSS, JavaScript, Bootstrap, REST APIS.</p>
            
            <br>
            </br>

            <p><h1 className='text-xl text-fuchsia-400 p-2 inline'>Technology used: </h1>Postman, Visual Studio Code , Microsoft SQL Server, Visual Studio, Unity, Fiddler, SOAP UI.</p>

        </div>
    </div>
  )
}

export default About
