import React from "react";

const TextBlock = ({ title, content }) => {
    return (
        <div className="text-block slide-in-fwd-center">
            <h2>{title}</h2>
            {content}
        </div>
    );
};

export default TextBlock;