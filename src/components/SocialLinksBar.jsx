import { socialLinks } from "../constants";

const SocialLinksBar = () => {
    return (
        <div className="glassBar flex gap-4 rounded-full py-2 px-4">
            {socialLinks.map((item) => (
                <a
                    key={item.name}
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex justify-center items-center font-bold rounded-full hover:scale-125 transition-transform duration-300 ease-in-out"
                >
                    <img src={item.iconUrl} alt={item.name} className="w-6 h-6 object-contain" />
                </a>
            ))}
        </div>
    );
};

export default SocialLinksBar;
