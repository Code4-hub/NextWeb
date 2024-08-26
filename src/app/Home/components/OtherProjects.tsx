import { FaGithub } from "react-icons/fa";
import {motion} from 'framer-motion'
import P1 from  '../components/Programming/P1.png'
import P2 from  '../components/Programming/P2.jpg'
import P3 from  '../components/Programming/P3.png'
import P4 from  '../components/Programming/P4.jpg'
import P5 from '../components/Programming/P5.jpeg'
import white from  '../components/Programming/White.jpg'




const OtherProjects = () => {

    const PROJECTS = [
        {
          title: "Price Comparison App (API)",
          description:
            "Welcome to the Price Comparison App! This application helps users find the best prices for products they want to buy online by comparing prices from various online stores like Amazon, Jumia, and others. This project is developed using Node.js and is designed for collaborative team development.",
          technologies1: P1,
          technologies2: white,
          technologies3 : white,
          src : "https://github.com/automatorDev-soft/realPriceApi"
        },
        {
          title: "KnowledgeShare",
          description:
            "KnowledgeShare is an online platform that allows users to share and access educational resources for free. Users can create profiles, publish articles, and upload courses. Users can explore courses The app also integrates free online courses from platforms through web scraping.",
            technologies3 : P4, 
            technologies1: P2,
          technologies2 : P1,
          src : "https://github.com/automatorDev-soft/KnowledgeShare/tree/main"
        },
        {
          title: "Professor",
          description:
            "Professor. Is an application which is purpose of life is to teach kids mathematical operations it will give you a chance to choose a level and a mathematical operation than you would have a teen mathematical problem if you made 3 mistakes in the same mathematical problems you would have -1 in the total score.",
          technologies1: P3,
          technologies2 : white,
          src : "https://github.com/Code-With-Amine/Professor"
        },
        {
          title: "TaskManagerAPI (API)",
          description:   
          "The TaskManagerAPI provides robust functionality for creating, managing, and tracking tasks and projects. It offers endpoints for task assignment, status updates, and deadline management, integrating seamlessly with your workflow. Ideal for teams and individuals seeking efficient task organization and real-time progress monitoring.",
          technologies2 : P4, 
          technologies1: P2,
          src : "https://github.com/Code-With-Amine/taskManagerAPI/tree/main",
        },
        {
          title: "CallFitness (API)",
          description:
            "CallFitness with Blade is a powerful API designed to enhance fitness applications by providing real-time workout tracking and personalized exercise recommendations. Leveraging Blade’s advanced algorithms, it delivers tailored fitness plans and progress insights, ensuring optimal performance and motivation. Ideal for developers looking to integrate dynamic fitness solutions into their apps..",
          technologies1: P1,
          technologies2 : P5,
        },
      ];
    return (
        
       <div className="pb-4 text-center">
        <div className="flex flex-col items-center ">
        <h2 className="text-5xl lg:text-7xl max-w-xl font-semibold text-center">
          Other work
        </h2>
        <h3 className="my-5 text-muted-foreground">
          Get to know our work.
        </h3>
        </div>
        <div>{PROJECTS.map((projects , index) => (
<div key={index} className='mb-8 flex flex-wrap lg:justify-center mt-[90px] '>
    <motion.div
    initial={{opacity : 0 , x : 100}}
    whileInView={{opacity : 1 , x : 0}}
    transition={{duration : 0.7}}
    viewport={{once : true}}
    className='w-full max-w-xl lg:3/4'>
        <h6 className='mb-2 text-2xl font-bold'>{projects.title}</h6>
        <h6 className='mb-4 text-neutral-400 max-w-3xl'>{projects.description}</h6>
        <div className="flex">
        <img src={projects.technologies1}
        width={20}
        className=" ml-8"
        />
        <img src={projects.technologies2}
        width={21}
        className="ml-8"
        />
        
        </div>
    </motion.div>
    <a href={projects.src}><FaGithub className="text-2xl mt-[30px] ml-8"/></a>
</div>


        ))}
        </div>
       </div>
    )
}

export default OtherProjects