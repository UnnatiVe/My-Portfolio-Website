import React,{useRef} from 'react'
import {motion,useScroll} from "framer-motion"
import LiIcon from "./LiIcon"
const Details = ({position,company,companyLink,time,address,work}) =>{
const ref= useRef(null);

  return(
   <li ref={ref} className='my-8 first:mt-0 last:mb:0 w-[60%] mx-auto flex flex-col items-center justify-between
   md:w-[80%]'>
    <LiIcon reference={ref} />

    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5, type:"spring"}}
    >
      <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;
        <a href={companyLink}
      target="_blank"
      className='text-primary dark:text-primaryDark capitalize'
      >@{company}</a></h3>
      <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
        {time} | {address}
      </span>
      <p className='font-medium w-full md:text-sm'>
        {work}
      </p>
    </motion.div>
  </li>
  );
}
const Experience = () => {
  const ref= useRef(null);
  const{scrollYProgress} = useScroll(
    {
      target: ref,
      offset:["start end", "center start"]
    }
  )
  return (
    <div className='my-64'>
      <h2 className ='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 '>
        Experience
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

        <motion.div
        style={{scaleY:scrollYProgress}} 
        className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
         md:w-[2px] md:left-[30px] xs:left-[20px]"/>
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
          
   position= "Intern" company="Prasunet Company"
   companyLink="https://prasunet.com/"
    time="2024-Present" address="Online"

    work="Working as a frontend developer at Prasunet Company and handling tasks independently has significantly enhanced my professional skills and personal growth. I have gained proficiency in essential frontend technologies such as HTML, CSS, and JavaScript, along with frameworks like React and Angular. "

/>
<Details
          
          position= "participant" company="Google Girl Hackathon"
          companyLink="www.google.com"
           time="2024" address="Online"
       
           work="Participating in the Google Girl Hackathon was an enriching experience.During Round 2, there were two complex coding questions that further challenged my abilities.
             This experience not only sharpened my coding skills but also exposed me to competitive programming and innovative problem-solving techniques."
       
       />
       <Details
          
          position= "participant" company="Hacktoberfest 2023"
          companyLink="https://hacktoberfest.digitalocean.com/"
           time="2023" address="Online"
       
           work=" Participating in Hacktoberfest 2023 was a rewarding experience. I contributed to open-source projects, tackled various coding challenges, and collaborated with developers worldwide. This event enhanced my proficiency in version control systems like Git and improved my understanding of collaborative software development practices."
       
       />
        </ul>
      </div>
    </div>
  )
}

export default Experience
