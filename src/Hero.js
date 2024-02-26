const Hero = () => {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat py-8" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/bg-hero.jpg)`}}>
            <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>

            <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
                <div className="flex flex-col items-center justify-center lg:flex-row">
                    <div className="rounded-full border-8 border-yellow shadow-xl">
                        <img
                            src={process.env.PUBLIC_URL + "/img/blog-author.jpg"}
                            className="h-48 rounded-full sm:h-56"
                            alt="author"
                        />
                    </div>
                    <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                        <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                            Oh, hello! It's me, Tyler
                        </h1>
                        <div className="flex items-center justify-center pt-5 mt-5 sm:justify-start sm:pt-0">
                            <a
                                href="https://tylerolmsted-assets.s3.us-east-2.amazonaws.com/Tyler-Olmsted-Resume.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDwmqPYN1p%2Bu31CvDOwi6O2Aeib%2FHB3c6VHb0QVWylnfwIhAM6HT8nhUk9tD4FIwh%2F4S9TEC17hwuaBUrGahsMsmvWRKtYDCML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMzgxNDkxODM4Nzg0IgwbzyHkwK9rVhEeImsqqgPe2eG5Cc4rdplFL1hp1oCVP8HTb64lWJsb0Ujz87i%2BsGpeirxa%2B4II7EPTVEAa9%2BEPB%2BKgwI2iSRS2qBpxYE2xF5voxEAtXXDluOwRpOKNTiHptJxtpam%2BFBb%2BgLAWH3D%2BaHSXqosavQABv%2BkRG4QZIK8Qw0QIRlOAri7M6LJZBzAm8je81kfIPImigLEBGG276l%2F6i7WBF4U6wCjKy2KYKwynIoY2otOwdJ4JTrF%2FFhEeJpCd45oxQR%2BHcJVUP%2FG%2Bk0XM087v6p6z%2BJjcE1%2BA3P99EOFCw73QxKbJoJDgWpKmXmQ03OSmZcnx4W35wyCtaLlTTMve%2FFNR4g%2B5BNLB86yt%2FlkUDQGyonX9LozMZTkw0zEdMjJta5OxgtZpVq6heJ6ek%2BCc1uYjOkngKjGu8wyHdYEGwFie6eag6ZvES7xoRPbJKZdrXB1e%2Bp21eqQM7n5FUM6l9EINkMN0hFtwvwrp7curN%2FYztPLpFCNs4KhXeKjisk%2BJuOWz1mP5ptFTd8JfD%2BCKq9I4LwzcOwS1lKpY8AFLAsy6aozjrhIebceoj6%2F6fRK3x1swq%2F7yrgY6kwIuPFCssdXsvXKQfxXxo%2FiLzG9nQ9c5z7Q%2FsDT%2F3qoaS8OYO1F4Z43l0E8kfG87EqfIbD4vD4NvxjWDsHdyXM7yoTKc0JeodW3gcUAMIC2CCsgE2IJ9VZvikSTb6MDXfGlO%2FNH%2FznG9k6ta%2Ba8K8AvCtcVyT95SClopjLSe86bGy%2FAqlfoLmeJOJPHrG8R73wh1aHkVUjEoKVCh84lBXPEzHgzu3XhImx9Jvxi%2Fc%2FEo93zJCMYk8mgjKuX5iAkGw05xxE6F15StHYNhttVqt8wk%2BmwOAlM7SJeaRHbS5Th4KgzYcfyoBE6j27WkOe8regmGKXReb3YgRUjyUI050kWenRMeHspfARJewZ9CNDpOFc9MwA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240226T172311Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAVRUVPP5AM2VHMFXX%2F20240226%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=bfbf864d1fa01fc78f1de16dc8fcac8a0acd7672f84233d63a8bd339722c8a67"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded bg-yellow px-4 py-2 font-body text-sm font-bold uppercase text-primary hover:bg-grey-20"
                            >
                                My Resume
                            </a>
                        </div>
                        <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                            <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-0">
                                <p className="font-body text-lg uppercase text-white">Let's connect</p>
                                <div className="hidden sm:block">
                                    <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                                </div>
                            </div>
                            <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
                                <a href="https://www.linkedin.com/in/tyler-olmsted-8476716/" target="_blank" rel="noreferrer" className="pl-4">
                                    <i
                                        className="bx bxl-linkedin text-2xl text-white hover:text-yellow"
                                    ></i>
                                </a>
                                <a href="https://www.instagram.com/slimanddangerous/" target="_blank" rel="noreferrer" className="pl-4">
                                    <i
                                        className="bx bxl-instagram text-2xl text-white hover:text-yellow"
                                    ></i>
                                </a>
                                <a href="https://google.com" className="pl-4">
                                    <i
                                        className="bx bx-envelope text-2xl text-white hover:text-yellow"
                                    ></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
