import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {githubIcon, live} from "../assets/images";
import CTA from '../components/CTA'
import {projects} from "../constants";
const Projects = () => {
    return (
        <div className="max-container">
            <h3 className="subhead-text">My Projects</h3>
            <div className="mb-5" />
            <p className="text-slate-500">
                I’ve built several projects over time, but these are the ones I’m most proud of. Many of them are
                open-source, so if you come across something that piques your interest, feel free to explore the
                codebase and contribute your ideas for further enhancements. Your collaboration is highly valued!
                <br />
                Have an project idea you’d like to build together? Feel free to reach out — let’s create something
                impactful.
            </p>
            <div className="mt-12 flex">
                <VerticalTimeline>
                    {projects.map((project, index) => (
                        <VerticalTimelineElement
                            key={project.tags}
                            iconStyle={{background: project.iconBg}}
                            icon={
                                <div className="flex justify-center items-center w-full h-full">
                                    <img
                                        src={project.icon}
                                        alt={project.tags}
                                        className="w-[60%] h-[60%] object-contain"
                                    />
                                </div>
                            }
                            contentStyle={{
                                borderBottom: "8px",
                                borderStyle: "solid",
                                borderBottomColor: project.iconBg,
                                boxShadow: "none",
                            }}
                        >
                            <div>
                                <h3 className="text-black text-xl font-poppins font-semibold">{project.title}</h3>
                                <p className="text-black-500 font-medium text-base" style={{margin: 0}}>
                                    {project.tags}
                                </p>
                            </div>

                            <ul className="my-5 list-disc ml-5 space-y-2">
                                {project.points.map((point, index) => (
                                    <li
                                        key={`project-point-${index}`}
                                        className="text-black-500/50 font-normal pl-1 text-sm"
                                    >
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex gap-3 mt-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-[#475472] text-white rounded-xl text-sm 
                                                    shadow-[0_6px_0_#0d0d0d] hover:translate-y-[2px] 
                                                    hover:shadow-[0_4px_0_#0d0d0d] active:translate-y-[4px] 
                                                    active:shadow-none transition-transform duration-150"
                                    >
                                        <img src={githubIcon} alt="github Icon" className="w-5 h-5 object-contain" />
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-[#e1584b] text-white rounded-xl text-sm 
                                                    shadow-[0_6px_0_#0d0d0d] hover:translate-y-[2px] 
                                                    hover:shadow-[0_4px_0_#0d0d0d] active:translate-y-[4px] 
                                                    active:shadow-none transition-transform duration-150"
                                    >
                                        <img src={live} alt="Live Icon" className="w-5 h-5 object-contain" />
                                    </a>
                                )}
                            </div>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
            <div className="mt-10"/>
            <hr className="border-slate-200" />

            <CTA />
        </div>
    );
};

export default Projects;
