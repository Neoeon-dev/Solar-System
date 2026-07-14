import React from "react";
import Record from "react";
import "./Planet.css"

interface Props{
    size: number;
    color: string;
}

function Planet({size, color} : Props){
    return (
        <div className="Planet" style={
            {
                "--size": `${size}px`,
                "--color": color
            } as React.CSSProperties & Record<`--${string}`, string>
        }
        >
        </div>
    );
}

export default Planet;