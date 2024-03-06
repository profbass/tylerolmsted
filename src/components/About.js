import Skills from "./Skills";
// import FadeInElement from "../utils/FadeInElement";

// const { fadeElementIn } = FadeInElement;
// ref={fadeElementIn}

const About = () => {

  return (
    <div id="about" className="transition-all will-change-auto">
      <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <h2 className="font-header2 font-semibold uppercase text-4xl text-primary sm:text-5xl lg:text-6xl">
            Who am I?
          </h2>
          <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            I'm Tyler Olmsted, and I love building great products!
          </h4>
          <p className="pt-6 font-body leading-relaxed text-grey-20">
            With over fifteen years in the tech industry, I have spearheaded software teams in <b>crafting cutting-edge SaaS and mobile applications</b>, steering them from conceptualization to successful launch. I thrive on igniting an organization's maximum potential, <b>cultivating a culture rooted in user-centric innovation</b>, and continually pushing the boundaries of what is attainable. My passion lies in leveraging <b>agile methodologies, rapid prototyping, and lean startup principles</b> to drive product development and deliver scalable solutions in fast-paced startup environments.
          </p>
          <p className="pt-6 font-body leading-relaxed text-grey-20">
            Most recently, as <b>VP of Engineering at Backflip</b>, I established the engineering teams and led the <b>launch of their flagship iOS and Android apps</b>. Throughout my tenure there, I guided the team through a <b>successful Series A funding round</b> and played a pivotal role in <b>architecting and building Backflip's engineering and IT infrastructure</b>, ensuring scalability and resilience to support rapid expansion and innovation.
          </p>
          <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
          </div>
        </div>
        <Skills />
      </div>
    </div>
  );
};

export default About;
