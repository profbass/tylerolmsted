
const Experience = () => {
  const workExperience = [
    {
      company: 'booj',
      logo: '/img/logo-booj.svg',
      years: '2007 - 2017',
      position: 'Director of Production',
      description: `Joining the company as the second employee, I played a pivotal role in building and leading the engineering teams for over a decade at booj. My contribution was instrumental in the development of booj’s award-winning real estate platform, which culminated in its acquisition by RE/MAX in 2017. I oversaw the teams responsible for creating core products, including the home search mobile apps, Agent web/mobile CRM, CMS website builder, lead management engine, marketing campaign tools, and a real estate reporting suite.`
    },
    {
      company: 'RE/MAX',
      logo: '/img/logo-remax.svg',
      years: '2017 - 2022',
      position: 'Executive Director of Engineering',
      description: `In my role as Executive Director of Engineering, my responsibilities included overseeing the roadmaps, processes, personnel, resourcing, and budgets for RE/MAX's product engineering teams following the booj acquisition. Collaborating closely with the product, support, and training teams, Tyler played a key role in developing and maintaining RE/MAX's top-tier technology platform.`
    },
    {
      company: 'Backflip',
      logo: '/img/logo-backflip.svg',
      years: '2022 - 2024',
      position: 'Vice President of Engineering',
      description: `Joining Backflip in early 2022, I established the engineering teams and led the launch of the flagship iOS and Android apps. Throughout my tenure, I guided the team through a successful Series A funding round and was responsible for developing the company's engineering and IT infrastructure.`
    }
  ];

  return (
    <div className="container py-16 md:py-20" id="work">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        My work experience
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Here's where I've been
      </h3>
      <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
        <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

        {workExperience.map((experience, index) => (
          <div key={index} className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <img src={experience.logo} className="h-auto w-32" alt="company logo" />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">{experience.company}</span>
                    <span className="block font-body font-bold text-grey-40">{experience.years}</span>
                    <span className="block pt-2 font-header text-l font-bold uppercase text-yellow">{experience.position}</span>
                    <div className="pt-2">
                      <span className="block font-body text-black">{experience.description}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        ))}
      </div>
    </div>
  );
};

export default Experience;