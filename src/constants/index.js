import {mortarboard,program,mental_health,keyboard} from "../assets/images";
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    react,
    redux,
    tailwindcss,
    java,
    sql,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Programming Language",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "DBMS",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
];

export const projects = [
    {
        title: "University Management System",
        tags: "Java, SQL, JDBC, Swing, OOP, Database Integration",
        icon: mortarboard,
        iconBg: "#accbe1",
        date:"Feb 2024 - March 2024",
        
        points: [
            "Developed a University Management System in Java to manage student, faculty, and course information efficiently.",
            "Implemented CRUD operations for user data using Java and SQL for database connectivity.",
            "Designed a modular structure with clear separation between data handling, business logic, and user interface.",
            "Enhanced system usability with role-based access for administrators, teachers, and students.",
        ],
        github:'https://github.com/akshans16/University-Management-System-repo',
    },
     {
        title: "Typing Efficiency Analyzer",
        tags: "HTML, CSS, JS, Responsive Design, Real Time Calculation",
        icon: keyboard,
        iconBg: "#b7e4c7",
         date: "Jan 2025 - Feb 2025",
        points: [
            "Designed and developed a Typing Speed Test web application using HTML, CSS, and JavaScript to measure typing speed and accuracy.",
            "Implemented real-time WPM calculation, accuracy tracking, and dynamic paragraph generation for an interactive user experience.",
            "Focused on responsive design and clean UI to ensure usability across devices.",
            "Applied DOM manipulation and front-end best practices to create a smooth and engaging interface.",
        ],
        github:'https://github.com/akshans16/Typing-Speed-Test',
        live:'https://effervescent-lolly-3bf738.netlify.app/'
    },
    {
        title: "MindEase",
        tags: "HTML, CSS, JavaScript, React.js, Firebase Database Integration",
        icon: mental_health,
        iconBg: "#fbc3bc",
        date: "July 2025 - Aug 2025",

        points: [
            "Collaboratively designed and developed MindEase – Stress Management Web Application using React.js, aimed at promoting mental wellness and relaxation.",
            "Implemented interactive features such as mood tracker, breathing exercises, meditation tools, motivational stories, movie recommendations, casual games, and nature soundscapes.",
            "Followed a modular and scalable architecture for efficient component management and future feature integration.",
            "Built a responsive and engaging user interface to ensure seamless performance across devices and enhance user interaction.",
        ],
        github:'https://github.com/akshans16/Mindease',
        live:'https://mindease1612.netlify.app/'
    },
    {
        title: "3D Portfolio",
        tags: "React.js, Three.js, @react-three/fiber, @react-three/drei, 3D Animation",
        icon: program,
        iconBg: "#a2d2ff",
        date: "Oct 2025 - Present",
        points: [
            "Designing and developing an interactive 3D portfolio using React.js, Three.js, and @react-three/fiber.",
            "Integrating dynamic 3D models, animations, and effects to showcase projects and skills.",
            "Implementing responsive layouts and smooth performance across devices and browsers.",
        ],
        github:'https://github.com/akshans16/3D_Portfolio',
        live:''
    },
   
];

export const socialLinks = [
    {
        name: "GitHub",
        iconUrl: github,
        link: "https://github.com/akshans16",
    },
    {
        name: "LinkedIn",
        iconUrl: linkedin,
        link: "https://www.linkedin.com/in/akshansh-khare",
    },
    {
        name: "Contact",
        iconUrl: contact,
        link: "/contact",
    },
];
