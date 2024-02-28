function Logo() {
    return (
        <div>
            <a href="/">
                <img src={process.env.PUBLIC_URL + '/img/logo-tyler-olmsted.svg'} className="w-20 lg:w-24" alt="Tyler Olmsted Logo" />
            </a>
        </div>
    );
}

export default Logo;
