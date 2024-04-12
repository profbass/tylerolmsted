import Reveal from "../utils/Reveal";
import { motion } from "framer-motion";

const Experience = () => {

  const workExperience = [
    {
      company: 'booj',
      logo: '/img/logo-booj.svg',
      years: '2007 - 2017',
      position: 'Director of Production',
      delay: '0.7',
      description: `Joining the company as employee #2, I was instrumental in founding and scaling the engineering teams at booj, driving growth from 0 to 70 team members over the span of a decade. My leadership was integral to the development of booj’s award winning real estate platform, ultimately leading to its acquisition by RE/MAX in 2017. I was responsible for supervising the teams tasked with crafting core products, such as the home search mobile apps, Agent web/mobile CRM, CMS website builder, lead management engine, marketing campaign tools, and a real estate reporting suite.`
    },
    {
      company: 'RE/MAX',
      logo: '/img/logo-remax.svg',
      years: '2017 - 2022',
      position: 'Executive Director of Engineering',
      delay: '0.9',
      description: `In my role as Executive Director of Engineering, my's responsibilities included overseeing the roadmaps, processes, personnel, resourcing, and budgets for RE/MAX's product engineering teams following the booj acquisition. Collaborating closely with the product, support, and training teams, I played a key role in developing and maintaining RE/MAX's top-tier technology platform`
    },
    {
      company: 'Backflip',
      logo: '/img/logo-backflip.svg',
      years: '2022 - 2024',
      position: 'Vice President of Engineering',
      delay: '1.1',
      description: `Joining Backflip in early 2022, i established the engineering teams and led the launch of the flagship iOS and Android apps. Throughout my tenure, I guided the team through a successful Series A funding round. I played a pivotal role in architecting and building the company's engineering and IT infrastructure, ensuring scalability and resilience to support rapid expansion and innovation.`
    }
  ] 


const workBlockVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    backgroundColor: "#ff00ff",
    color: "#ff00ff",
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}
 const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      },
      hover: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        }
      }
    }
  }

  

  const ExperienceBlock = ({ item }) => {
   return (
    <motion.div 
      className="p-8 border-b-2 border-r-2 border-l-2 border-copy cursor-pointer"
      variants={workBlockVariants}
      inital="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className="flex items-center justify-center">
          <motion.div  
            alt={item.company} 
            className="item-center fill-yellow min-w-100 min-h-40"
            variants={imageVariants}
            inital="hidden"
            style={{
              backgroundImage: `url(${item.logo})`,
              filter: "invert(48%) sepia(44%) saturate(2778%) hue-rotate(346deg) brightness(100%) contrast(97%);"
            }}
          ></motion.div>
        <div className="hidden flex flex-col items-center ml-4">
          <img src={item.logo} alt={item.company} className="w-12 h-12 mr-4" />
          <p className="text-sm text-gray-500">{item.years}</p>
          <p className="text-sm text-gray-500">{item.position}</p>
          <p className="text-sm text-gray-600 mt-4">{item.description}</p>
        </div>
      </div>
    </motion.div>
   )
  }


  return (
    <section id="experience" className="mb-100 mt-60">
      <Reveal yValue={20}>
        <div className="text-base">
          <span className="text-primary pr-8 mr-2 inline-block border-b-4 border-b-secondary"></span>
          <span className="text-off-black inline-block font-semibold">Here' what I've been up to</span>
        </div>
        <h1 className="lg:text-vw-xl xs:text-8xl font-semibold leading-extra-tight">Experience</h1>
      </Reveal>
      <div className="flex flex-wrap w-full border-t-2 border-copy px-5 mt-20">
        {workExperience.map((item, index) => (
          <Reveal key={index} delayInView={item.delay}>
              <ExperienceBlock item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Experience;