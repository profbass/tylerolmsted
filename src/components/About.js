const About = () => {
  return (
    
    <div id="about">
      <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <h2 className="font-header2 font-semibold uppercase text-4xl text-primary sm:text-5xl lg:text-6xl">
            Who am I?
          </h2>
          <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            I'm Tyler Olmsted, and I love building great products!
          </h4>
          <p className="pt-6 font-body leading-relaxed text-grey-20">
          With over fifteen years in the tech industry, I have spearheaded software teams in <b>crafting cutting-edge SaaS and mobile applications</b>, steering them from conceptualization to successful launch. I thrives on igniting an organization's maximum potential, <b>cultivating a culture rooted in user-centric innovation</b>, and continually pushing the boundaries of what is attainable. My passion lies in leveraging <b>agile methodologies, rapid prototyping, and lean startup principles</b> to drive product development and deliver scalable solutions in fast-paced startup environments.</p>
          <p className="pt-6 font-body leading-relaxed text-grey-20">
            Most recently, As <b>VP of Engineering at Backflip</b>, I established the engineering teams and led the <b>launch of their flagship iOS and Android apps</b>. Throughout my tenure there, I guided the team through a <b>successful Series A funding round</b> and played a pivotal role in <b>architecting and building Backflip's engineering and IT infrastructure</b>, ensuring scalability and resilience to support rapid expansion and innovation.
          </p>
          <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
            {/* ToDo: update copy and values */}
          </div>
        </div>
        <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
          <div>
            <div className="flex items-end justify-between">
              <h4 className="font-header3 font-semibold uppercase text-black">
                Strategic Vision
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">100%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div className="h-3 rounded-full bg-coral" style={{ width: '100%' }}></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-header3 font-semibold uppercase text-black">Technical Leadership</h4>
              <h3 className="font-body text-3xl font-bold text-primary">100%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div className="h-3 rounded-full bg-coral" style={{ width: '100%' }}></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-header3 font-semibold uppercase text-black">
                Lean Startup Methodologies 
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">100%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div className="h-3 rounded-full bg-coral" style={{ width: '100%' }}></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-header3 font-semibold uppercase text-black">
                Application Development
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">95%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div className="h-3 rounded-full bg-coral" style={{ width: '95%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
