import Skills from "./Skills";
import Reveal from "../utils/Reveal";
import { motion } from "framer-motion";

const About = () => {

  return (
    <div id="about" className="container">
      <div className="flex flex-wrap w-full">
        <div className="md:w-2/3">
        <Reveal>
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl xs:text-3xl lg:text-6xl">
          Who am I?
          </h2>
        </Reveal>
          <Reveal delayInView="0.25">
            <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              I'm Tyler Olmsted, and I love building great products!
            </h4>
          </Reveal>
          <Reveal delayInView="0.5">
            <p className="pt-6 font-body leading-relaxed text-grey-20">
              With over fifteen years in the tech industry, I have spearheaded software teams in <b>crafting cutting-edge SaaS and mobile applications</b>, steering them from conceptualization to successful launch. I thrive on igniting an organization's maximum potential, <b>cultivating a culture rooted in user-centric innovation</b>, and continually pushing the boundaries of what is attainable. My passion lies in leveraging <b>agile methodologies, rapid prototyping, and lean startup principles</b> to drive product development and deliver scalable solutions in fast-paced startup environments.
            </p>
          </Reveal>
          <Reveal delayInView="1">
            <p className="pt-6 font-body leading-relaxed text-grey-20">
              Most recently, as <b>VP of Engineering at Backflip</b>, I established the engineering teams and led the <b>launch of their flagship iOS and Android apps</b>. Throughout my tenure there, I guided the team through a <b>successful Series A funding round</b> and played a pivotal role in <b>architecting and building Backflip's engineering and IT infrastructure</b>, ensuring scalability and resilience to support rapid expansion and innovation.
            </p>
          </Reveal>
        </div>
        <motion.div 
          className="md:w-1/3 xs:w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
        >
          <Skills />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
