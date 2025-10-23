import {NavLink} from "react-router-dom";
import {socialLinks} from "../constants";
const Navbar = () => {
    return (
        <header className="header">
            <div className="flex gap-6">
                <NavLink
                    to="/"
                    className=" w-10 h-10 rounded flex justify-center items-center bg-white font-bold shadow-md"
                >
                    <p className="blue-gradient_text">AK</p>
                </NavLink>

                <div className="flex gap-4">
                    {socialLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.link}
                            target={item.link.startsWith("http") ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded flex justify-center items-center bg-white font-bold shadow-mdhover:scale-105 transition"
                        >
                            <img src={item.iconUrl} alt={item.name} className="w-5 h-5 object-contain" />
                        </a>
                    ))}
                </div>
            </div>

            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="/about" className={({isActive}) => (isActive ? "text-blue-500" : "text-black")}>
                    About
                </NavLink>
                <NavLink to="/projects" className={({isActive}) => (isActive ? "text-blue-500" : "text-black")}>
                    Projects
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;
