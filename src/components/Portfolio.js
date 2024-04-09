const portfolioItems = [
    {
        src: "/images/portfolio/1.png",
        link: "",
        alt: "Portfolio Item 1",
    },
    {
        src: "/images/portfolio/1.png",
        link: "",
        alt: "Portfolio Item 2",
    },
    {
        src: "/images/portfolio/1.png",
        link: "",
        alt: "Portfolio Item 3",
    },
];

const PortfolioStruct = ({ src, link, alt }) => {
    return (
        <a
            href={link}
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
        >
            <img
                src={src}
                className="w-full shadow"
                alt={alt}
            />
        </a>
    );
};

export default function Portfolio() {
    return (
        <div className="container py-16 md:py-20" id="portfolio">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                Check out my Portfolio
            </h2>
            <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                Here's what I have done with the past
            </h3>

            <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
                {portfolioItems.map((item, index) => (
                    <PortfolioStruct
                        key={index}
                        src={item.src}
                        link={item.link}
                        alt={item.alt}
                    />
                ))}
            </div>
        </div>
    );
}
