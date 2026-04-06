import React from "react";
const SectionTitle = ({
    title = "Section Title",
    description = "Lorem ipsum quia dolor sit porro quisquam est qui amet consectetur adipisci, sed quia duis aute irure dolor in reprehenderit dolore magna aliqua, porro quisquan est qui nisi ut aliquid ex ea commodo. Culpa quia officia deserunt mollit anim id est laborum",
    varient = "black",
    position = "center",
}) => {
    const variants = {
        black: {
            title: "text-secondary",
            description: "text-black",
        },
        white: {
            title: "text-white",
            description: "text-white",
        },
    };
    const positions = {
        center: "mx-auto text-center",
        left: "text-left",
    }
    const style = variants[varient];
    const positionStyle = positions[position];
    return (
        <div className={`lg:max-w-[70%] ${positionStyle} space-y-4 fade-up`}>
            <h2 className={style.title}>{title}</h2>
            <p className={`lg:text-[1.25rem] lg:leading-8 ${style.description}`}>
                {description}
            </p>
        </div>
    );
};

export default SectionTitle;
