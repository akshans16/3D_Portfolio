import Draggable from "react-draggable";

import {useState,useRef} from "react";

const AboutBox = () => {
    const [isDragging, setIsDragging] = useState(false);
    const nodeRef = useRef(null);
    return (
        <Draggable nodeRef={nodeRef} onStart={() => setIsDragging(true)} onStop={() => setIsDragging(false)}>
            <div
            ref={nodeRef}
                className={`hidden lg:block lg:absolute lg:top-28 lg:left-[75%] bg-white/80 text-black p-4 rounded-xl shadow-lg w-64 z-20

            ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            >
                <h3 className="font-bold text-lg">Lil, About Me 🧑‍💻</h3>
                <p>Currently pursuing MCA. Open to opportunities — just a message away!</p>
            </div>
        </Draggable>
    );
};

export default AboutBox;
