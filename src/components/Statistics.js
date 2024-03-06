// import FadeInElement from "../utils/FadeInElement";

// const { fadeElementIn } = FadeInElement;

const statsObjects = [
  { icon: '/img/icon-project.svg', number: '50+', text: 'Projects Delivered' },
  { icon: '/img/icon-award.svg', number: '5', text: 'Awards Won' },
  { icon: '/img/icon-happy.svg', number: '100%', text: 'Client Satisfaction' },
  { icon: '/img/icon-puzzle.svg', number: '0', text: 'Critical Issues' },
];

const Statistics = () => {
  return (
    <div className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24" style={{backgroundImage: 'url(/img/experience-figure.png)'}} id="statistics">
      <div className="container">
        <div className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
          <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
          {statsObjects.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center md:flex-row md:text-left hover: transform hover:scale-110 transition-all">
              <div>
                <img src={stat.icon} className="mx-auto h-12 w-auto md:h-20" alt="icon project" />
              </div>
              <div className="pt-5 md:pl-5 md:pt-0">
                <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">{stat.number}</h1>
                <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">{stat.text}</h4>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
