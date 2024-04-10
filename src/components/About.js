import Skills from "./Skills";
import Reveal from "../utils/Reveal";
import Avatar from "./Avatar";
import { motion } from "framer-motion";

const About = () => {

  return (
    <section id="about">
      <div className="container mx-auto">
        <div className="flex flex-wrap w-full pace-x-0.5 pt-20">
          <div className="md:w-2/3 lg:pr-36 md:pr-10">
            <div className="flex">
              <div className="pr-5"><Avatar /></div>
              <div>
                <Reveal>
                  <div className="text-base mb-3">
                    <span className="text-primary pr-8 mr-2 inline-block border-b-4 border-b-secondary"></span>
                    <span className="text-grey-10 inline-block font-semibold">THE MAN OF ACTION</span>
                  </div>
                  <h2 className="text-left font-header2 leading-tight font-semibold text-primary md:text-6xl sm:text-7xl xs:text-6xl lg:text-8xl">
                  Who<br />am I?
                  </h2>
                </Reveal>
              </div>
            </div>
            <Reveal delayInView="0.25">
              <h4 className="pt-6 font-header text-xl text-copy font-medium sm:text-2xl lg:text-3xl">
                I'm <span className="font-bold text-primary underline">Tyler</span>, and I <span className="text-secondary font-semibold">love</span> building inspired experiences!
              </h4>
            </Reveal>
            <Reveal delayInView="0.5">
              <p className="pt-6 text-xl font-body leading-relaxed text-copy">
                With over eighteen years in the tech sector, I've propelled teams toward crafting state-of-the-art SaaS and mobile apps from scratch to stellar launches. My forte lies in fusing agile methodologies, rapid prototyping, and lean startup principles to ignite innovation and deliver robust, scalable solutions in the dynamic world of startups.
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
    </section>
    
  );
};

export default About;
