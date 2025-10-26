import {NavLink} from "react-router-dom";
import {socialLinks} from "../constants";
const Navbar = () => {
    return (
        <header className="header">
            {/* Logo AK */}
            <NavLink
                to="/"
                className=" w-10 h-10 rounded flex justify-center items-center bg-white font-bold shadow-md"
            >
                <p className="blue-gradient_text">AK</p>
            </NavLink>

            {/* Navlink -> About and Projects */}
            <nav className="flex text-lg gap-7 font-medium">
                <div className="bg-white w-auto h-10 px-6 flex items-center justify-center gap-8 rounded-lg">
                    <NavLink
                        to="/about"
                        className="relative text-blue-500 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300"
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className="relative text-blue-500 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300"
                    >
                        Projects
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
