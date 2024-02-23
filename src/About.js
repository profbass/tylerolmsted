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
            I've been working in technology for more than a fifteen years - which means I have an AOL and MySpace account. In that time, I've led software development teams in building world-class SaaS and mobile applications, overseeing their journey from concept to launch. I am passionate about unlocking an organization's full potential by fostering a culture centered on user-centric innovation and consistently challenging the limits of what is achievable.<br /><br />
            Most recently, As VP of Engineering at Backflip, I led the launch and expansion of their Real Estate Investment mobile applications for iOS and Android.
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
                Web App Development
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">97%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div className="h-3 rounded-full bg-coral" style={{ width: '97%' }}></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-header3 font-semibold uppercase text-black">
                Mobile App Development
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
