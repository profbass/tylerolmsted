// import FadeInElement from "../utils/FadeInElement";

// const { fadeElementIn } = FadeInElement;

const Expertise = () => {
    const expertiseData = [
        {
            icon: '/img/icon-development-white.svg',
            alt: 'development icon',
            title: 'Technical Direction',
            description: 'Leading the development of web and mobile applications',
        },
        {
            icon: '/img/icon-content-white.svg',
            alt: 'content marketing icon',
            title: 'Leadership & Management',
            description: 'Leading teams to build great products',
        },
        {
            icon: '/img/icon-email-white.svg',
            alt: 'Email Marketing icon',
            title: 'Process Management',
            description: 'Empowering teams to build great products',
        },
        {
            icon: '/img/icon-design-white.svg',
            alt: 'Theme Design icon',
            title: 'Product Direction',
            description: 'Creating high value product roadmaps',
        },
        {
            icon: '/img/icon-mobile-white.svg',
            alt: 'Mobile Application icon',
            title: 'Mobile Development',
            description: 'Building cutting-edge mobile applications',
        },
        {
            icon: '/img/icon-graphics-white.svg',
            alt: 'Graphic Design icon',
            title: 'Web Development',
            description: 'Building cutting-edge web and SaaS applications',
        },
    ];

    return (
        <div className="container relative py-16 md:py-20 transition-all" id="services">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                What I do
            </h2>
            <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                Here are my areas of expertise
            </h3>
            <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
                {expertiseData.map((item, index) => (
                <div
                    key={index}
                    className="group bg-primary rounded px-8 py-12 shadow hover:bg-white transition-all duration-300 transform hover:scale-105"
                >
                    <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                    <div className="block group-hover:hidden">
                        <img src={item.icon} alt={item.alt} />
                    </div>
                    <div className="hidden group-hover:block">
                        <img
                        src={item.icon.replace("-white", "-black")}
                        alt={item.alt}
                        />
                    </div>
                    </div>
                    <div className="text-center">
                    <h3 className="pt-8 text-lg font-semibold uppercase text-yellow group-hover:text-primary lg:text-xl">
                        {item.title}
                    </h3>
                    <p className="text-grey pt-4 text-white text-sm group-hover:text-black md:text-base">
                        {item.description}
                    </p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Expertise;
