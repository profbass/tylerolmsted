import { Link } from 'react-scroll'; 


const menuItems = [
    { name: 'Home', href: 'home', id: 1 },
    { name: 'About', href: 'about', id: 2 },
    { name: 'Services', href: 'services', id: 3 },
    { name: 'Contact', href: 'contact', id: 4 },
];

function Navigation() {

    return (
        <ul className="hidden sm:flex items-center space-x-8 navigation">
            {menuItems.map((item) => (
                <li key={item.id}>
                    <Link
                        to={item.href}
                        smooth={true}
                        duration={500}
                        className="font-body text-lg uppercase text-white hover:text-yellow"
                    >
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default Navigation;
