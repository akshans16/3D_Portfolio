import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";
import {skills, projects} from "../constants";

const About = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">
                Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow"> Akshansh</span> 👋
            </h1>

            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>
                    I’m a Software Engineer who loves turning ideas into real, working applications. I focus on learning
                    by doing, building projects that not only solve problems but also help others explore and grow in
                    tech along the way.
                </p>
            </div>

            <div className="py-10 flex flex-col">
                <h3 className="subhead-text">My Skills</h3>
                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>
                        I love experimenting with new tech and bringing ideas to life through code. I’ve picked up a mix
                        of skills in programming, web development, and problem-solving along the way. I’m always
                        learning something new, improving how I write code, and finding better ways to build cool and
                        useful stuff.
                    </p>
                </div>

                <div className="mt-16 flex flex-wrap gap-12">
                    {skills.map((skill) => (
                        <div className="block-container w-20 h-20" key={skill.name}>
                            <div className="btn-back rounded-xl" />
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <hr className="border-slate-200" />

            <CTA />
        </section>
    );
};

export default About;
